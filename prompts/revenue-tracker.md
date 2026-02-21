# Revenue Tracker — Prompt for Claude Code

Build a Revenue Tracker module for the Mission Control dashboard.

## Context
This tracks Dibs's side income progress toward the $150K escape plan ($8K/month goal).

## Requirements

### 1. MONTHLY GOAL GAUGE
- Circular progress gauge showing % toward monthly goal
- Center shows: current MRR / goal
- Color: starts green, turns yellow at 50%, red if 0%
- Goal: $8,000 AUD/month

### 2. REVENUE CHART
- 6-month bar chart (CSS-only or lightweight canvas)
- Months: last 6 months
- Bars show monthly revenue
- Hover shows exact value

### 3. CLIENT LIST
- List of income sources (not just traditional clients)
- Each card shows:
  - Name (e.g., "Trading Income", "Notion Templates", "Consulting")
  - Monthly value in AUD
  - Status badge: active 🟢 / pending 🟡 / churned 🔴
  - Start date
  - Edit/delete buttons
- "Add Client" button opens form

### 4. CLIENT FORM
Modal with:
- Name input
- Monthly value input (AUD)
- Status select (active/pending/churned)
- Start date picker
- Save/cancel

### 5. REVENUE PROJECTIONS
Panel showing:
- Current MRR
- Projected annual (MRR × 12)
- Monthly growth needed to hit $8K goal
- Progress bar to goal

### 6. DATA STRUCTURE
```javascript
const revenue = {
  goal: 8000,
  currency: "AUD",
  currentMRR: 0,
  clients: [
    {
      id: "c1",
      name: "Trading Income",
      monthlyValue: 0,
      status: "active",
      startDate: "2026-02-01"
    },
    {
      id: "c2",
      name: "Notion Templates",
      monthlyValue: 0,
      status: "pending",
      startDate: "2026-03-01"
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
};
```

### 7. STYLING
- Circular gauge: SVG with animated progress
- Chart: CSS bar chart or simple canvas
- Cards: match existing project card style
- Currency: always show AUD
- Green for positive, red for zero

### 8. PERSISTENCE
- localStorage key: 'mc_revenue'
- Auto-save on every change

## Integration
Add as new tab "💰 Revenue" in navigation.

## Output
Complete JS module with all render functions, charts, and forms.
