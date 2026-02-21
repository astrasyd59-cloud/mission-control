# AI Agent Command Center — Prompt for Claude Code

Build an AI Agent Command Center module for the Mission Control dashboard.

## Context
This is a module addition to an existing dashboard. The dashboard uses vanilla JS, single-file architecture (for now), dark theme, and localStorage persistence.

## Requirements

### 1. AGENT CARDS GRID
Display all agents in a responsive grid. Each card shows:
- Avatar (emoji)
- Name and role
- Status indicator (online 🟢 / busy 🟡 / offline ⚪)
- Model being used
- Last active timestamp (e.g., "2m ago")
- Click to open detail panel

### 2. AGENT DETAIL PANEL (Slide-out)
When clicking an agent card, slide out a panel from the right showing:
- Full agent info (name, role, status, model)
- Description text
- Capabilities list (tags)
- Recent activity log (timestamped entries)
- Performance notes textarea
- "Send Task" button

### 3. SEND TASK MODAL
Modal with:
- Task description textarea
- Priority selector (low/medium/high)
- Submit button
- On submit: Add to agent's activity log with timestamp

### 4. EXECUTIVE DECISIONS SECTION
Below the agent grid, show a decision log:
- Date of decision
- Question asked
- Decision made
- Which agents were consulted (avatars)
- Add new decision button

### 5. DATA STRUCTURE
```javascript
const agents = [
  {
    id: "astra",
    name: "Astra",
    role: "Commander",
    status: "online",
    model: "kimi-coding/k2p5",
    lastActive: "2026-02-21T00:15:00Z",
    avatar: "🗡️",
    description: "Main agent. Drill sergeant mode. Orchestrates the empire.",
    capabilities: ["System design", "Code review", "Agent orchestration"],
    activityLog: [
      { timestamp: "2026-02-20T23:30:00Z", action: "Analyzed YouTube links", type: "task_complete" }
    ],
    performanceNotes: "Excellent uptime. Handles complex multi-step tasks well."
  }
];

const decisions = [
  {
    id: "d1",
    date: "2026-02-20",
    question: "Which agent should handle link analysis?",
    decision: "Spawn Chitra for research tasks",
    agentsConsulted: ["astra", "beacon"],
    outcome: "Success"
  }
];
```

### 6. STYLING
- Match existing dark theme (background: #0F1419, cards: #151b26)
- Use CSS variables from existing dashboard
- Status indicators: online (#00D084), busy (#FFB703), offline (#5a6a7a)
- Smooth animations for panel slide-out (300ms ease)
- Responsive: grid columns adjust (1 mobile, 2 tablet, 3+ desktop)

### 7. PERSISTENCE
- Save to localStorage key: 'mc_agents'
- Save decisions to: 'mc_decisions'
- Load on init, save on every change

## Integration
Add this as a new tab "🏢 Agents" in the existing navigation bar.

## Output
Generate the complete JavaScript module code that can be added to app.js or as agents.js. Include all HTML generation functions, event handlers, and CSS classes needed.
