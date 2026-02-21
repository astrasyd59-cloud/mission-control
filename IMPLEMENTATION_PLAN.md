# Mission Control v3.0 — Implementation Plan
*Extracted from https://mission-control-prompts.vercel.app/*

---

## 🎯 SCOPE

Implement 4 modules from Zach Babiarz's Mission Control system:
1. 🏢 AI Agent Command Center (P1)
2. 💰 Revenue Tracker (P2)
3. 📞 Meeting Prep (P3)
4. 📡 Daily Intel Feed (P4)

---

## 📋 MODULE 1: AI Agent Command Center

### Features Required
- **Agent cards grid**: Name, role/title, status (online/busy/offline), model, last active
- **Agent detail panel** (slide-out): Description, capabilities, activity log, performance notes
- **"Send Task" modal**: Text area, saves to agent's activity log
- **Executive Decisions section**: Date, question, decision summary, agents consulted
- **localStorage persistence**

### UI Components Needed
```
- AgentCard (grid item)
- AgentDetailPanel (slide-out sidebar)
- TaskModal (send task form)
- ExecutiveDecisionsList (decision log)
- StatusBadge (online/busy/offline indicator)
```

### Data Schema
```javascript
agents: [
  {
    id: "astra",
    name: "Astra",
    role: "Commander",
    status: "online", // online | busy | offline
    model: "kimi-coding/k2p5",
    lastActive: "2026-02-21T00:15:00Z",
    description: "Main agent, drill sergeant mode",
    capabilities: ["System design", "Agent orchestration", "Code review"],
    activityLog: [...],
    performanceNotes: "..."
  }
]

decisions: [
  {
    id: "d1",
    date: "2026-02-20",
    question: "Which agent should handle link analysis?",
    decision: "Spawn Chitra for research tasks",
    agentsConsulted: ["Astra", "Beacon"],
    outcome: "Success"
  }
]
```

---

## 📋 MODULE 2: Revenue Tracker

### Features Required
- **Monthly revenue goal** with circular gauge visualization
- **Revenue chart**: Last 6 months (bar chart)
- **Client list**: Name, monthly value, status (active/pending/churned), start date
- **Add/edit/remove clients**
- **Auto-calculate MRR**
- **Revenue projections**: Projected annual, monthly growth needed to hit goal

### UI Components Needed
```
- RevenueGauge (circular progress)
- RevenueChart (6-month bar chart)
- ClientCard/List
- ClientForm (add/edit)
- ProjectionsPanel
```

### Data Schema
```javascript
revenue: {
  goal: 8000, // monthly goal in AUD
  currentMRR: 0,
  clients: [
    {
      id: "c1",
      name: "Trading Income",
      monthlyValue: 0,
      status: "active", // active | pending | churned
      startDate: "2026-02-01"
    }
  ],
  monthlyHistory: [
    { month: "Sep 2025", revenue: 0 },
    { month: "Oct 2025", revenue: 0 },
    { month: "Nov 2025", revenue: 0 },
    { month: "Dec 2025", revenue: 0 },
    { month: "Jan 2026", revenue: 0 },
    { month: "Feb 2026", revenue: 0 }
  ]
}
```

---

## 📋 MODULE 3: Meeting Prep

### Features Required
- **Upcoming meetings list**: Title, date/time, attendees, type (call/zoom/in-person), prep notes
- **Add/edit/delete meetings**
- **Meeting detail view**: Agenda items (checklist), notes textarea, action items
- **Past meetings archive** (auto-archive when date passes)
- **Today's meetings** highlighted at top with countdown timers

### UI Components Needed
```
- MeetingCard
- MeetingForm (add/edit)
- MeetingDetail (expanded view)
- AgendaChecklist
- ActionItemsList
- CountdownTimer
```

### Data Schema
```javascript
meetings: [
  {
    id: "m1",
    title: "Job Interview - Crypto Firm",
    date: "2026-02-25T14:00:00Z",
    attendees: ["Hiring Manager", "CTO"],
    type: "zoom", // call | zoom | in-person
    prepNotes: "Research company...",
    agenda: [
      { item: "Intro", done: false },
      { item: "Experience review", done: false }
    ],
    notes: "",
    actionItems: [],
    status: "upcoming" // upcoming | completed
  }
]
```

---

## 📋 MODULE 4: Daily Intel Feed

### Features Required
- **Categories**: AI News, Industry Trends, Competitor Watch, Opportunities
- **Intel items**: Title, summary, source link, date added, importance tag
- **Add new intel** with form
- **Filter** by category and importance
- **Daily Brief section**: Top 3-5 most important items

### UI Components Needed
```
- IntelCard
- IntelFilter (category + importance)
- IntelForm (add new)
- DailyBriefSection
- ImportanceBadge (🔥 hot | ⚡ notable | 📌 reference)
```

### Data Schema
```javascript
intel: [
  {
    id: "i1",
    title: "Claude system prompts leaked",
    summary: "Someone published Anthropic's internal system prompts...",
    sourceUrl: "https://youtube.com/shorts/...",
    category: "ai-news", // ai-news | trends | competitors | opportunities
    importance: "hot", // hot | notable | reference
    dateAdded: "2026-02-20",
    isInDailyBrief: true
  }
]
```

---

## 🔧 TECHNICAL IMPLEMENTATION

### File Structure
```
mission-control/
├── index.html              # Main dashboard
├── app.js                  # Core app logic
├── modules/
│   ├── agents.js           # Agent Command Center
│   ├── revenue.js          # Revenue Tracker
│   ├── meetings.js         # Meeting Prep
│   └── intel.js            # Daily Intel Feed
├── components/
│   ├── AgentCard.js
│   ├── RevenueGauge.js
│   ├── MeetingCard.js
│   └── IntelCard.js
└── styles.css              # Additional styles
```

### Integration Points
1. **Add "Agents" tab** to existing navigation
2. **Add "Revenue" tab** for tracking
3. **Add "Meetings" tab** for prep
4. **Add "Intel" tab** for curation

### localStorage Keys
```javascript
localStorage.setItem('mc_agents', JSON.stringify(agents));
localStorage.setItem('mc_decisions', JSON.stringify(decisions));
localStorage.setItem('mc_revenue', JSON.stringify(revenue));
localStorage.setItem('mc_meetings', JSON.stringify(meetings));
localStorage.setItem('mc_intel', JSON.stringify(intel));
```

---

## ⏱️ TIME ESTIMATES

| Module | Complexity | Est. Time |
|--------|-----------|-----------|
| Agent Command Center | High | 3-4 hours |
| Revenue Tracker | Medium | 2-3 hours |
| Meeting Prep | Medium | 2-3 hours |
| Daily Intel Feed | Low | 1-2 hours |
| **Total** | | **8-12 hours** |

---

## 🎯 IMPLEMENTATION ORDER

1. **Agent Command Center** (P1) — Core differentiator
2. **Revenue Tracker** (P2) — Track escape plan progress
3. **Meeting Prep** (P3) — Job hunt utility
4. **Daily Intel Feed** (P4) — Nice-to-have

---

## 🔗 RESOURCES

- Source: https://mission-control-prompts.vercel.app/
- YouTube: https://youtube.com/@Zach_Babiarz_ai
- Current dashboard: https://dibs-empire-roadmap.netlify.app

---

*Prepared: 2026-02-21 | Ready for Claude Code implementation*
