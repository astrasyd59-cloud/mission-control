# Meeting Prep — Prompt for Claude Code

Build a Meeting Prep module for the Mission Control dashboard.

## Context
Helps Dibs prepare for job interviews and professional meetings as part of the $150K escape plan.

## Requirements

### 1. UPCOMING MEETINGS LIST
- Chronological list of future meetings
- Each card shows:
  - Title
  - Date and time
  - Countdown (e.g., "in 2 days" or "tomorrow")
  - Attendees (comma list)
  - Type icon: 📞 call / 💻 zoom / 🏢 in-person
  - Prep notes preview
  - Expand/collapse for details

### 2. TODAY'S MEETINGS (Highlighted)
- Section at top showing today's meetings
- Larger countdown timer (hours:minutes)
- Red warning if < 1 hour away
- Quick-access prep button

### 3. MEETING DETAIL VIEW
Expanded card shows:
- Full meeting info
- **Agenda items**: Editable checklist
- **Notes textarea**: Free-form prep notes
- **Action items**: Post-meeting todos
- Mark as complete button

### 4. ADD/EDIT MEETING FORM
Modal with:
- Title input
- Date/time picker
- Attendees textarea (comma-separated)
- Type select (call/zoom/in-person)
- Prep notes textarea
- Initial agenda items (optional)

### 5. PAST MEETINGS ARCHIVE
- Toggle to show completed meetings
- Grayed out, collapsed by default
- Search/filter capability

### 6. DATA STRUCTURE
```javascript
const meetings = [
  {
    id: "m1",
    title: "Crypto Trading Firm - Final Round",
    date: "2026-02-25T14:00:00+11:00",
    attendees: ["Sarah (Hiring Manager)", "Mike (CTO)"],
    type: "zoom",
    prepNotes: "Research: Company does $50M daily volume...",
    agenda: [
      { id: "a1", text: "Intro & background", done: false },
      { id: "a2", text: "Trading experience deep dive", done: false },
      { id: "a3", text: "System design scenario", done: false },
      { id: "a4", text: "Questions for them", done: false }
    ],
    notes: "",
    actionItems: [],
    status: "upcoming", // upcoming | completed | cancelled
    createdAt: "2026-02-21T00:00:00Z"
  }
];
```

### 7. SMART FEATURES
- Auto-archive meetings when date passes
- Default agenda template for job interviews
- Copy meeting button (for recurring prep)
- Export prep notes to clipboard

### 8. STYLING
- Today's meetings: highlighted border or background
- Urgent (< 1h): red accent
- Type icons consistent
- Clean, professional look

### 9. PERSISTENCE
- localStorage key: 'mc_meetings'
- Auto-save on change

## Integration
Add as new tab "📞 Meetings" in navigation.

## Output
Complete JS module with all render functions, forms, and countdown logic.
