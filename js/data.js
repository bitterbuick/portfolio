/**
 * Portfolio Data Configuration
 * Developer: Adam (bitterbuick)
 */

const PORTFOLIO_DATA = {
  developer: {
    name: "Adam Freeman",
    handle: "bitterbuick",
    title: "Senior Full Stack & AI Systems Architect",
    tagline: "Building high-performance web applications, AI agent systems, and developer tools.",
    bio: "Passionate engineer with a focus on crafting high-end web applications, real-time distributed systems, and modern AI developer workflows. Obsessed with slick UI micro-interactions, clean architecture, and lightning-fast user experiences.",
    location: "San Francisco, CA (Remote)",
    status: "Available for ambitious projects",
    github: "https://github.com/bitterbuick",
    email: "adam.w.freeman@gmail.com",
    avatarIcon: "code-2",
    stats: [
      { label: "Public Repositories", value: "38+" },
      { label: "Contributions (2026)", value: "1,420+" },
      { label: "GitHub Stars", value: "2.4k" },
      { label: "Pull Requests Merged", value: "350+" }
    ]
  },

  projects: [
    {
      id: "nexus-ai-studio",
      title: "NexusAI Agent Studio",
      category: "ai-ml",
      featured: true,
      tag: "AI & Agents",
      shortDesc: "Autonomous multi-agent orchestration platform with visual node-based workflow builder and LLM memory synthesis.",
      fullDesc: "NexusAI is a visual graph-based workbench for configuring, testing, and deploying collaborative AI multi-agent workflows. It includes real-time telemetry, structured JSON schemas, dynamic tool execution, and local-first memory vector search.",
      tech: ["TypeScript", "React", "Node.js", "Gemini API", "TailwindCSS", "WebSockets"],
      metrics: "⚡ 500ms avg workflow response | 🌟 1.2k Stars",
      gradient: "linear-gradient(135deg, rgba(0,242,254,0.2), rgba(112,0,255,0.2))",
      borderColor: "#00f2fe",
      githubUrl: "https://github.com/bitterbuick/nexus-ai-studio",
      liveUrl: "https://nexus-ai-demo.antigravity.dev",
      highlights: [
        "Interactive node graph UI with drag-and-drop agent pipelines",
        "Supports Gemini 1.5 Pro multimodal input, tool calls, and structured output",
        "Real-time streaming agent thought process and debugging inspector",
        "Built-in vector database indexing for long-term agent memory"
      ]
    },
    {
      id: "hyperdrive-db",
      title: "HyperDrive Vector Engine",
      category: "dev-tools",
      featured: true,
      tag: "Database / Systems",
      shortDesc: "Ultra-fast, Rust-powered distributed vector search engine built for sub-millisecond similarity queries.",
      fullDesc: "HyperDrive DB is a lightweight, zero-dependency vector similarity search engine written in Rust. Features HNSW indexing, quantization, SIMD hardware acceleration, and seamless gRPC & REST APIs.",
      tech: ["Rust", "gRPC", "SIMD", "WebAssembly", "Docker"],
      metrics: "🚀 1.2ms latency @ 1M vectors | ⚡ 10k QPS",
      gradient: "linear-gradient(135deg, rgba(112,0,255,0.2), rgba(255,0,128,0.2))",
      borderColor: "#7000ff",
      githubUrl: "https://github.com/bitterbuick/hyperdrive-db",
      liveUrl: "https://hyperdrive-docs.antigravity.dev",
      highlights: [
        "Custom HNSW graph implementation with SIMD AVX-512 optimization",
        "Memory-mapped files for instantaneous startup and low RAM overhead",
        "WebAssembly bindings for running client-side vector search directly in browsers",
        "Automatic scalar quantization yielding 4x reduction in index size"
      ]
    },
    {
      id: "pulse-ui-kit",
      title: "Pulse UI Component Kit",
      category: "full-stack",
      featured: true,
      tag: "Design System",
      shortDesc: "A futuristic glassmorphism component library with fluid spring physics micro-interactions and dark theme tokens.",
      fullDesc: "Pulse UI delivers production-ready UI components designed with modern CSS custom properties, backdrop blurs, dynamic color tokens, and accessible keyboard navigation out of the box.",
      tech: ["Vanilla CSS", "HTML5", "ES Modules", "A11y", "Storybook"],
      metrics: "🎨 40+ Components | 📦 4.2kB gzipped",
      gradient: "linear-gradient(135deg, rgba(0,245,160,0.2), rgba(0,242,254,0.2))",
      borderColor: "#00f5a0",
      githubUrl: "https://github.com/bitterbuick/pulse-ui-kit",
      liveUrl: "https://pulse-ui.antigravity.dev",
      highlights: [
        "Zero external framework dependencies for maximum performance and compatibility",
        "Fluid container queries and modern CSS backdrop-filter styling",
        "100% WCAG AAA compliant contrast, ARIA states, and keyboard focus rings",
        "Built-in dark mode and cyber glowing theme switchers"
      ]
    },
    {
      id: "codeghost-cli",
      title: "CodeGhost Terminal Assistant",
      category: "dev-tools",
      featured: false,
      tag: "CLI Tool",
      shortDesc: "Intelligent CLI tool that monitors git diffs, autogenerates commit messages, and suggests instant performance fixes.",
      fullDesc: "CodeGhost hooks into your terminal workflow to analyze pending code changes, write comprehensive pull request descriptions, flag potential security flaws, and run static analysis checks.",
      tech: ["Node.js", "TypeScript", "Git Hooks", "CLI/Bash"],
      metrics: "⚡ 50,000+ Downloads | 🛠 CLI Tool",
      gradient: "linear-gradient(135deg, rgba(255,180,0,0.2), rgba(255,0,128,0.2))",
      borderColor: "#ffb400",
      githubUrl: "https://github.com/bitterbuick/codeghost-cli",
      liveUrl: "https://npmjs.com/package/codeghost-cli",
      highlights: [
        "Git pre-commit and post-merge automatic intelligence",
        "Interactive command prompt with autocomplete and syntax highlighting",
        "Instant codebase context indexing for terminal code queries"
      ]
    },
    {
      id: "quantum-flow",
      title: "QuantumFlow Realtime Metrics",
      category: "full-stack",
      featured: false,
      tag: "Web Application",
      shortDesc: "Real-time stream telemetry dashboard for monitoring cloud microservices and WebSocket connection health.",
      fullDesc: "QuantumFlow renders live time-series charts, distributed tracing graphs, and alert thresholds with sub-frame render loops using WebGL and Canvas 2D.",
      tech: ["JavaScript", "Chart.js", "Canvas2D", "WebSockets", "Express"],
      metrics: "📊 60 FPS charts | 🌐 Real-time Streams",
      gradient: "linear-gradient(135deg, rgba(0,242,254,0.2), rgba(0,245,160,0.2))",
      borderColor: "#00f2fe",
      githubUrl: "https://github.com/bitterbuick/quantum-flow",
      liveUrl: "https://quantumflow-demo.antigravity.dev",
      highlights: [
        "High-frequency 60 FPS rendering pipeline using HTML5 Canvas API",
        "Custom WebSocket binary protocol parser for minimal network overhead",
        "Customizable user dashboards with drag-and-drop metric widgets"
      ]
    },
    {
      id: "open-synth-lib",
      title: "OpenSynth Audio DSP Engine",
      category: "open-source",
      featured: false,
      tag: "Audio / WebAssembly",
      shortDesc: "Browser-based modular sound synthesizer engine built with Web Audio API and WebAssembly C++ DSP nodes.",
      fullDesc: "OpenSynth empowers creators to design custom polyphonic synthesizers in the browser. Features custom oscillator algorithms, FM modulation, ladder filters, and MIDI controller integration.",
      tech: ["WebAssembly", "C++", "Web Audio API", "Web MIDI"],
      metrics: "🎵 Low latency DSP | 🎹 Web MIDI Ready",
      gradient: "linear-gradient(135deg, rgba(255,0,128,0.2), rgba(112,0,255,0.2))",
      borderColor: "#ff0080",
      githubUrl: "https://github.com/bitterbuick/open-synth-lib",
      liveUrl: "https://opensynth.antigravity.dev",
      highlights: [
        "Real-time audio processing node written in modern C++ compiled to WASM",
        "Full support for Web MIDI hardware keyboards and controllers",
        "Interactive preset storage and patch sharing via URL hash"
      ]
    }
  ],

  skills: [
    {
      category: "Frontend & UI Engineering",
      icon: "layout",
      items: [
        { name: "JavaScript / ES Modules", level: 95 },
        { name: "HTML5 & Modern CSS3", level: 98 },
        { name: "React / Next.js", level: 90 },
        { name: "TailwindCSS & Glassmorphism", level: 92 },
        { name: "Canvas / WebGL / Animations", level: 85 }
      ]
    },
    {
      category: "Backend & Systems",
      icon: "server",
      items: [
        { name: "Node.js / Express / Async JS", level: 92 },
        { name: "TypeScript", level: 94 },
        { name: "Python / Data Engineering", level: 88 },
        { name: "Rust / WebAssembly", level: 80 },
        { name: "REST & WebSockets", level: 95 }
      ]
    },
    {
      category: "AI & Data Architecture",
      icon: "cpu",
      items: [
        { name: "Gemini API & LLM Orchestration", level: 92 },
        { name: "Vector Databases & Embeddings", level: 88 },
        { name: "Agentic Workflows & Tool Use", level: 90 },
        { name: "BigQuery & SQL Analytics", level: 85 }
      ]
    },
    {
      category: "DevOps, Cloud & Tools",
      icon: "terminal",
      items: [
        { name: "Git & GitHub Actions CI/CD", level: 95 },
        { name: "Docker & Containerization", level: 88 },
        { name: "Google Cloud Platform (GCP)", level: 86 },
        { name: "Linux Administration & Shell Scripting", level: 90 }
      ]
    }
  ],

  experience: [
    {
      period: "2024 — Present",
      role: "Lead AI & Web Architect",
      company: "Innovate AI Labs",
      description: "Spearheading modern web applications, agentic workflows, and front-end design systems. Reduced bundle sizes by 40% and built custom multi-agent telemetry platforms."
    },
    {
      period: "2022 — 2024",
      role: "Senior Full Stack Engineer",
      company: "CloudScale Systems",
      description: "Architected high-throughput microservice dashboards and real-time WebSocket infrastructure serving 10M+ daily API calls."
    },
    {
      period: "2020 — 2022",
      role: "Frontend Systems Developer",
      company: "Nexus Technologies",
      description: "Built modular component libraries, responsive web interfaces, and automated CI/CD pipelines for cloud management applications."
    }
  ],

  terminalCommands: {
    help: "Available commands:\n  • projects   - List featured projects\n  • skills     - View technical stack & proficiency\n  • exp        - Show work history & milestones\n  • contact    - Display email & social handles\n  • clear      - Clear terminal screen\n  • repo       - Open GitHub profile\n  • theme      - Toggle neon accent colors",
    projects: "FEATURED PROJECTS:\n  1. NexusAI Agent Studio   [AI/ML]      - Multi-agent visual workflow builder\n  2. HyperDrive DB          [Systems]    - Rust HNSW vector search engine\n  3. Pulse UI Kit           [UI/CSS]     - Glassmorphic design system\n  4. CodeGhost CLI          [Dev Tools]  - Smart git diff AI assistant",
    skills: "TECHNICAL PROFICIENCY:\n  • Frontend : HTML5, CSS3, JS/TS, React, WebGL (95%)\n  • Backend  : Node.js, Express, Python, Rust, REST/gRPC (90%)\n  • AI & ML  : Gemini API, Vector Search, Multi-Agent Systems (90%)\n  • Infrastructure: GitHub Actions, Docker, GCP, Linux (90%)",
    exp: "WORK HISTORY:\n  • Lead AI & Web Architect @ Innovate AI Labs (2024-Present)\n  • Senior Full Stack Engineer @ CloudScale Systems (2022-2024)\n  • Frontend Systems Developer @ Nexus Tech (2020-2022)",
    contact: "CONTACT DETAILS:\n  • Email  : adam.w.freeman@gmail.com\n  • GitHub : https://github.com/bitterbuick\n  • Location: San Francisco, CA",
    repo: "Opening https://github.com/bitterbuick..."
  }
};
