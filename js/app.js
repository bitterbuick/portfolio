/**
 * Developer Portfolio Application Logic
 * Handles interactive project filters, modal drawers, dynamic terminal,
 * scroll effects, and ambient particle canvas animation.
 */

document.addEventListener('DOMContentLoaded', () => {
  initParticleCanvas();
  initHeaderScroll();
  renderProjects('all');
  renderSkills();
  renderExperience();
  initFilterTabs();
  initModalListeners();
  initTerminal();
});

/* --- Ambient Particle Background Canvas --- */
function initParticleCanvas() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particles = [];
  const particleCount = 45;

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 2 + 1,
      color: Math.random() > 0.5 ? 'rgba(0, 242, 254, ' : 'rgba(112, 0, 255, ',
      alpha: Math.random() * 0.5 + 0.1
    });
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);

    // Draw connecting lines between close particles
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

    // Render particles
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

/* --- Header Scroll Glass Effect --- */
function initHeaderScroll() {
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

/* --- Render Project Cards --- */
function renderProjects(categoryFilter = 'all') {
  const container = document.getElementById('projects-container');
  if (!container) return;

  const filtered = categoryFilter === 'all' 
    ? PORTFOLIO_DATA.projects 
    : PORTFOLIO_DATA.projects.filter(p => p.category === categoryFilter);

  container.innerHTML = filtered.map(project => `
    <div class="project-card" style="--card-border-color: ${project.borderColor}">
      <div>
        <span class="project-tag-badge">${project.tag}</span>
        <h3 class="project-card-title">${project.title}</h3>
        <p class="project-card-desc">${project.shortDesc}</p>
        
        <div class="tech-tag-list">
          ${project.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
        </div>
      </div>

      <div class="project-card-footer">
        <span class="project-metrics">${project.metrics}</span>
        <div style="display: flex; gap: 8px;">
          <button class="icon-btn" onclick="openProjectModal('${project.id}')" title="View Details">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
          </button>
          <a href="${project.githubUrl}" target="_blank" rel="noopener" class="icon-btn" title="GitHub Code">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  `).join('');
}

/* --- Filter Tab Controls --- */
function initFilterTabs() {
  const tabs = document.querySelectorAll('.filter-btn');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const category = tab.getAttribute('data-filter');
      renderProjects(category);
    });
  });
}

/* --- Modal Detail View --- */
function openProjectModal(projectId) {
  const project = PORTFOLIO_DATA.projects.find(p => p.id === projectId);
  if (!project) return;

  const modal = document.getElementById('project-modal');
  const modalBody = document.getElementById('modal-body-content');

  modalBody.innerHTML = `
    <span class="project-tag-badge">${project.tag}</span>
    <h2 style="font-size: 2rem; margin-bottom: 12px;">${project.title}</h2>
    <p style="color: var(--text-muted); font-size: 1.05rem; margin-bottom: 24px;">${project.fullDesc}</p>
    
    <div style="margin-bottom: 24px;">
      <h4 style="font-size: 0.9rem; text-transform: uppercase; color: var(--text-dim); margin-bottom: 10px;">Key Architectural Highlights</h4>
      <ul class="modal-highlights-list">
        ${project.highlights.map(h => `<li>${h}</li>`).join('')}
      </ul>
    </div>

    <div style="margin-bottom: 30px;">
      <h4 style="font-size: 0.9rem; text-transform: uppercase; color: var(--text-dim); margin-bottom: 10px;">Technologies & Tools</h4>
      <div class="tech-tag-list">
        ${project.tech.map(t => `<span class="tech-tag" style="padding: 6px 12px; font-size: 0.85rem;">${t}</span>`).join('')}
      </div>
    </div>

    <div style="display: flex; gap: 16px;">
      <a href="${project.githubUrl}" target="_blank" rel="noopener" class="btn btn-primary">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
        View GitHub Repository
      </a>
      <a href="${project.liveUrl}" target="_blank" rel="noopener" class="btn btn-secondary">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
        Live Interactive Demo
      </a>
    </div>
  `;

  modal.classList.add('active');
}

function initModalListeners() {
  const modal = document.getElementById('project-modal');
  const closeBtn = document.getElementById('modal-close');

  if (closeBtn) {
    closeBtn.addEventListener('click', () => modal.classList.remove('active'));
  }
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('active');
    });
  }
}

/* --- Render Skills Matrix --- */
function renderSkills() {
  const container = document.getElementById('skills-container');
  if (!container) return;

  container.innerHTML = PORTFOLIO_DATA.skills.map(cat => `
    <div class="skill-category-card">
      <h3 class="skill-category-title">${cat.category}</h3>
      ${cat.items.map(item => `
        <div class="skill-item">
          <div class="skill-info">
            <span>${item.name}</span>
            <span style="color: var(--accent-cyan); font-family: var(--font-mono);">${item.level}%</span>
          </div>
          <div class="skill-progress-bg">
            <div class="skill-progress-bar" style="width: ${item.level}%"></div>
          </div>
        </div>
      `).join('')}
    </div>
  `).join('');
}

/* --- Render Work Experience --- */
function renderExperience() {
  const container = document.getElementById('experience-container');
  if (!container) return;

  container.innerHTML = PORTFOLIO_DATA.experience.map(exp => `
    <div class="timeline-item">
      <div class="timeline-marker"></div>
      <div class="timeline-period">${exp.period}</div>
      <h3 class="timeline-role">${exp.role}</h3>
      <div class="timeline-company">${exp.company}</div>
      <p class="timeline-desc">${exp.description}</p>
    </div>
  `).join('');
}

/* --- Interactive Terminal Widget --- */
function initTerminal() {
  const input = document.getElementById('terminal-input');
  const body = document.getElementById('terminal-body');
  if (!input || !body) return;

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const cmd = input.value.trim().toLowerCase();
      input.value = '';
      if (!cmd) return;

      appendTerminalLine(`<span class="terminal-prompt">bitterbuick@dev:~$</span> ${cmd}`);

      if (cmd === 'clear') {
        body.innerHTML = '<div class="terminal-line">Terminal screen cleared. Type <span style="color: var(--accent-cyan);">help</span> for commands.</div>';
        return;
      }

      if (PORTFOLIO_DATA.terminalCommands[cmd]) {
        appendTerminalLine(PORTFOLIO_DATA.terminalCommands[cmd]);
        if (cmd === 'repo') {
          window.open(PORTFOLIO_DATA.developer.github, '_blank');
        }
      } else {
        appendTerminalLine(`Command not found: ${cmd}. Type <span style="color: var(--accent-cyan);">help</span> to view commands.`);
      }

      body.scrollTop = body.scrollHeight;
    }
  });
}

function appendTerminalLine(text) {
  const body = document.getElementById('terminal-body');
  const line = document.createElement('div');
  line.className = 'terminal-line';
  line.innerHTML = text;
  body.appendChild(line);
}
