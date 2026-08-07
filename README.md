# portfolio

Source for [bitterbuick.github.io](https://bitterbuick.github.io/portfolio/) — a
single static page listing the things I've built, with the two that run as live
sites embedded directly in it.

No build step, no framework, no bundler. Three files do the work:

| File | What it is |
|---|---|
| `index.html` | Page structure |
| `js/data.js` | The project manifest — what gets shown and what it says |
| `js/app.js` | Rendering, live data fetching, and the console widget |
| `css/style.css` | Styles |

Open `index.html` in a browser, or `python3 -m http.server` and visit
<http://localhost:8000>. GitHub Actions deploys `main` to Pages.

## Where the numbers come from

Nothing on this page is hardcoded or simulated. Every figure is fetched at load
time from the project that produced it:

- **Satellite counts** — [`starlink-watch/data/metrics.json`](https://github.com/bitterbuick/starlink-watch/blob/main/data/metrics.json),
  regenerated from CelesTrak twice daily by that repo's workflow.
- **Roll-call vote totals** — [`rep-tracker/data/salinas_votes.json`](https://github.com/bitterbuick/rep-tracker/blob/main/data/salinas_votes.json),
  refetched from the Clerk of the House EVS XML feed twice daily.
- **Stars, language, last push, licence** — the GitHub REST API.

If a fetch fails, the figure is left out rather than filled in with a
placeholder. The two live dashboards are embedded as iframes pointing at the
real deployed sites, so what you interact with on this page *is* the project.

## Adding or removing a project

`js/data.js` is an allowlist: only repositories listed in `projects` appear.
Anything not listed stays off the site, which is deliberate — it means an empty
or abandoned repository can't leak onto the page just because it exists on
GitHub.

To add one, append an entry with `id` matching the repository name. Set
`liveUrl` only if there is a genuinely reachable deployed site; that field is
what puts an "Open live demo" button on the card. Add `embed: true` to have it
rendered inline in the Live dashboards section as well.

Keep `blurb`, `detail` and `run` accurate against the repository they describe —
the `run` commands are shown to visitors as the way to run the project, so they
should be commands you have actually run.
