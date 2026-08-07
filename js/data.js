/**
 * Portfolio Data Configuration
 * Developer: Adam (bitterbuick)
 * Authentic Repository Data & Metadata Store
 */

const PORTFOLIO_DATA = {
  developer: {
    name: "Adam (bitterbuick)",
    handle: "bitterbuick",
    title: "Security Engineer & Open Source Developer",
    tagline: "Building US Congress EVS voting auditors, SEC EDGAR parsers, OSINT CLI tools, and MCP servers.",
    bio: "Developer building open-source intelligence frameworks (Osintinel), US House of Representatives roll-call voting auditors (rep-tracker), SEC EDGAR corporate subsidiary parsers (edgar-50-percent), Model Context Protocol (MCP) servers, and local privacy data explorers.",
    location: "San Francisco, CA",
    status: "Active GitHub Creator",
    github: "https://github.com/bitterbuick",
    email: "adam.w.freeman@gmail.com",
    avatarUrl: "https://avatars.githubusercontent.com/u/11279836?v=4",
    stats: [
      { label: "Public Repositories", value: "16+" },
      { label: "Primary Language", value: "Python / TS" },
      { label: "Tooling", value: "OSINT & MCP" },
      { label: "Data Sources", value: "SEC & EVS XML" }
    ]
  },

  // Authentic projects matching bitterbuick's real repositories
  projects: [
    {
      id: "rep-tracker",
      title: "rep-tracker",
      category: "dev-tools",
      featured: true,
      tag: "Congressional Voting Record Audit",
      shortDesc: "House roll-call history audit for Rep. Andrea Salinas (D-OR-6, bioguide S001226) & US Congress Members directly from official House EVS XML feeds.",
      fullDesc: "Audits full House roll-call history by parsing clerk.house.gov/evs official XML feeds directly without third-party API dependencies. Includes interactive Bioguide ID lookup for US Congress Members.",
      tech: ["Python", "XML Parsing", "clerk.house.gov EVS", "GitHub Pages"],
      metrics: "🏛 US House EVS XML | 📊 Congress Audit",
      gradient: "linear-gradient(135deg, rgba(0,242,254,0.2), rgba(112,0,255,0.2))",
      borderColor: "#00f2fe",
      githubUrl: "https://github.com/bitterbuick/rep-tracker",
      liveUrl: "https://bitterbuick.github.io/rep-tracker/",
      highlights: [
        "Direct parsing of House EVS XML feeds (clerk.house.gov/evs/{year}/roll{NNN}.xml)",
        "Bioguide ID finder for Rep. Andrea Salinas (S001226) and US Representatives",
        "Zero dependency on retired third-party APIs"
      ]
    },
    {
      id: "edgar-50-percent",
      title: "edgar-50-percent",
      category: "ai-ml",
      featured: true,
      tag: "SEC EDGAR 50% Rule Analyzer",
      shortDesc: "Identifies majority-owned (>=50%) subsidiaries of public companies by parsing SEC 10-K Exhibit 21 filings via edgartools.",
      fullDesc: "Runs on 100% free SEC EDGAR public infrastructure (sec.gov) to download and extract corporate entity structures, majority stakes, and foreign subsidiary ownership lists without paid API keys.",
      tech: ["Python", "edgartools", "SEC EDGAR API", "Finance"],
      metrics: "📊 SEC 10-K Exhibit 21 | 💵 $0 Cost / Free SEC Data",
      gradient: "linear-gradient(135deg, rgba(112,0,255,0.2), rgba(255,0,128,0.2))",
      borderColor: "#7000ff",
      githubUrl: "https://github.com/bitterbuick/edgar-50-percent",
      liveUrl: "https://github.com/bitterbuick/edgar-50-percent",
      highlights: [
        "Parses SEC 10-K Exhibit 21 subsidiary disclosure schedules",
        "Calculates >=50% majority ownership stakes",
        "Free and open SEC data infrastructure with zero subscription fees"
      ]
    },
    {
      id: "openai-data-explorer",
      title: "openai-data-explorer",
      category: "ai-ml",
      featured: true,
      tag: "ChatGPT Privacy Export Explorer",
      shortDesc: "Fully local, offline web app ingesting OpenAI/ChatGPT privacy export ZIPs with SQLite FTS5 full-text search & PII detection.",
      fullDesc: "Provides local privacy-first exploration of ChatGPT conversation history exports. Uses SQLite FTS5 full-text indexing, date/role filtering, message thread views, and automated PII detection.",
      tech: ["Python", "SQLite FTS5", "Flask / Web", "Privacy & PII"],
      metrics: "🔒 100% Offline / Local | 🔎 SQLite FTS5",
      gradient: "linear-gradient(135deg, rgba(0,245,160,0.2), rgba(0,242,254,0.2))",
      borderColor: "#00f5a0",
      githubUrl: "https://github.com/bitterbuick/openai-data-explorer",
      liveUrl: "https://github.com/bitterbuick/openai-data-explorer",
      highlights: [
        "SQLite FTS5 full-text search across conversation transcripts",
        "Automated PII detection scanner",
        "No data leaves your local machine"
      ]
    },
    {
      id: "starlink-watch",
      title: "starlink-watch",
      category: "full-stack",
      featured: true,
      tag: "Cloud Automation & Telemetry",
      shortDesc: "Automated daily digest monitoring Starlink satellite constellation metrics, orbital shells, and astronomical footprint via GitHub Actions.",
      fullDesc: "Runs twice daily via GitHub Actions workflows to compute active satellite counts, orbital shell altitudes, optical inter-satellite links, and visual astronomical impact metrics without paid APIs.",
      tech: ["Python", "GitHub Actions", "Telemetry", "GitHub Pages"],
      metrics: "📡 Constellation Metrics | 🛰 GitHub Actions Digest",
      gradient: "linear-gradient(135deg, rgba(255,180,0,0.2), rgba(255,0,128,0.2))",
      borderColor: "#ffb400",
      githubUrl: "https://github.com/bitterbuick/starlink-watch",
      liveUrl: "https://bitterbuick.github.io/starlink-watch/",
      highlights: [
        "Computes active satellite constellation totals (6,400+ satellites)",
        "Monitors orbital shell altitudes and optical laser inter-links",
        "Automated GitHub Actions daily digest publishing to GitHub Pages"
      ]
    },
    {
      id: "osintinel",
      title: "osintinel",
      category: "dev-tools",
      featured: true,
      tag: "OSINT Gathering Framework",
      shortDesc: "Spiderfoot-inspired Open Source Intelligence (OSINT) gathering CLI framework in Python.",
      fullDesc: "Modular command-line tool for intelligence gathering, WHOIS footprinting, DNS enumeration, and report generation.",
      tech: ["Python", "CLI", "Apache-2.0", "OSINT Modules"],
      metrics: "🛡 OSINT Framework | ⚙️ Python CLI",
      gradient: "linear-gradient(135deg, rgba(0,242,254,0.2), rgba(0,245,160,0.2))",
      borderColor: "#00f2fe",
      githubUrl: "https://github.com/bitterbuick/osintinel",
      liveUrl: "https://github.com/bitterbuick/osintinel",
      highlights: [
        "Modular OSINT source collectors",
        "Structured report generation in data/ and reports/",
        "Command line interface in src/cli/"
      ]
    },
    {
      id: "claude-google-drive-mcp",
      title: "claude-google-drive-mcp",
      category: "ai-ml",
      featured: false,
      tag: "Model Context Protocol Server",
      shortDesc: "Custom Model Context Protocol (MCP) server for Google Drive with full OAuth control & TypeScript execution.",
      fullDesc: "Equips LLM assistants (such as Claude and Gemini) with direct tool calls to search, read, and manage Google Drive files with self-hosted OAuth token control.",
      tech: ["TypeScript", "Node.js", "MCP Protocol", "Google Drive API"],
      metrics: "🤖 MCP Protocol | 🔑 OAuth Control",
      gradient: "linear-gradient(135deg, rgba(255,0,128,0.2), rgba(112,0,255,0.2))",
      borderColor: "#ff0080",
      githubUrl: "https://github.com/bitterbuick/claude-google-drive-mcp",
      liveUrl: "https://github.com/bitterbuick/claude-google-drive-mcp",
      highlights: [
        "Full OAuth credential flow and automatic token persistence",
        "TypeScript MCP tool handlers for document search and content reading",
        "Debug CLI helper debug-oauth.ts"
      ]
    },
    {
      id: "MMM-Beestat",
      title: "MMM-Beestat",
      category: "open-source",
      featured: false,
      tag: "MagicMirror² Thermostat Module",
      shortDesc: "MagicMirror² smart-home module displaying Ecobee thermostat runtime & analytics via the Beestat API (beestat.io).",
      fullDesc: "Integrates with Beestat's open API to render HVAC heating/cooling runtimes, indoor/outdoor temperature trends, and humidity levels on MagicMirror² displays.",
      tech: ["JavaScript", "MagicMirror²", "Beestat API"],
      metrics: "🪞 Smart Mirror | 🌡 Ecobee Analytics",
      gradient: "linear-gradient(135deg, rgba(0,245,160,0.2), rgba(0,242,254,0.2))",
      borderColor: "#00f5a0",
      githubUrl: "https://github.com/bitterbuick/MMM-Beestat",
      liveUrl: "https://github.com/bitterbuick/MMM-Beestat",
      highlights: [
        "Connects to official Beestat API (api.beestat.io)",
        "Visual thermostat card for MagicMirror² smart home displays",
        "Tracks daily HVAC runtime logs"
      ]
    },
    {
      id: "BallBustr",
      title: "BallBustr",
      category: "full-stack",
      featured: false,
      tag: "Python Arcade Game",
      shortDesc: "Classic brick-breaker game implemented in Python (PyrickBreack.py) with paddle controls & ball collision physics.",
      fullDesc: "Interactive Python brick breaker game featuring collision detection between ball, bricks, and paddle with responsive controls.",
      tech: ["Python", "Pygame", "Collision Physics"],
      metrics: "🎮 PyrickBreack.py | 🧱 Python Arcade",
      gradient: "linear-gradient(135deg, rgba(255,180,0,0.2), rgba(255,0,128,0.2))",
      borderColor: "#ffb400",
      githubUrl: "https://github.com/bitterbuick/BallBustr",
      liveUrl: "https://github.com/bitterbuick/BallBustr",
      highlights: [
        "Paddle movement and sphere collision detection",
        "Brick grid rendering and score tracking"
      ]
    },
    {
      id: "Kryptographie",
      title: "Kryptographie",
      category: "open-source",
      featured: false,
      tag: "Cryptography Exercises",
      shortDesc: "Classical cryptography exercise lab implementing Caesar shift encryption and cipher analysis.",
      fullDesc: "Educational repository for cryptography exercises including Caesar shift ciphers and key transformation routines.",
      tech: ["Python", "Cryptography", "Ciphers"],
      metrics: "🔐 Caesar Shift | 🧠 Crypto Lab",
      gradient: "linear-gradient(135deg, rgba(0,242,254,0.2), rgba(112,0,255,0.2))",
      borderColor: "#00f2fe",
      githubUrl: "https://github.com/bitterbuick/Kryptographie",
      liveUrl: "https://github.com/bitterbuick/Kryptographie",
      highlights: [
        "Caesar shift cipher implementation",
        "Key transformation exercises"
      ]
    }
  ],

  skills: [
    {
      category: "Languages & Frameworks",
      icon: "code",
      items: [
        { name: "Python", level: 96 },
        { name: "TypeScript / JavaScript", level: 90 },
        { name: "HTML5 & CSS3", level: 92 },
        { name: "Shell / Bash", level: 88 }
      ]
    },
    {
      category: "Security & Open Data",
      icon: "cpu",
      items: [
        { name: "OSINT & Reconnaissance (Osintinel)", level: 92 },
        { name: "SEC EDGAR API & 10-K Parsing", level: 90 },
        { name: "Clerk of the House EVS Roll-Call XML", level: 94 },
        { name: "Model Context Protocol (MCP)", level: 88 }
      ]
    },
    {
      category: "Cloud, Privacy & Analytics",
      icon: "server",
      items: [
        { name: "SQLite FTS5 Full-Text Search", level: 90 },
        { name: "GitHub Actions Automation Workflows", level: 95 },
        { name: "MagicMirror² & Beestat API", level: 85 },
        { name: "OpenAI Data Export & PII Auditing", level: 88 }
      ]
    }
  ],

  experience: [
    {
      period: "Active GitHub Developer",
      role: "Open Source Creator & Security Developer",
      company: "GitHub / bitterbuick",
      description: "Authoring rep-tracker (Congressional EVS voting audit tool), edgar-50-percent (SEC 10-K subsidiary analyzer), Osintinel (OSINT CLI framework), Model Context Protocol servers, and starlink-watch (cloud automation metrics)."
    }
  ],

  terminalCommands: {
    help: "Available commands:\n  • rep-tracker - View Congressional voting auditor details\n  • edgar       - SEC 10-K subsidiary parser info\n  • osintinel   - OSINT CLI tool suite info\n  • mcp         - Model Context Protocol server list\n  • repos       - List all public repositories\n  • contact     - Display contact & GitHub handle\n  • clear       - Clear terminal screen",
    "rep-tracker": "REP-TRACKER:\n  • Purpose: Full House roll-call history for Rep. Andrea Salinas (D-OR-6, bioguide S001226)\n  • Data Source: clerk.house.gov/evs XML feeds directly\n  • Bioguide Finder: Search US Representatives by name/state/district",
    edgar: "EDGAR 50% RULE ANALYZER:\n  • Purpose: Identifies majority-owned (>=50%) subsidiaries of public companies\n  • Data Source: SEC 10-K Exhibit 21 via edgartools\n  • Cost: $0 (Free public SEC EDGAR infrastructure)",
    osintinel: "OSINTINEL:\n  • Purpose: Command-line OSINT gathering tool (Spiderfoot-style)\n  • Modules: WHOIS, DNS, Shodan, Social Footprint",
    mcp: "MCP SERVERS:\n  • claude-google-drive-mcp\n  • google-calendar-mcp-server\n  • google-mail-mcp-server",
    repos: "ALL PUBLIC REPOS (bitterbuick):\n  • rep-tracker (Congressional Vote Audit)\n  • edgar-50-percent (SEC 10-K Exhibit 21)\n  • openai-data-explorer (ChatGPT Export FTS5)\n  • starlink-watch (Constellation Digest)\n  • osintinel (OSINT Framework)\n  • claude-google-drive-mcp (Drive MCP)\n  • BallBustr (PyrickBreack.py)\n  • MMM-Beestat (Ecobee MagicMirror)\n  • Kryptographie (Caesar Shift Cipher)",
    contact: "CONTACT DETAILS:\n  • Email: adam.w.freeman@gmail.com\n  • GitHub: https://github.com/bitterbuick",
    repo: "Opening https://github.com/bitterbuick..."
  }
};
