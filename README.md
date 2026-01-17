# EDDIE | Autonomous Systems Builder

> "If it boots, routes, and survives misuse, it ships."

## 🧠 Core Philosophy

I build systems that don’t need supervision, don’t lie about their state, and don’t fall apart the second someone does something stupid.

I’m not a “visionary”. I don’t “disrupt”. I don’t pitch ideas I haven’t already built at least three times.

**Operating Principles:**
*   **No Ghost State:** If something happens, it emits telemetry. Silence is a bug.
*   **Kill Switches:** Anything autonomous must be stoppable instantly.
*   **Local-First:** Cloud is a convenience, not a dependency.
*   **History > Hype:** Git logs > launch tweets.

## 🛠 What I Actually Do

I design and build:
*   Autonomous reasoning systems
*   Self-observing AI architectures
*   Trading and execution engines
*   Governance and economic systems
*   Dashboards that expose uncomfortable truths

---

## 🏗 Architecture & Engineering

This site is built as a **Sovereign Artifact**. It eschews complex build chains for raw, inspectable code. It is designed to be readable, portable, and crash-proof.

### Tech Stack
*   **React 19** (via ESM imports, zero-bundler dev environment)
*   **Tailwind CSS** (via CDN for immediate styling without compilation)
*   **TypeScript** (Strict typing for interface consistency)

### File System
*   **`index.html`**: The bootloader. Contains global styles (glitch effects, CRT scanlines), font imports, and the Tailwind config.
*   **`App.tsx`**: The kernel. Manages application state, navigation logic, and the "Systems Index" data.
*   **`components/`**:
    *   `Section.tsx`: Layout wrapper with scroll-margin logic for fixed headers.
    *   `TerminalBlock.tsx`: Renders lists in a shell-like format.
    *   `CrtOverlay.tsx`: Pure CSS scanline/glitch effects.
    *   `Icons.tsx`: Zero-dependency SVG assets.

### Configuration
The "Systems Index" (Project tracking) is defined in `App.tsx` under the `systems` array.
Adjust the `load` integer (1-5) to visualize cognitive taxation:
*   **1-2**: Green (Nominal)
*   **3**: White (High)
*   **4-5**: Red (Critical/Warning)

### Deployment
This is a static site. It runs anywhere HTML runs.
**No mock data. No theater. No permission cycles.**