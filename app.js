/**
 * Mission Control Dashboard - CEO Edition v2.0
 * Mobile-optimized, professional metrics, project drill-down, team activity feed
 */

// ============================================
// DATA
// ============================================

const agents = [
    { id: 'astra', name: 'Astra', tier: 'infrastructure', status: 'operational', uptime: 99.8, successRate: 97.2, lastSuccess: new Date(Date.now() - 2 * 60000), avatar: '🗡️' },
    { id: 'beacon', name: 'Beacon', tier: 'infrastructure', status: 'operational', uptime: 99.2, successRate: 96.8, lastSuccess: new Date(Date.now() - 5 * 60000), avatar: '📡' },
    { id: 'ledger', name: 'Ledger', tier: 'infrastructure', status: 'operational', uptime: 99.9, successRate: 99.5, lastSuccess: new Date(Date.now() - 10 * 60000), avatar: '📚' },
    { id: 'atlas', name: 'Atlas', tier: 'infrastructure', status: 'operational', uptime: 99.5, successRate: 95.4, lastSuccess: new Date(Date.now() - 15 * 60000), avatar: '🗺️' },
    { id: 'chitra', name: 'Chitra', tier: 'data', status: 'degraded', uptime: 87.0, successRate: 84.2, lastSuccess: new Date(Date.now() - 45 * 60000), avatar: '🎨' },
    { id: 'discordops', name: 'DiscordOps', tier: 'data', status: 'operational', uptime: 99.0, successRate: 97.5, lastSuccess: new Date(Date.now() - 8 * 60000), avatar: '💬' },
    { id: 'groq_whisper', name: 'Groq Whisper', tier: 'execution', status: 'operational', uptime: 98.5, successRate: 98.2, lastSuccess: new Date(Date.now() - 3 * 60000), avatar: '🎙️' },
    { id: 'jyotishi', name: 'Jyotishi', tier: 'execution', status: 'operational', uptime: 100.0, successRate: 100.0, lastSuccess: new Date(Date.now() - 60 * 60000), avatar: '🔮' },
    { id: 'uiux', name: 'UI/UX Designer', tier: 'execution', status: 'operational', uptime: 97.0, successRate: 96.5, lastSuccess: new Date(Date.now() - 20 * 60000), avatar: '✨' },
    { id: 'social_manager', name: 'Social Manager', tier: 'execution', status: 'operational', uptime: 99.1, successRate: 97.8, lastSuccess: new Date(Date.now() - 12 * 60000), avatar: '📱' },
    { id: 'trading_journal', name: 'Trading Journal', tier: 'personal', status: 'operational', uptime: 99.0, successRate: 98.5, lastSuccess: new Date(Date.now() - 25 * 60000), avatar: '📈' },
    { id: 'job_hunt', name: 'Job Hunt', tier: 'personal', status: 'idle', uptime: 0, successRate: 0, lastSuccess: null, avatar: '💼' },
    { id: 'email_assistant', name: 'Email Assistant', tier: 'personal', status: 'idle', uptime: 0, successRate: 0, lastSuccess: null, avatar: '📧' },
    { id: 'finance_tracker', name: 'Finance Tracker', tier: 'personal', status: 'idle', uptime: 0, successRate: 0, lastSuccess: null, avatar: '💰' },
    { id: 'health_coach', name: 'Health Coach', tier: 'personal', status: 'idle', uptime: 0, successRate: 0, lastSuccess: null, avatar: '💪' },
    { id: 'learning_coach', name: 'Learning Coach', tier: 'personal', status: 'operational', uptime: 100.0, successRate: 100.0, lastSuccess: new Date(Date.now() - 240 * 60000), avatar: '🎓' },
    { id: 'pustak', name: 'Pustak', tier: 'personal', status: 'operational', uptime: 99.8, successRate: 99.9, lastSuccess: new Date(Date.now() - 180 * 60000), avatar: '📖' },
    { id: 'hustler', name: 'Hustler', tier: 'personal', status: 'idle', uptime: 0, successRate: 0, lastSuccess: null, avatar: '⚡' },
    { id: 'nomad', name: 'Nomad', tier: 'personal', status: 'idle', uptime: 0, successRate: 0, lastSuccess: null, avatar: '🌍' },
    { id: 'connector', name: 'Connector', tier: 'personal', status: 'idle', uptime: 0, successRate: 0, lastSuccess: null, avatar: '🤝' },
];

// Enhanced Projects with Comments and Activity Feed
const liveProjects = [
  {
    id: 'openclaw-v3',
    name: 'OpenClaw v3.0 System',
    description: 'Complete system rebuild with 19-agent framework, professional monitoring, and real-time analytics. Phase 3 includes predictive analytics and auto-healing.',
    status: 'active',
    progress: 83,
    priority: 'critical',
    startDate: new Date('2026-02-19'),
    targetDate: new Date('2026-02-28'),
    budget: { allocated: 100, spent: 83, currency: 'hours' },
    contributors: [
      { agentId: 'astra', agentName: 'Astra', role: 'lead', contributionScore: 96, tasksCompleted: 19, tasksTotal: 20, lastActive: new Date(Date.now() - 15 * 60000) },
      { agentId: 'ledger', agentName: 'Ledger', role: 'contributor', contributionScore: 88, tasksCompleted: 5, tasksTotal: 6, lastActive: new Date(Date.now() - 45 * 60000) },
      { agentId: 'beacon', agentName: 'Beacon', role: 'contributor', contributionScore: 72, tasksCompleted: 4, tasksTotal: 5, lastActive: new Date(Date.now() - 120 * 60000) },
      { agentId: 'uiux', agentName: 'UI/UX Designer', role: 'contributor', contributionScore: 85, tasksCompleted: 3, tasksTotal: 3, lastActive: new Date(Date.now() - 180 * 60000) }
    ],
    tasks: [
      { id: 't1', title: '19-Agent Framework', description: 'Create SOUL/MISSION/SKILLS/STATUS/TOOLS for all agents', status: 'done', priority: 'critical', assigneeName: 'Astra', completedAt: new Date('2026-02-20') },
      { id: 't2', title: 'Telegram Bot v2.5', description: 'Implement confirmations, error reporting, daily summary', status: 'done', priority: 'critical', assigneeName: 'Beacon', completedAt: new Date('2026-02-20') },
      { id: 't3', title: 'Memory Preservation', description: 'Backup system, SKILLS_REGISTRY, verification crons', status: 'done', priority: 'high', assigneeName: 'Ledger', completedAt: new Date('2026-02-20') },
      { id: 't4', title: 'Mission Control Dashboard', description: 'Real-time monitoring with professional design', status: 'done', priority: 'high', assigneeName: 'UI/UX Designer', completedAt: new Date('2026-02-20') },
      { id: 't5', title: 'Project Tracking System', description: 'Live projects view with agent contributions', status: 'done', priority: 'medium', assigneeName: 'Astra', completedAt: new Date('2026-02-20') },
      { id: 't6', title: 'Auto-Update System', description: 'Daily/weekly/monthly agent audits', status: 'in_progress', priority: 'medium', assigneeName: 'Astra', startedAt: new Date('2026-02-20') }
    ],
    comments: [
      { id: 'c1', agentName: 'Astra', agentAvatar: '🗡️', message: 'All 19 agents deployed with complete documentation. Framework is solid.', timestamp: new Date(Date.now() - 4 * 60 * 60000), type: 'milestone' },
      { id: 'c2', agentName: 'Ledger', agentAvatar: '📚', message: 'Backup system operational. First backup: 175KB, 216 files. All verified.', timestamp: new Date(Date.now() - 3 * 60 * 60000), type: 'update' },
      { id: 'c3', agentName: 'Beacon', agentAvatar: '📡', message: 'Telegram bot now sends honest error messages. No more fake "check Discord" responses.', timestamp: new Date(Date.now() - 2 * 60 * 60000), type: 'update' },
      { id: 'c4', agentName: 'UI/UX Designer', agentAvatar: '✨', message: 'CEO dashboard deployed! Mobile-optimized with project tracking and team activity feed.', timestamp: new Date(Date.now() - 30 * 60000), type: 'milestone' }
    ],
    metrics: {
      commits: 47,
      deploys: 12,
      bugsFixed: 8,
      bugsOpen: 2
    },
    tags: ['system', 'v3', 'major'],
    color: '#FF6B35'
  },
  {
    id: 'trading-system',
    name: 'Trading Automation Platform',
    description: 'Automated trading journal, performance analytics, and strategy backtesting with astrology integration for timing optimization.',
    status: 'active',
    progress: 35,
    priority: 'high',
    startDate: new Date('2026-02-15'),
    targetDate: new Date('2026-03-15'),
    budget: { allocated: 200, spent: 70, currency: 'hours' },
    contributors: [
      { agentId: 'trading_journal', agentName: 'Trading Journal', role: 'lead', contributionScore: 60, tasksCompleted: 3, tasksTotal: 8, lastActive: new Date(Date.now() - 24 * 60 * 60000) },
      { agentId: 'jyotishi', agentName: 'Jyotishi', role: 'contributor', contributionScore: 45, tasksCompleted: 1, tasksTotal: 3, lastActive: new Date(Date.now() - 5 * 24 * 60 * 60000) }
    ],
    tasks: [
      { id: 't10', title: 'Database Schema Design', description: 'Design trading journal database structure with performance metrics', status: 'in_progress', priority: 'high', assigneeName: 'Trading Journal', startedAt: new Date('2026-02-18') },
      { id: 't11', title: 'Trade Entry API', description: 'REST API for logging trades with metadata and tags', status: 'todo', priority: 'high', assigneeName: 'Trading Journal' },
      { id: 't12', title: 'Performance Analytics Dashboard', description: 'P&L tracking, win rate, risk metrics visualization', status: 'todo', priority: 'medium', assigneeName: 'Trading Journal' },
      { id: 't13', title: 'Astrology Timing Integration', description: 'Planetary position analysis for optimal entry/exit timing', status: 'todo', priority: 'low', assigneeName: 'Jyotishi' }
    ],
    comments: [
      { id: 'c10', agentName: 'Trading Journal', agentAvatar: '📈', message: 'Database schema 70% complete. Focusing on performance metrics tables.', timestamp: new Date(Date.now() - 24 * 60 * 60000), type: 'update' }
    ],
    metrics: {
      commits: 12,
      deploys: 2,
      bugsFixed: 1,
      bugsOpen: 3
    },
    tags: ['trading', 'finance', 'automation'],
    color: '#00D084'
  },
  {
    id: 'escape-plan',
    name: '$150K Escape Plan',
    description: 'Career transition strategy: target $200K+ role, $8K/month side income, Mauritius visa, global mobility. Deadline: August 2026.',
    status: 'active',
    progress: 22,
    priority: 'critical',
    startDate: new Date('2026-02-01'),
    targetDate: new Date('2026-08-01'),
    budget: { allocated: 500, spent: 110, currency: 'hours' },
    contributors: [
      { agentId: 'job_hunt', agentName: 'Job Hunt', role: 'lead', contributionScore: 40, tasksCompleted: 2, tasksTotal: 10, lastActive: new Date(Date.now() - 3 * 24 * 60 * 60000) },
      { agentId: 'hustler', agentName: 'Hustler', role: 'lead', contributionScore: 35, tasksCompleted: 1, tasksTotal: 8, lastActive: new Date(Date.now() - 7 * 24 * 60 * 60000) },
      { agentId: 'nomad', agentName: 'Nomad', role: 'contributor', contributionScore: 25, tasksCompleted: 1, tasksTotal: 5, lastActive: new Date(Date.now() - 10 * 24 * 60 * 60000) },
      { agentId: 'learning_coach', agentName: 'Learning Coach', role: 'contributor', contributionScore: 55, tasksCompleted: 4, tasksTotal: 6, lastActive: new Date(Date.now() - 1 * 24 * 60 * 60000) }
    ],
    tasks: [
      { id: 't20', title: 'Target Company List (50)', description: 'Research 50 companies matching career goals and salary target', status: 'done', priority: 'high', assigneeName: 'Job Hunt', completedAt: new Date('2026-02-15') },
      { id: 't21', title: 'Resume Modernization', description: 'Update CV for 2026 job market, ATS optimization', status: 'in_progress', priority: 'critical', assigneeName: 'Job Hunt', startedAt: new Date('2026-02-18') },
      { id: 't22', title: 'Mauritius Premium Visa Research', description: 'Document requirements, timeline, costs for Mauritius residency', status: 'todo', priority: 'high', assigneeName: 'Nomad' },
      { id: 't23', title: 'Side Hustle Brainstorm (10 ideas)', description: 'Generate and evaluate 10 business ideas for $1K/month income', status: 'in_progress', priority: 'medium', assigneeName: 'Hustler', startedAt: new Date('2026-02-17') },
      { id: 't24', title: 'Skills Gap Analysis', description: 'Compare current skills vs target role requirements', status: 'done', priority: 'high', assigneeName: 'Learning Coach', completedAt: new Date('2026-02-16') }
    ],
    comments: [
      { id: 'c20', agentName: 'Learning Coach', agentAvatar: '🎓', message: 'Skills gap analysis complete. Identified 3 key gaps: system design, leadership, and public speaking.', timestamp: new Date(Date.now() - 4 * 24 * 60 * 60000), type: 'milestone' },
      { id: 'c21', agentName: 'Job Hunt', agentAvatar: '💼', message: '50 target companies identified. 12 in fintech, 18 in crypto, 20 in traditional finance. Range: $180K-$250K.', timestamp: new Date(Date.now() - 5 * 24 * 60 * 60000), type: 'milestone' }
    ],
    metrics: {
      applications: 0,
      interviews: 0,
      offers: 0,
      sideIncome: 0
    },
    tags: ['career', 'escape', 'money'],
    color: '#FFB703'
  },
  {
    id: 'content-empire',
    name: 'Content & Knowledge Empire',
    description: 'Notion templates, courses, and digital products. Target: $1K/month by June 2026. First product: PARA System template.',
    status: 'planning',
    progress: 8,
    priority: 'medium',
    startDate: new Date('2026-02-18'),
    targetDate: new Date('2026-06-01'),
    budget: { allocated: 150, spent: 12, currency: 'hours' },
    contributors: [
      { agentId: 'chitra', agentName: 'Chitra', role: 'lead', contributionScore: 30, tasksCompleted: 1, tasksTotal: 5, lastActive: new Date(Date.now() - 2 * 24 * 60 * 60000) },
      { agentId: 'pustak', agentName: 'Pustak', role: 'contributor', contributionScore: 20, tasksCompleted: 1, tasksTotal: 4, lastActive: new Date(Date.now() - 5 * 24 * 60 * 60000) }
    ],
    tasks: [
      { id: 't30', title: 'Niche Market Research', description: 'Identify profitable template niches with demand analysis', status: 'done', priority: 'high', assigneeName: 'Chitra', completedAt: new Date('2026-02-19') },
      { id: 't31', title: 'Template #1: PARA System', description: 'Notion template for PARA methodology with examples', status: 'todo', priority: 'high', assigneeName: 'Chitra' },
      { id: 't32', title: 'Gumroad Store Setup', description: 'Create seller account, listing, pricing strategy', status: 'todo', priority: 'medium', assigneeName: 'Hustler' }
    ],
    comments: [
      { id: 'c30', agentName: 'Chitra', agentAvatar: '🎨', message: 'Niche research complete. Top opportunities: productivity systems ($50-150/template), career templates ($30-80), trading journals ($40-100).', timestamp: new Date(Date.now() - 2 * 24 * 60 * 60000), type: 'research' }
    ],
    metrics: {
      products: 0,
      sales: 0,
      revenue: 0,
      customers: 0
    },
    tags: ['content', 'notion', 'passive-income'],
    color: '#3B82F6'
  }
];

// Team Activity Feed (cross-project)
const teamActivity = [
  { id: 1, agentName: 'Astra', agentAvatar: '🗡️', project: 'OpenClaw v3.0', action: 'completed task', target: 'Project Tracking System', timestamp: new Date(Date.now() - 5 * 60000), type: 'task_complete' },
  { id: 2, agentName: 'Ledger', agentAvatar: '📚', project: 'System', action: 'completed backup', target: 'Daily Backup (175KB)', timestamp: new Date(Date.now() - 15 * 60000), type: 'milestone' },
  { id: 3, agentName: 'UI/UX Designer', agentAvatar: '✨', project: 'OpenClaw v3.0', action: 'deployed', target: 'CEO Dashboard v2.0', timestamp: new Date(Date.now() - 30 * 60000), type: 'deploy' },
  { id: 4, agentName: 'Astra', agentAvatar: '🗡️', project: 'OpenClaw v3.0', action: 'commented', target: 'All 19 agents deployed successfully', timestamp: new Date(Date.now() - 4 * 60 * 60000), type: 'comment' },
  { id: 5, agentName: 'Beacon', agentAvatar: '📡', project: 'System', action: 'updated', target: 'Telegram Bot v2.5 with honest errors', timestamp: new Date(Date.now() - 2 * 60 * 60000), type: 'update' },
  { id: 6, agentName: 'Learning Coach', agentAvatar: '🎓', project: 'Escape Plan', action: 'completed', target: 'Skills Gap Analysis', timestamp: new Date(Date.now() - 24 * 60 * 60000), type: 'task_complete' },
  { id: 7, agentName: 'Job Hunt', agentAvatar: '💼', project: 'Escape Plan', action: 'added', target: '25 new target companies', timestamp: new Date(Date.now() - 3 * 24 * 60 * 60000), type: 'research' },
  { id: 8, agentName: 'Chitra', agentAvatar: '🎨', project: 'Content Empire', action: 'completed research', target: 'Niche analysis: 3 profitable categories', timestamp: new Date(Date.now() - 2 * 24 * 60 * 60000), type: 'research' }
];

const tierConfig = {
    infrastructure: { label: 'Infrastructure', icon: '🔧', color: '#FF6B35' },
    data: { label: 'Data & Integration', icon: '📊', color: '#3B82F6' },
    execution: { label: 'Execution', icon: '⚡', color: '#00D084' },
    personal: { label: 'Personal', icon: '👤', color: '#FFB703' },
};

// ============================================
// UTILITIES
// ============================================

function timeAgo(date) {
    if (!date) return 'Never';
    const seconds = Math.floor((new Date() - date) / 1000);
    if (seconds < 60) return 'Just now';
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes}m`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours}h`;
    const days = Math.floor(hours / 24);
    return `${days}d`;
}

function formatTime(date) {
    return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
}

function formatDate(date) {
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

function formatNumber(num) {
    if (num >= 1000) return (num / 1000).toFixed(1) + 'k';
    return num.toString();
}

function calculateMetrics() {
    const activeAgents = agents.filter(a => a.status === 'operational').length;
    const totalAgents = agents.length;
    const avgSuccessRate = agents.filter(a => a.successRate > 0).reduce((sum, a) => sum + a.successRate, 0) / agents.filter(a => a.successRate > 0).length || 0;
    const avgUptime = agents.filter(a => a.uptime > 0).reduce((sum, a) => sum + a.uptime, 0) / agents.filter(a => a.uptime > 0).length || 0;
    return { totalAgents, activeAgents, successRate: avgSuccessRate.toFixed(1), uptime: avgUptime.toFixed(1) };
}

function calculateProjectStats() {
    const total = liveProjects.length;
    const active = liveProjects.filter(p => p.status === 'active').length;
    const completed = liveProjects.filter(p => p.status === 'completed').length;
    const avgProgress = liveProjects.reduce((sum, p) => sum + p.progress, 0) / total;
    const critical = liveProjects.filter(p => p.priority === 'critical').length;
    const totalBudget = liveProjects.reduce((sum, p) => sum + p.budget.allocated, 0);
    const spentBudget = liveProjects.reduce((sum, p) => sum + p.budget.spent, 0);
    return { total, active, completed, avgProgress: Math.round(avgProgress), critical, totalBudget, spentBudget, budgetUtilization: Math.round((spentBudget / totalBudget) * 100) };
}

function getTopContributors(limit = 5) {
    const contributorMap = new Map();
    liveProjects.forEach(project => {
        project.contributors.forEach(contributor => {
            const existing = contributorMap.get(contributor.agentId);
            if (existing) {
                existing.totalScore += contributor.contributionScore;
                existing.projectsCount += 1;
                existing.tasksCompleted += contributor.tasksCompleted;
            } else {
                contributorMap.set(contributor.agentId, {
                    agentId: contributor.agentId,
                    agentName: contributor.agentName,
                    totalScore: contributor.contributionScore,
                    projectsCount: 1,
                    tasksCompleted: contributor.tasksCompleted,
                    role: contributor.role,
                    avatar: agents.find(a => a.id === contributor.agentId)?.avatar || '🤖'
                });
            }
        });
    });
    return Array.from(contributorMap.values()).sort((a, b) => b.totalScore - a.totalScore).slice(0, limit);
}

// ============================================
// RENDER FUNCTIONS
// ============================================

function renderHeader() {
    const metrics = calculateMetrics();
    const projectStats = calculateProjectStats();
    return `
        <header class="header">
            <div class="header-brand">
                <div class="header-logo">MC</div>
                <div>
                    <div class="header-title">Mission Control</div>
                    <div class="header-subtitle">CEO Dashboard</div>
                </div>
            </div>
            <div class="header-status">
                <div class="system-overview">
                    <div class="metric">
                        <div class="metric-value success">${metrics.activeAgents}/${metrics.totalAgents}</div>
                        <div class="metric-label">Agents</div>
                    </div>
                    <div class="metric">
                        <div class="metric-value success">${projectStats.active}</div>
                        <div class="metric-label">Projects</div>
                    </div>
                    <div class="metric">
                        <div class="metric-value">${projectStats.avgProgress}%</div>
                        <div class="metric-label">Progress</div>
                    </div>
                </div>
                <div class="status-badge">
                    <div class="status-indicator"></div>
                    Operational
                </div>
            </div>
        </header>
    `;
}

function renderNavigation() {
    const currentView = window.currentView || 'dashboard';
    const currentProject = window.currentProject;
    
    if (currentProject) {
        return `
            <nav class="nav-bar">
                <button onclick="closeProjectDetail()" class="nav-btn" style="display: flex; align-items: center; gap: 0.5rem;">
                    ← Back to Projects
                </button>
                <div style="font-weight: 600; color: var(--color-text-primary);">
                    ${liveProjects.find(p => p.id === currentProject)?.name || 'Project Detail'}
                </div>
            </nav>
        `;
    }
    
    return `
        <nav class="nav-bar">
            <button onclick="switchView('dashboard')" class="nav-btn ${currentView === 'dashboard' ? 'active' : ''}">
                📊 Dashboard
            </button>
            <button onclick="switchView('projects')" class="nav-btn ${currentView === 'projects' ? 'active' : ''}">
                🎯 Projects
            </button>
            <button onclick="switchView('team')" class="nav-btn ${currentView === 'team' ? 'active' : ''}">
                👥 Team
            </button>
        </nav>
    `;
}

function renderCEOMetrics() {
    const stats = calculateProjectStats();
    const metrics = calculateMetrics();
    
    return `
        <div class="ceo-metrics">
            <div class="metric-card">
                <div class="metric-icon">📊</div>
                <div class="metric-content">
                    <div class="metric-value-large">${stats.avgProgress}%</div>
                    <div class="metric-label">Overall Progress</div>
                </div>
            </div>
            <div class="metric-card">
                <div class="metric-icon">⚡</div>
                <div class="metric-content">
                    <div class="metric-value-large">${stats.active}</div>
                    <div class="metric-label">Active Projects</div>
                </div>
            </div>
            <div class="metric-card">
                <div class="metric-icon">⏱️</div>
                <div class="metric-content">
                    <div class="metric-value-large">${stats.budgetUtilization}%</div>
                    <div class="metric-label">Budget Used</div>
                    <div class="metric-sublabel">${stats.spentBudget}/${stats.totalBudget}h</div>
                </div>
            </div>
            <div class="metric-card">
                <div class="metric-icon">🤖</div>
                <div class="metric-content">
                    <div class="metric-value-large">${metrics.activeAgents}</div>
                    <div class="metric-label">Active Agents</div>
                </div>
            </div>
        </div>
    `;
}

function renderProjectCard(project) {
    const statusColors = {
        active: '#00D084',
        planning: '#FFB703',
        completed: '#3B82F6',
        blocked: '#E63946'
    };
    
    return `
        <div class="project-card" onclick="openProjectDetail('${project.id}')">
            <div class="project-header">
                <div>
                    <div class="project-title-row">
                        <span class="project-name">${project.name}</span>
                        <span class="project-priority ${project.priority}">${project.priority}</span>
                    </div>
                    <div class="project-description">${project.description}</div>
                </div>
                <div class="project-progress">
                    <div class="progress-ring">
                        <svg viewBox="0 0 36 36">
                            <path class="progress-ring-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                            <path class="progress-ring-fill" stroke="${project.color}" stroke-dasharray="${project.progress}, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                        </svg>
                        <div class="progress-text">${project.progress}%</div>
                    </div>
                </div>
            </div>
            
            <div class="project-progress-bar">
                <div class="progress-fill" style="width: ${project.progress}%; background: ${project.color};"></div>
            </div>
            
            <div class="project-meta">
                <div class="project-contributors">
                    ${project.contributors.slice(0, 3).map(c => `
                        <div class="contributor-avatar" title="${c.agentName}: ${c.contributionScore} score">
                            ${agents.find(a => a.id === c.agentId)?.avatar || '🤖'}
                        </div>
                    `).join('')}
                    ${project.contributors.length > 3 ? `<div class="contributor-more">+${project.contributors.length - 3}</div>` : ''}
                </div>
                <div class="project-stats">
                    <span>📅 ${formatDate(project.targetDate)}</span>
                    <span>✓ ${project.tasks.filter(t => t.status === 'done').length}/${project.tasks.length}</span>
                    <span>💬 ${project.comments.length}</span>
                </div>
            </div>
        </div>
    `;
}

function renderTeamActivity() {
    return `
        <div class="activity-feed">
            <div class="section-title">👥 Team Activity</div>
            <div class="activity-list">
                ${teamActivity.slice(0, 6).map(activity => `
                    <div class="activity-item">
                        <div class="activity-avatar">${activity.agentAvatar}</div>
                        <div class="activity-content">
                            <div class="activity-text">
                                <strong>${activity.agentName}</strong> ${activity.action}
                                <span class="activity-target">${activity.target}</span>
                            </div>
                            <div class="activity-meta">
                                <span class="activity-project">${activity.project}</span>
                                <span class="activity-time">${timeAgo(activity.timestamp)}</span>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function renderProjectDetail(projectId) {
    const project = liveProjects.find(p => p.id === projectId);
    if (!project) return '<div>Project not found</div>';
    
    const doneTasks = project.tasks.filter(t => t.status === 'done');
    const inProgressTasks = project.tasks.filter(t => t.status === 'in_progress');
    const todoTasks = project.tasks.filter(t => t.status === 'todo');
    
    return `
        <main class="main project-detail">
            <div class="project-hero" style="border-left-color: ${project.color}">
                <div class="project-hero-header">
                    <div>
                        <div class="project-hero-title">${project.name}</div>
                        <div class="project-hero-description">${project.description}</div>
                    </div>
                    <div class="project-hero-progress">
                        <div class="progress-value" style="color: ${project.color}">${project.progress}%</div>
                        <div class="progress-label">Complete</div>
                    </div>
                </div>
                <div class="project-hero-bar">
                    <div class="progress-fill" style="width: ${project.progress}%; background: ${project.color};"></div>
                </div>
                <div class="project-hero-meta">
                    <div class="meta-item">
                        <span class="meta-label">Start</span>
                        <span class="meta-value">${formatDate(project.startDate)}</span>
                    </div>
                    <div class="meta-item">
                        <span class="meta-label">Target</span>
                        <span class="meta-value">${formatDate(project.targetDate)}</span>
                    </div>
                    <div class="meta-item">
                        <span class="meta-label">Budget</span>
                        <span class="meta-value">${project.budget.spent}/${project.budget.allocated}h</span>
                    </div>
                    <div class="meta-item">
                        <span class="meta-label">Status</span>
                        <span class="meta-value status-badge ${project.status}">${project.status}</span>
                    </div>
                </div>
            </div>
            
            <div class="project-layout">
                <div class="project-main">
                    <div class="detail-section">
                        <div class="section-header">
                            <span class="section-title">✓ Tasks (${project.tasks.length})</span>
                            <span class="task-count done">${doneTasks.length} done</span>
                            <span class="task-count in-progress">${inProgressTasks.length} in progress</span>
                        </div>
                        <div class="task-list">
                            ${project.tasks.map(task => `
                                <div class="task-item ${task.status}">
                                    <div class="task-status-icon">${task.status === 'done' ? '✓' : task.status === 'in_progress' ? '▶' : '○'}</div>
                                    <div class="task-content">
                                        <div class="task-title">${task.title}</div>
                                        <div class="task-description">${task.description}</div>
                                        <div class="task-meta">
                                            <span class="task-assignee">${agents.find(a => a.name === task.assigneeName)?.avatar || '🤖'} ${task.assigneeName}</span>
                                            <span class="task-priority ${task.priority}">${task.priority}</span>
                                            ${task.completedAt ? `<span class="task-completed">Done ${timeAgo(task.completedAt)}</span>` : ''}
                                        </div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    
                    <div class="detail-section">
                        <div class="section-header">
                            <span class="section-title">💬 Team Chat</span>
                            <span class="comment-count">${project.comments.length} messages</span>
                        </div>
                        <div class="chat-container">
                            ${project.comments.map(comment => `
                                <div class="chat-message">
                                    <div class="chat-avatar">${comment.agentAvatar}</div>
                                    <div class="chat-content">
                                        <div class="chat-header">
                                            <span class="chat-author">${comment.agentName}</span>
                                            <span class="chat-time">${timeAgo(comment.timestamp)}</span>
                                        </div>
                                        <div class="chat-text">${comment.message}</div>
                                        ${comment.type === 'milestone' ? '<span class="chat-badge">🏆 Milestone</span>' : ''}
                                    </div>
                                </div>
                            `).join('')}
                            <div class="chat-input">
                                <input type="text" placeholder="Type a message... (demo)" disabled />
                                <button disabled>Send</button>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="project-sidebar">
                    <div class="detail-section">
                        <div class="section-title">👥 Team (${project.contributors.length})</div>
                        <div class="team-list">
                            ${project.contributors.map(contributor => `
                                <div class="team-member">
                                    <div class="member-avatar">${agents.find(a => a.id === contributor.agentId)?.avatar || '🤖'}</div>
                                    <div class="member-info">
                                        <div class="member-name">${contributor.agentName}</div>
                                        <div class="member-role">${contributor.role}</div>
                                        <div class="member-stats">
                                            <span>⭐ ${contributor.contributionScore}</span>
                                            <span>✓ ${contributor.tasksCompleted}/${contributor.tasksTotal}</span>
                                        </div>
                                    </div>
                                    <div class="member-status ${agents.find(a => a.id === contributor.agentId)?.status || 'idle'}"></div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    
                    <div class="detail-section">
                        <div class="section-title">📈 Metrics</div>
                        <div class="metrics-grid">
                            <div class="metric-box">
                                <div class="metric-number">${project.metrics.commits || 0}</div>
                                <div class="metric-label">Commits</div>
                            </div>
                            <div class="metric-box">
                                <div class="metric-number">${project.metrics.deploys || 0}</div>
                                <div class="metric-label">Deploys</div>
                            </div>
                            <div class="metric-box">
                                <div class="metric-number">${project.metrics.bugsFixed || 0}</div>
                                <div class="metric-label">Bugs Fixed</div>
                            </div>
                            <div class="metric-box">
                                <div class="metric-number">${project.metrics.bugsOpen || 0}</div>
                                <div class="metric-label">Bugs Open</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    `;
}

function renderDashboardView() {
    return `
        <main class="main">
            ${renderCEOMetrics()}
            <div class="dashboard-layout">
                <div class="dashboard-main">
                    <div class="section-title">🎯 Active Projects</div>
                    <div class="projects-grid">
                        ${liveProjects.map(renderProjectCard).join('')}
                    </div>
                </div>
                <div class="dashboard-sidebar">
                    ${renderTeamActivity()}
                </div>
            </div>
        </main>
    `;
}

function renderProjectsView() {
    return `
        <main class="main">
            ${renderCEOMetrics()}
            <div class="section-title">All Projects</div>
            <div class="projects-list">
                ${liveProjects.map(renderProjectCard).join('')}
            </div>
        </main>
    `;
}

function renderTeamView() {
    const topContributors = getTopContributors(10);
    return `
        <main class="main">
            <div class="section-title">🏆 Leaderboard</div>
            <div class="leaderboard">
                ${topContributors.map((contributor, index) => `
                    <div class="leaderboard-item ${index < 3 ? 'top-' + (index + 1) : ''}">
                        <div class="rank">${index + 1}</div>
                        <div class="avatar">${contributor.avatar}</div>
                        <div class="info">
                            <div class="name">${contributor.agentName}</div>
                            <div class="role">${contributor.role}</div>
                        </div>
                        <div class="stats">
                            <div class="score">${contributor.totalScore}</div>
                            <div class="sub">${contributor.projectsCount} projects</div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </main>
    `;
}

// ============================================
// MAIN RENDER
// ============================================

function render() {
    const app = document.getElementById('app');
    const view = window.currentView || 'dashboard';
    const project = window.currentProject;
    
    let content = '';
    if (project) {
        content = renderProjectDetail(project);
    } else if (view === 'projects') {
        content = renderProjectsView();
    } else if (view === 'team') {
        content = renderTeamView();
    } else {
        content = renderDashboardView();
    }
    
    app.innerHTML = renderHeader() + renderNavigation() + content;
}

function switchView(view) {
    window.currentView = view;
    window.currentProject = null;
    render();
}

function openProjectDetail(projectId) {
    window.currentProject = projectId;
    render();
}

function closeProjectDetail() {
    window.currentProject = null;
    render();
}

// Initialize
window.currentView = 'dashboard';
window.currentProject = null;
window.switchView = switchView;
window.openProjectDetail = openProjectDetail;
window.closeProjectDetail = closeProjectDetail;

document.addEventListener('DOMContentLoaded', render);
