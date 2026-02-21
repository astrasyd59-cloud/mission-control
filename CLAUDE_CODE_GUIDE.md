# Claude Code Integration Guide

## Setup

### 1. Get Claude Code API Key
```bash
# From Dibs - add to environment
export ANTHROPIC_API_KEY="sk-ant-..."
```

### 2. Install Claude Code (if needed)
```bash
npm install -g @anthropic-ai/claude-code
# OR use npx
npx @anthropic-ai/claude-code
```

### 3. Claude Code Configuration
Create `.claude-code/config.json` in workspace:
```json
{
  "projectRoot": "/home/astra/.openclaw/workspace/mission-control",
  "allowedTools": ["read", "write", "edit", "exec"],
  "preferredModel": "claude-sonnet-4-20250514"
}
```

## Usage Pattern

### Option A: Direct Prompts
```bash
cd ~/.openclaw/workspace/mission-control
claude-code -p "$(cat prompts/agent-command-center.md)"
```

### Option B: Interactive Session
```bash
cd ~/.openclaw/workspace/mission-control
claude-code
# Then paste prompt
```

### Option C: Batch Processing
```bash
#!/bin/bash
# run-claude-modules.sh
cd ~/.openclaw/workspace/mission-control

echo "Building Agent Command Center..."
claude-code -p "$(cat prompts/agent-command-center.md)" > logs/agents-build.log

echo "Building Revenue Tracker..."
claude-code -p "$(cat prompts/revenue-tracker.md)" > logs/revenue-build.log

echo "Building Meeting Prep..."
claude-code -p "$(cat prompts/meeting-prep.md)" > logs/meetings-build.log

echo "Building Daily Intel Feed..."
claude-code -p "$(cat prompts/daily-intel-feed.md)" > logs/intel-build.log
```

## Module Implementation Order

1. **Agent Command Center** (highest complexity)
   - Start with this one
   - Sets pattern for other modules
   - Most visual components

2. **Revenue Tracker** (medium)
   - Charts and gauges
   - Math calculations

3. **Meeting Prep** (medium)
   - Forms and lists
   - Date/time handling

4. **Daily Intel Feed** (lowest)
   - Filtering/sorting
   - Wrap-up module

## Integration Steps

After each module is built:

1. Review generated code
2. Test in browser
3. Add to main app.js or keep modular
4. Update navigation
5. Test localStorage persistence

## Expected Output Structure

Each module should generate:
```javascript
// Module: Agent Command Center

// Data management
function loadAgents() { ... }
function saveAgents() { ... }

// Render functions
function renderAgentGrid() { ... }
function renderAgentDetail(agentId) { ... }
function renderExecutiveDecisions() { ... }

// Event handlers
function openAgentDetail(agentId) { ... }
function sendTaskToAgent(agentId, task) { ... }
function addDecision(decision) { ... }

// Export for main app
window.AgentModule = {
  render: renderAgentGrid,
  init: loadAgents
};
```

## Testing Checklist

- [ ] All tabs render correctly
- [ ] localStorage persists data
- [ ] Mobile responsive
- [ ] No console errors
- [ ] Smooth animations
- [ ] Forms validate input
- [ ] Modal close on escape/click outside

## Deployment

After all modules built:
```bash
# Deploy to Netlify
./deploy.sh

# Or manual zip
cd ~/.openclaw/workspace/mission-control
zip -r deploy.zip index.html app.js modules/ styles.css
# Upload to Netlify
```

---

*Ready for Claude Code execution*
