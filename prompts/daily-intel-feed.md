# Daily Intel Feed — Prompt for Claude Code

Build a Daily Intel Feed module for the Mission Control dashboard.

## Context
Curated news and intelligence for Dibs's trading, AI, and career interests.

## Requirements

### 1. INTEL CATEGORIES
Tabs or filter for:
- 🤖 AI News
- 📈 Trading/Markets
- 💼 Career/Industry
- 🔥 Opportunities

### 2. INTEL CARDS
Each item shows:
- Title (clickable)
- Summary (2-3 sentences)
- Source link
- Date added
- Importance badge:
  - 🔥 Hot (breaking, actionable)
  - ⚡ Notable (interesting, keep eye on)
  - 📌 Reference (background info)
- Category tag

### 3. DAILY BRIEF SECTION
- Top of page
- Auto-populated with 5 most recent 🔥 items
- Or manually starred items
- "Mark as read" button

### 4. ADD INTEL FORM
Modal with:
- Title input
- Summary textarea
- Source URL
- Category select
- Importance select
- "Add to Daily Brief" checkbox

### 5. FILTER & SEARCH
- Filter by category (dropdown)
- Filter by importance (buttons)
- Search by keyword
- Sort by date (newest first)

### 6. DATA STRUCTURE
```javascript
const intel = [
  {
    id: "i1",
    title: "Claude system prompts leaked on GitHub",
    summary: "Full system prompts for Claude 3.5 Sonnet published, revealing safety guidelines and behavior constraints.",
    sourceUrl: "https://github.com/...",
    category: "ai-news",
    importance: "hot",
    dateAdded: "2026-02-20",
    isInDailyBrief: true,
    isRead: false
  },
  {
    id: "i2",
    title: "Bitcoin breaks $100K resistance",
    summary: "BTC crossed major psychological level. Altcoins following. Funding rates elevated.",
    sourceUrl: "https://...",
    category: "trading",
    importance: "hot",
    dateAdded: "2026-02-19",
    isInDailyBrief: true,
    isRead: true
  }
];

const categories = [
  { id: "ai-news", label: "🤖 AI News", color: "#3B82F6" },
  { id: "trading", label: "📈 Trading", color: "#00D084" },
  { id: "career", label: "💼 Career", color: "#FFB703" },
  { id: "opportunities", label: "🔥 Opportunities", color: "#FF6B35" }
];
```

### 7. STYLING
- Daily Brief: highlighted background
- Hot items: red accent border
- Category colors consistent
- Clean card layout
- "New" indicator for unread items

### 8. PERSISTENCE
- localStorage key: 'mc_intel'
- Auto-save on change

## Integration
Add as new tab "📡 Intel" in navigation.

## Output
Complete JS module with filtering, search, and Daily Brief logic.
