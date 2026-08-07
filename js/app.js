/**
 * Portfolio application logic.
 *
 * Two rules this file follows:
 *   1. Every number shown on the page is fetched at load time from the project
 *      that produced it. Nothing is hardcoded and nothing is simulated.
 *   2. If a fetch fails, the figure is omitted rather than filled with a guess.
 */

const GITHUB_API = 'https://api.github.com/users/bitterbuick/repos?sort=updated&per_page=100';

/** Live values, populated by the fetches below. Empty until they land. */
const liveState = {
  starlink: null,
  repTracker: null,
  repoMeta: {}
};

document.addEventListener('DOMContentLoaded', () => {
  initParticleCanvas();
  initHeaderScroll();
  initFilterTabs();
  initModalListeners();
  initTerminal();

  renderProjects('all');
  renderEmbeds();

  loadStarlinkMetrics();
  loadRepTrackerVotes();
  loadRepoMetadata();
});

/* --- Escaping ------------------------------------------------------------ */

/** Text from the GitHub API is interpolated into markup; escape it first. */
function esc(value) {
  if (value === null || value === undefined) return '';
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function formatNumber(n) {
  return typeof n === 'number' ? n.toLocaleString() : null;
}

/** "3 hours ago" / "2 days ago" — for showing how fresh the live data is. */
function relativeTime(isoString) {
  const then = new Date(isoString);
  if (isNaN(then)) return null;

  const seconds = Math.floor((Date.now() - then) / 1000);
  if (seconds < 90) return 'just now';

  const units = [
    ['day', 86400],
    ['hour', 3600],
    ['minute', 60]
  ];
  for (const [name, size] of units) {
    const count = Math.floor(seconds / size);
    if (count >= 1) return `${count} ${name}${count === 1 ? '' : 's'} ago`;
  }
  return 'just now';
}

/* --- Live data ----------------------------------------------------------- */

/**
 * starlink-watch recomputes data/metrics.json from CelesTrak twice a day and
 * commits it. Reading it here shows whatever the project last computed.
 */
async function loadStarlinkMetrics() {
  try {
    const res = await fetch(PORTFOLIO_DATA.liveFeeds.starlink);
    if (!res.ok) return;
    liveState.starlink = await res.json();
    paintLiveStats();
  } catch (err) {
    console.info('Starlink metrics unavailable; omitting those figures.', err);
  }
}

/** Likewise for rep-tracker's vote archive. */
async function loadRepTrackerVotes() {
  try {
    const res = await fetch(PORTFOLIO_DATA.liveFeeds.repTracker);
    if (!res.ok) return;
    const data = await res.json();
    // The votes array is large and unused here; keep only the summary fields.
    liveState.repTracker = {
      member: data.member,
      district: data.district,
      count: data.count,
      updated: data.updated,
      source: data.source,
      latest: Array.isArray(data.votes) && data.votes.length
        ? data.votes[data.votes.length - 1]
        : null
    };
    paintLiveStats();
  } catch (err) {
    console.info('rep-tracker data unavailable; omitting those figures.', err);
  }
}

/** Stars, last push and primary language for the curated repos only. */
async function loadRepoMetadata() {
  try {
    const res = await fetch(GITHUB_API);
    if (!res.ok) return;
    const repos = await res.json();
    if (!Array.isArray(repos)) return;

    const wanted = new Set(PORTFOLIO_DATA.projects.map(p => p.id));
    repos.forEach(repo => {
      if (wanted.has(repo.name)) liveState.repoMeta[repo.name] = repo;
    });

    renderProjects(currentFilter);
  } catch (err) {
    console.info('GitHub metadata unavailable; cards render without it.', err);
  }
}

/** Fill the hero stat tiles once the feeds arrive. */
function paintLiveStats() {
  const { starlink, repTracker } = liveState;

  if (starlink) {
    setStat('stat-starlink', formatNumber(starlink.active_count));
    setStat('stat-starlink-sub', `active Starlink satellites · ${relativeTime(starlink.generated_at) || 'recently'}`);
  }

  if (repTracker) {
    setStat('stat-votes', formatNumber(repTracker.count));
    setStat('stat-votes-sub', `roll-call votes tracked · ${relativeTime(repTracker.updated) || 'recently'}`);
  }

  paintEmbedFreshness();
}

function setStat(id, text) {
  const el = document.getElementById(id);
  if (el && text) el.textContent = text;
}

/* --- Project cards ------------------------------------------------------- */

let currentFilter = 'all';

function renderProjects(categoryFilter = 'all') {
  currentFilter = categoryFilter;
  const container = document.getElementById('projects-container');
  if (!container) return;

  const filtered = categoryFilter === 'all'
    ? PORTFOLIO_DATA.projects
    : PORTFOLIO_DATA.projects.filter(p => p.category === categoryFilter);

  if (filtered.length === 0) {
    container.innerHTML = `<div class="empty-state">Nothing in this category.</div>`;
    return;
  }

  container.innerHTML = filtered.map(project => {
    const meta = liveState.repoMeta[project.id];

    // Only real, fetched facts go in the footer. No meta, no chips.
    const chips = [];
    if (meta) {
      if (meta.language) chips.push(esc(meta.language));
      if (meta.stargazers_count > 0) {
        chips.push(`★ ${meta.stargazers_count}`);
      }
      const pushed = relativeTime(meta.pushed_at);
      if (pushed) chips.push(`updated ${pushed}`);
      if (meta.license && meta.license.spdx_id && meta.license.spdx_id !== 'NOASSERTION') {
        chips.push(esc(meta.license.spdx_id));
      }
    }

    const liveButton = project.liveUrl
      ? `<a href="${esc(project.liveUrl)}" target="_blank" rel="noopener" class="btn btn-primary btn-sm">
           Open live demo
           <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
         </a>`
      : '';

    const verified = project.verified
      ? `<span class="verified-chip" title="Verified by running the project's own test suite">✓ ${esc(project.verified)}</span>`
      : '';

    return `
      <article class="project-card${project.liveUrl ? ' has-live' : ''}">
        <div>
          <div class="card-tag-row">
            <span class="project-tag-badge">${esc(project.tag)}</span>
            ${verified}
          </div>
          <h3 class="project-card-title">${esc(project.title)}</h3>
          <p class="project-card-desc">${esc(project.blurb)}</p>
          <div class="tech-tag-list">
            ${project.tech.map(t => `<span class="tech-tag">${esc(t)}</span>`).join('')}
          </div>
        </div>

        <div class="project-card-footer">
          <div class="footer-meta-row">
            <div class="repo-meta">${chips.map(c => `<span>${c}</span>`).join('')}</div>
            <a href="${esc(project.githubUrl)}" target="_blank" rel="noopener" class="icon-btn" title="Source on GitHub" aria-label="${esc(project.title)} source on GitHub">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </a>
          </div>
          <div class="card-actions">
            ${liveButton}
            <button class="btn btn-secondary btn-sm" onclick="openProjectModal('${esc(project.id)}')">
              How to run it
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

/* --- Inline live dashboards ---------------------------------------------- */

/**
 * The two projects that publish a browsable site are embedded directly, so a
 * visitor can use the real thing without leaving the page.
 */
function renderEmbeds() {
  const container = document.getElementById('embeds-container');
  if (!container) return;

  const embedded = PORTFOLIO_DATA.projects.filter(p => p.embed && p.liveUrl);

  container.innerHTML = embedded.map(project => `
    <section class="embed-block">
      <div class="embed-header">
        <div>
          <h3 class="embed-title">${esc(project.title)}</h3>
          <p class="embed-note">${esc(project.embedNote || '')}</p>
        </div>
        <div class="embed-actions">
          <span class="embed-freshness" id="freshness-${esc(project.id)}"></span>
          <a href="${esc(project.liveUrl)}" target="_blank" rel="noopener" class="btn btn-secondary btn-sm">
            Open full size
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
          </a>
        </div>
      </div>
      <div class="embed-frame-wrap">
        <iframe
          class="embed-frame"
          src="${esc(project.liveUrl)}"
          title="${esc(project.title)} live dashboard"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          sandbox="allow-scripts allow-same-origin allow-popups allow-downloads"></iframe>
      </div>
    </section>
  `).join('');
}

/** Label each embed with when its underlying data was last regenerated. */
function paintEmbedFreshness() {
  if (liveState.starlink) {
    const el = document.getElementById('freshness-starlink-watch');
    const rel = relativeTime(liveState.starlink.generated_at);
    if (el && rel) el.textContent = `data rebuilt ${rel}`;
  }
  if (liveState.repTracker) {
    const el = document.getElementById('freshness-rep-tracker');
    const rel = relativeTime(liveState.repTracker.updated);
    if (el && rel) el.textContent = `data rebuilt ${rel}`;
  }
}

/* --- Filters ------------------------------------------------------------- */

function initFilterTabs() {
  const container = document.querySelector('.filter-tabs');
  if (!container) return;

  container.innerHTML = PORTFOLIO_DATA.filters.map(f => {
    const count = f.id === 'all'
      ? PORTFOLIO_DATA.projects.length
      : PORTFOLIO_DATA.projects.filter(p => p.category === f.id).length;
    return `<button class="filter-btn${f.id === 'all' ? ' active' : ''}" data-filter="${esc(f.id)}">
              ${esc(f.label)} <span class="filter-count">${count}</span>
            </button>`;
  }).join('');

  container.querySelectorAll('.filter-btn').forEach(tab => {
    tab.addEventListener('click', () => {
      container.querySelectorAll('.filter-btn').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderProjects(tab.getAttribute('data-filter'));
    });
  });
}

/* --- "How to run it" modal ----------------------------------------------- */

function openProjectModal(projectId) {
  const project = PORTFOLIO_DATA.projects.find(p => p.id === projectId);
  if (!project) return;

  const modal = document.getElementById('project-modal');
  const body = document.getElementById('modal-body-content');
  if (!modal || !body) return;

  const meta = liveState.repoMeta[project.id];

  body.innerHTML = `
    <span class="project-tag-badge">${esc(project.tag)}</span>
    <h2 class="modal-title">${esc(project.title)}</h2>
    <p class="modal-lede">${esc(project.blurb)}</p>
    <p class="modal-detail">${esc(project.detail)}</p>

    <h4 class="modal-subhead">Run it yourself</h4>
    <pre class="modal-commands"><code>${project.run.map(esc).join('\n')}</code></pre>

    ${meta && meta.description ? `
      <h4 class="modal-subhead">Repository description</h4>
      <p class="modal-detail">${esc(meta.description)}</p>
    ` : ''}

    <div class="modal-actions">
      ${project.liveUrl ? `<a href="${esc(project.liveUrl)}" target="_blank" rel="noopener" class="btn btn-primary">Open live demo</a>` : ''}
      <a href="${esc(project.githubUrl)}" target="_blank" rel="noopener" class="btn btn-secondary">View source</a>
    </div>
  `;

  modal.classList.add('active');
}

function closeProjectModal() {
  const modal = document.getElementById('project-modal');
  if (modal) modal.classList.remove('active');
}

function initModalListeners() {
  const modal = document.getElementById('project-modal');
  const closeBtn = document.getElementById('modal-close');

  if (closeBtn) closeBtn.addEventListener('click', closeProjectModal);
  if (modal) {
    modal.addEventListener('click', e => {
      if (e.target === modal) closeProjectModal();
    });
  }
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeProjectModal();
  });
}

/* --- Terminal ------------------------------------------------------------ */

/**
 * Every command answers from live data or the manifest. Nothing is canned —
 * if a feed hasn't loaded, the command says so instead of inventing a reply.
 */
const TERMINAL_COMMANDS = {
  help() {
    return [
      'Commands:',
      '  projects   list the projects on this page',
      '  live       open URLs for the two live dashboards',
      '  starlink   current constellation figures (live)',
      '  votes      roll-call totals for OR-6 (live)',
      '  contact    how to reach me',
      '  clear      clear the screen'
    ].join('\n');
  },

  projects() {
    return PORTFOLIO_DATA.projects.map(p => {
      const meta = liveState.repoMeta[p.id];
      const lang = meta && meta.language ? ` [${meta.language}]` : '';
      return `  ${p.title}${lang}\n    ${p.tag} — ${p.githubUrl}`;
    }).join('\n');
  },

  live() {
    const live = PORTFOLIO_DATA.projects.filter(p => p.liveUrl);
    return live.map(p => `  ${p.title}\n    ${p.liveUrl}`).join('\n');
  },

  starlink() {
    const m = liveState.starlink;
    if (!m) return 'Starlink metrics have not loaded (the feed may be unreachable).';
    return [
      `Source: ${m.sources && m.sources.celestrak_gp_csv ? m.sources.celestrak_gp_csv : 'CelesTrak'}`,
      `  Active satellites   : ${formatNumber(m.active_count)}`,
      `  Confirmed decays    : ${formatNumber(m.decayed_total)}`,
      `  On-orbit mass       : ${formatNumber(Math.round(m.on_orbit_mass_kg))} kg`,
      `  Re-entered mass     : ${formatNumber(Math.round(m.reentered_mass_kg))} kg`,
      `  Alumina (upper bnd) : ${formatNumber(Math.round(m.alumina_kg))} kg`,
      `  Computed            : ${relativeTime(m.generated_at) || m.generated_at}`
    ].join('\n');
  },

  votes() {
    const v = liveState.repTracker;
    if (!v) return 'Vote data has not loaded (the feed may be unreachable).';
    const lines = [
      `Source: ${v.source}`,
      `  Member        : ${v.member} (${v.district})`,
      `  Votes tracked : ${formatNumber(v.count)}`,
      `  Last refresh  : ${relativeTime(v.updated) || v.updated}`
    ];
    if (v.latest) {
      lines.push(`  Most recent   : ${v.latest.date} — ${v.latest.bill || 'n/a'} (voted ${v.latest.salinas_vote})`);
      if (v.latest.subject) lines.push(`                  ${v.latest.subject}`);
    }
    return lines.join('\n');
  },

  contact() {
    const d = PORTFOLIO_DATA.developer;
    return `  Email  : ${d.email}\n  GitHub : ${d.github}`;
  }
};

function initTerminal() {
  const input = document.getElementById('terminal-input');
  const body = document.getElementById('terminal-body');
  if (!input || !body) return;

  input.addEventListener('keydown', e => {
    if (e.key !== 'Enter') return;

    const cmd = input.value.trim().toLowerCase();
    input.value = '';
    if (!cmd) return;

    appendTerminalLine(`<span class="terminal-prompt">$</span> ${esc(cmd)}`);

    if (cmd === 'clear') {
      body.innerHTML = '';
      return;
    }

    const handler = TERMINAL_COMMANDS[cmd];
    appendTerminalLine(
      handler
        ? esc(handler())
        : `Command not found: ${esc(cmd)}. Type <span class="hint">help</span>.`
    );

    body.scrollTop = body.scrollHeight;
  });
}

function appendTerminalLine(html) {
  const body = document.getElementById('terminal-body');
  if (!body) return;
  const line = document.createElement('div');
  line.className = 'terminal-line';
  line.innerHTML = html;
  body.appendChild(line);
}

/* --- Decorative background ----------------------------------------------- */

function initParticleCanvas() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const ctx = canvas.getContext('2d');
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particles = Array.from({ length: 45 }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 0.4,
    vy: (Math.random() - 0.5) * 0.4,
    radius: Math.random() * 2 + 1,
    color: Math.random() > 0.5 ? 'rgba(0, 242, 254, ' : 'rgba(112, 0, 255, ',
    alpha: Math.random() * 0.5 + 0.1
  }));

  function draw() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 140) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(0, 242, 254, ${0.12 * (1 - dist / 140)})`;
          ctx.lineWidth = 0.6;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }

    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color + p.alpha + ')';
      ctx.shadowBlur = 8;
      ctx.shadowColor = p.color + '0.8)';
      ctx.fill();
    });

    requestAnimationFrame(draw);
  }

  draw();
}

function initHeaderScroll() {
  const header = document.querySelector('.header');
  if (!header) return;
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
  });
}
