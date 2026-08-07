/**
 * Portfolio Data Configuration
 * Developer: Adam (bitterbuick)
 */

const PORTFOLIO_DATA = {
  developer: {
    name: "Adam (bitterbuick)",
    handle: "bitterbuick",
    title: "Software & Systems Engineer",
    tagline: "Building OSINT CLI tools, MCP servers, automation scripts, and Python applications.",
    bio: "Developer working on security research tools, MCP (Model Context Protocol) servers, data exploration utilities, and custom Python apps.",
    location: "San Francisco, CA",
    status: "Active GitHub Developer",
    github: "https://github.com/bitterbuick",
    email: "adam.w.freeman@gmail.com",
    avatarUrl: "https://avatars.githubusercontent.com/u/11279836?v=4",
    stats: [
      { label: "Public Repositories", value: "16+" },
      { label: "Primary Language", value: "Python" },
      { label: "Tooling", value: "CLI & MCP" },
      { label: "License", value: "Open Source" }
    ]
  },

  // Fallback real projects array (populated directly from bitterbuick's GitHub account)
  projects: [
    {
      id: "edgar-50-percent",
      title: "edgar-50-percent",
      category: "ai-ml",
      featured: true,
      tag: "Data & Ownership Analysis",
      shortDesc: "Tool using SEC EDGAR data to analyze public company information and identify foreign entity percent ownership.",
      fullDesc: "A specialized Python project designed to parse SEC EDGAR public filings, extracting ownership structures and identifying percent foreign entity stakes for financial transparency and compliance analysis.",
      tech: ["Python", "SEC EDGAR API", "Data Parsing", "Finance"],
      metrics: "🐍 Python | 📊 SEC Data Analysis",
      gradient: "linear-gradient(135deg, rgba(0,242,254,0.2), rgba(112,0,255,0.2))",
      borderColor: "#00f2fe",
      githubUrl: "https://github.com/bitterbuick/edgar-50-percent",
      liveUrl: "https://github.com/bitterbuick/edgar-50-percent",
      highlights: [
        "Automated extraction of SEC public company disclosures",
        "Calculates foreign entity equity and voting share percentages",
        "Structured data outputs for compliance and research pipelines"
      ]
    },
    {
      id: "osintinel",
      title: "OSINTinel",
      category: "dev-tools",
      featured: true,
      tag: "OSINT & Security CLI",
      shortDesc: "OSINT (Open Source Intelligence) command line tools built for everyday security research.",
      fullDesc: "OSINTinel is a suite of command-line tools providing open-source intelligence gathering, domain reconnaissance, and public data indexing for security enthusiasts and researchers.",
      tech: ["Python", "CLI", "Apache-2.0", "OSINT"],
      metrics: "🛡 OSINT | ⚙️ CLI Tools",
      gradient: "linear-gradient(135deg, rgba(112,0,255,0.2), rgba(255,0,128,0.2))",
      borderColor: "#7000ff",
      githubUrl: "https://github.com/bitterbuick/osintinel",
      liveUrl: "https://github.com/bitterbuick/osintinel",
      highlights: [
        "Modular OSINT CLI utilities for intelligence gathering",
        "Public data querying, domain lookup, and footprint analysis",
        "Clean terminal output with configurable logging levels"
      ]
    },
    {
      id: "google-mcp-servers",
      title: "Google Calendar & Mail MCP Servers",
      category: "ai-ml",
      featured: true,
      tag: "Model Context Protocol",
      shortDesc: "Model Context Protocol (MCP) integrations for Google Calendar, Gmail, and Google Drive.",
      fullDesc: "A set of MCP (Model Context Protocol) server suites extending AI assistants (like Claude and Gemini) with direct capabilities to read, search, and manage Google Calendar events, Gmail messages, and Drive documents.",
      tech: ["TypeScript", "Python", "MCP Protocol", "Google APIs"],
      metrics: "🤖 MCP Protocol | 📅 Google Workspace",
      gradient: "linear-gradient(135deg, rgba(0,245,160,0.2), rgba(0,242,254,0.2))",
      borderColor: "#00f5a0",
      githubUrl: "https://github.com/bitterbuick/google-calendar-mcp-server",
      liveUrl: "https://github.com/bitterbuick/google-calendar-mcp-server",
      highlights: [
        "Native Model Context Protocol (MCP) tool schema definitions",
        "Secure OAuth2 authentication for Google Calendar & Mail APIs",
        "Enables LLM agents to schedule events and search emails seamlessly"
      ]
    },
    {
      id: "BallBustr",
      title: "BallBustr",
      category: "full-stack",
      featured: false,
      tag: "Python Game",
      shortDesc: "Custom arcade brick breaker game implemented in Python.",
      fullDesc: "An interactive arcade brick breaker game featuring collision detection physics, custom paddle controls, high score tracking, and level progression built in Python.",
      tech: ["Python", "Pygame / Arcade", "MIT License"],
      metrics: "🎮 Python Arcade | 🧱 Game Engine",
      gradient: "linear-gradient(135deg, rgba(255,180,0,0.2), rgba(255,0,128,0.2))",
      borderColor: "#ffb400",
      githubUrl: "https://github.com/bitterbuick/BallBustr",
      liveUrl: "https://github.com/bitterbuick/BallBustr",
      highlights: [
        "Real-time 2D physics and sphere-to-rectangle collision detection",
        "Configurable level maps and power-up mechanics",
        "Smooth input loop handling and retro sound triggers"
      ]
    },
    {
      id: "openai-data-explorer",
      title: "OpenAI Data Explorer",
      category: "ai-ml",
      featured: false,
      tag: "AI & Data Analysis",
      shortDesc: "Exploratory tool and utility for inspecting and querying OpenAI dataset formats.",
      fullDesc: "Utility designed for formatting, inspecting, and evaluating dataset JSONL files used for OpenAI fine-tuning and prompt engineering experiments.",
      tech: ["Python", "OpenAI API", "JSONL Parsing"],
      metrics: "💡 AI Tooling | 🐍 Python",
      gradient: "linear-gradient(135deg, rgba(0,242,254,0.2), rgba(0,245,160,0.2))",
      borderColor: "#00f2fe",
      githubUrl: "https://github.com/bitterbuick/openai-data-explorer",
      liveUrl: "https://github.com/bitterbuick/openai-data-explorer",
      highlights: [
        "Dataset validation for fine-tuning JSONL schemas",
        "Token counting and cost estimation utilities",
        "Interactive inspection of chat completion logs"
      ]
    },
    {
      id: "rep-tracker",
      title: "rep-tracker",
      category: "full-stack",
      featured: false,
      tag: "Fitness & Analytics",
      shortDesc: "Application for tracking workout repetitions, sets, and progress metrics over time.",
      fullDesc: "Fitness tracking application built in Python for recording exercise repetitions, volume progression, and visualizing workout trends.",
      tech: ["Python", "SQLite", "Data Visualization"],
      metrics: "🏋️ Fitness Tracking | 📈 Analytics",
      gradient: "linear-gradient(135deg, rgba(255,0,128,0.2), rgba(112,0,255,0.2))",
      borderColor: "#ff0080",
      githubUrl: "https://github.com/bitterbuick/rep-tracker",
      liveUrl: "https://github.com/bitterbuick/rep-tracker",
      highlights: [
        "Personal exercise volume and repetition logger",
        "Progressive overload metric calculations",
        "Data export and trend tracking"
      ]
    },
    {
      id: "starlink-watch",
      title: "starlink-watch",
      category: "full-stack",
      featured: false,
      tag: "Web / Monitoring",
      shortDesc: "Web dashboard and telemetry viewer for monitoring Starlink satellite connections.",
      fullDesc: "Web-based status view and monitoring interface for Starlink satellite connectivity, dish telemetry, and latency logs.",
      tech: ["HTML", "JavaScript", "Telemetry"],
      metrics: "📡 Satellite Telemetry | 🌐 Web UI",
      gradient: "linear-gradient(135deg, rgba(0,242,254,0.2), rgba(112,0,255,0.2))",
      borderColor: "#00f2fe",
      githubUrl: "https://github.com/bitterbuick/starlink-watch",
      liveUrl: "https://github.com/bitterbuick/starlink-watch",
      highlights: [
        "Real-time latency and connectivity dashboard",
        "Clean web status interface",
        "Historical log visualization"
      ]
    },
    {
      id: "MMM-Beestat",
      title: "MMM-Beestat",
      category: "open-source",
      featured: false,
      tag: "MagicMirror Module",
      shortDesc: "MagicMirror module to display Ecobee thermostat runtime via the Beestat API.",
      fullDesc: "A custom MagicMirror² module integrating the Beestat API to render real-time Ecobee HVAC runtime analytics and temperature trends on smart home mirrors.",
      tech: ["JavaScript", "MagicMirror²", "Beestat API"],
      metrics: "🪞 Smart Home | 🌡 HVAC Analytics",
      gradient: "linear-gradient(135deg, rgba(0,245,160,0.2), rgba(0,242,254,0.2))",
      borderColor: "#00f5a0",
      githubUrl: "https://github.com/bitterbuick/MMM-Beestat",
      liveUrl: "https://github.com/bitterbuick/MMM-Beestat",
      highlights: [
        "Integrates Beestat API endpoints for Ecobee telemetry",
        "Custom MagicMirror visual card component",
        "Automatic background refresh loop"
      ]
    }
  ],

  skills: [
    {
      category: "Programming & Languages",
      icon: "code",
      items: [
        { name: "Python", level: 95 },
        { name: "JavaScript / ES6+", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "HTML5 & CSS3", level: 92 },
        { name: "Shell & Bash Scripting", level: 88 }
      ]
    },
    {
      category: "Security & AI Infrastructure",
      icon: "cpu",
      items: [
        { name: "OSINT & Intelligence Tools", level: 90 },
        { name: "Model Context Protocol (MCP)", level: 88 },
        { name: "OpenAI & LLM APIs", level: 88 },
        { name: "Data Extraction & SEC EDGAR", level: 85 },
        { name: "Security Research", level: 85 }
      ]
    },
    {
      category: "Systems & Open Source",
      icon: "server",
      items: [
        { name: "Git & GitHub Workflows", level: 95 },
        { name: "REST APIs & WebHooks", level: 90 },
        { name: "Linux & Terminal Administration", level: 88 },
        { name: "MagicMirror² & Smart Home", level: 82 }
      ]
    }
  ],

  experience: [
    {
      period: "Active GitHub Creator",
      role: "Security Research & Open Source Developer",
      company: "GitHub / bitterbuick",
      description: "Developing OSINT tools, Model Context Protocol (MCP) integrations for Google services, SEC filing analysis tools, and custom Python utilities."
    }
  ],

  terminalCommands: {
    help: "Available commands:\n  • projects   - Fetch live GitHub repositories\n  • skills     - View tech stack & tools\n  • repos      - List top public GitHub repos\n  • contact    - Display email & GitHub link\n  • clear      - Clear terminal screen\n  • repo       - Open GitHub profile",
    projects: "GITHUB REPOSITORIES:\n  1. edgar-50-percent      [Python]  - SEC EDGAR company ownership parser\n  2. osintinel             [Python]  - OSINT CLI security tools\n  3. google-calendar-mcp   [MCP]     - Model Context Protocol server\n  4. BallBustr             [Python]  - Brick breaker game\n  5. openai-data-explorer  [Python]  - AI dataset explorer\n  6. rep-tracker           [Python]  - Exercise rep tracker",
    repos: "REAL GITHUB REPOS (bitterbuick):\n  • bitterbuick/edgar-50-percent\n  • bitterbuick/osintinel\n  • bitterbuick/google-calendar-mcp-server\n  • bitterbuick/google-mail-mcp-server\n  • bitterbuick/claude-google-drive-mcp\n  • bitterbuick/BallBustr\n  • bitterbuick/openai-data-explorer\n  • bitterbuick/rep-tracker\n  • bitterbuick/starlink-watch\n  • bitterbuick/MMM-Beestat",
    skills: "TECHNICAL SKILLS:\n  • Languages : Python, JavaScript, TypeScript, HTML/CSS, Bash\n  • Domains   : OSINT, MCP Servers, Data Parsing, Web Apps, Game Dev\n  • Tools     : Git, GitHub Actions, Linux, REST APIs",
    contact: "CONTACT DETAILS:\n  • Email  : adam.w.freeman@gmail.com\n  • GitHub : https://github.com/bitterbuick",
    repo: "Opening https://github.com/bitterbuick..."
  }
};
