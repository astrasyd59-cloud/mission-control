// Project Management System for Mission Control
// Tracks live projects and agent contributions

export interface Project {
  id: string;
  name: string;
  description: string;
  status: 'planning' | 'active' | 'blocked' | 'completed' | 'archived';
  progress: number; // 0-100
  priority: 'critical' | 'high' | 'medium' | 'low';
  startDate: Date;
  targetDate?: Date;
  completedDate?: Date;
  contributors: ProjectContributor[];
  tasks: ProjectTask[];
  milestones: Milestone[];
  tags: string[];
  relatedAgents: string[]; // Agent IDs involved
}

export interface ProjectContributor {
  agentId: string;
  agentName: string;
  role: 'lead' | 'contributor' | 'reviewer' | 'observer';
  contributionScore: number; // 0-100 calculated from tasks completed
  tasksCompleted: number;
  tasksTotal: number;
  lastContribution: Date;
  contributions: Contribution[];
}

export interface Contribution {
  id: string;
  timestamp: Date;
  type: 'code' | 'design' | 'research' | 'analysis' | 'documentation' | 'review' | 'deployment';
  description: string;
  impact: 'minor' | 'moderate' | 'major' | 'critical';
  deliverables?: string[];
}

export interface ProjectTask {
  id: string;
  title: string;
  description: string;
  status: 'todo' | 'in_progress' | 'review' | 'done';
  priority: 'critical' | 'high' | 'medium' | 'low';
  assignee?: string; // Agent ID
  assigneeName?: string;
  createdAt: Date;
  startedAt?: Date;
  completedAt?: Date;
  estimatedHours?: number;
  actualHours?: number;
  tags: string[];
  dependencies: string[]; // Task IDs
}

export interface Milestone {
  id: string;
  title: string;
  description: string;
  targetDate: Date;
  completedDate?: Date;
  status: 'pending' | 'achieved' | 'missed';
  criteria: string[];
}

// Sample projects data
export const liveProjects: Project[] = [
  {
    id: 'openclaw-v3',
    name: 'OpenClaw v3.0 System',
    description: 'Complete system rebuild with 19-agent framework, professional monitoring, and real-time analytics',
    status: 'active',
    progress: 78,
    priority: 'critical',
    startDate: new Date('2026-02-19'),
    targetDate: new Date('2026-02-28'),
    contributors: [
      {
        agentId: 'astra',
        agentName: 'Astra',
        role: 'lead',
        contributionScore: 95,
        tasksCompleted: 18,
        tasksTotal: 20,
        lastContribution: new Date(Date.now() - 15 * 60000),
        contributions: [
          {
            id: 'c1',
            timestamp: new Date(Date.now() - 4 * 60 * 60000),
            type: 'code',
            description: 'Designed 19-agent framework architecture',
            impact: 'critical'
          },
          {
            id: 'c2',
            timestamp: new Date(Date.now() - 2 * 60 * 60000),
            type: 'deployment',
            description: 'Deployed Mission Control dashboard',
            impact: 'major'
          },
          {
            id: 'c3',
            timestamp: new Date(Date.now() - 15 * 60000),
            type: 'documentation',
            description: 'Created manual analysis protocol',
            impact: 'moderate'
          }
        ]
      },
      {
        agentId: 'ledger',
        agentName: 'Ledger',
        role: 'contributor',
        contributionScore: 88,
        tasksCompleted: 5,
        tasksTotal: 6,
        lastContribution: new Date(Date.now() - 45 * 60000),
        contributions: [
          {
            id: 'c4',
            timestamp: new Date(Date.now() - 8 * 60 * 60000),
            type: 'code',
            description: 'Implemented backup verification system',
            impact: 'major'
          }
        ]
      },
      {
        agentId: 'beacon',
        agentName: 'Beacon',
        role: 'contributor',
        contributionScore: 72,
        tasksCompleted: 4,
        tasksTotal: 5,
        lastContribution: new Date(Date.now() - 120 * 60000),
        contributions: [
          {
            id: 'c5',
            timestamp: new Date(Date.now() - 6 * 60 * 60000),
            type: 'code',
            description: 'Enhanced Discord bot with confirmations',
            impact: 'major'
          }
        ]
      },
      {
        agentId: 'uiux',
        agentName: 'UI/UX Designer',
        role: 'contributor',
        contributionScore: 85,
        tasksCompleted: 3,
        tasksTotal: 3,
        lastContribution: new Date(Date.now() - 180 * 60000),
        contributions: [
          {
            id: 'c6',
            timestamp: new Date(Date.now() - 3 * 60 * 60000),
            type: 'design',
            description: 'Created Mission Control dashboard design system',
            impact: 'major'
          }
        ]
      }
    ],
    tasks: [
      { id: 't1', title: '19-Agent Framework', description: 'Create SOUL/MISSION/SKILLS/STATUS/TOOLS for all agents', status: 'done', priority: 'critical', assignee: 'astra', assigneeName: 'Astra', createdAt: new Date('2026-02-19'), completedAt: new Date('2026-02-20'), tags: ['framework', 'agents'] },
      { id: 't2', title: 'Telegram Bot v2.5', description: 'Implement confirmations, error reporting, daily summary', status: 'done', priority: 'critical', assignee: 'beacon', assigneeName: 'Beacon', createdAt: new Date('2026-02-20'), completedAt: new Date('2026-02-20'), tags: ['bot', 'telegram'] },
      { id: 't3', title: 'Memory Preservation', description: 'Backup system, SKILLS_REGISTRY, verification crons', status: 'done', priority: 'high', assignee: 'ledger', assigneeName: 'Ledger', createdAt: new Date('2026-02-20'), completedAt: new Date('2026-02-20'), tags: ['backup', 'memory'] },
      { id: 't4', title: 'Mission Control Dashboard', description: 'Real-time monitoring with professional design', status: 'done', priority: 'high', assignee: 'uiux', assigneeName: 'UI/UX Designer', createdAt: new Date('2026-02-20'), completedAt: new Date('2026-02-20'), tags: ['dashboard', 'monitoring'] },
      { id: 't5', title: 'Project Tracking System', description: 'Live projects view with agent contributions', status: 'in_progress', priority: 'medium', assignee: 'astra', assigneeName: 'Astra', createdAt: new Date('2026-02-20'), startedAt: new Date('2026-02-20'), tags: ['projects', 'tracking'] },
      { id: 't6', title: 'Auto-Update System', description: 'Daily/weekly/monthly agent audits', status: 'todo', priority: 'medium', assignee: 'astra', assigneeName: 'Astra', createdAt: new Date('2026-02-20'), tags: ['automation', 'audits'] }
    ],
    milestones: [
      { id: 'm1', title: 'Phase 1: Infrastructure', description: 'Core agents and automation scripts', targetDate: new Date('2026-02-20'), completedDate: new Date('2026-02-20'), status: 'achieved', criteria: ['19 agents created', 'Automation scripts deployed'] },
      { id: 'm2', title: 'Phase 2: Communication', description: 'Bot fixes and monitoring', targetDate: new Date('2026-02-21'), completedDate: new Date('2026-02-20'), status: 'achieved', criteria: ['Telegram bot v2.5', 'Mission Control live'] },
      { id: 'm3', title: 'Phase 3: Intelligence', description: 'Advanced features and analytics', targetDate: new Date('2026-02-28'), status: 'pending', criteria: ['Project tracking', 'Predictive analytics'] }
    ],
    tags: ['system', 'v3', 'major'],
    relatedAgents: ['astra', 'beacon', 'ledger', 'uiux', 'chitra']
  },
  {
    id: 'trading-system',
    name: 'Trading Automation Platform',
    description: 'Automated trading journal, analysis, and strategy backtesting',
    status: 'active',
    progress: 35,
    priority: 'high',
    startDate: new Date('2026-02-15'),
    targetDate: new Date('2026-03-15'),
    contributors: [
      {
        agentId: 'trading_journal',
        agentName: 'Trading Journal',
        role: 'lead',
        contributionScore: 60,
        tasksCompleted: 3,
        tasksTotal: 8,
        lastContribution: new Date(Date.now() - 24 * 60 * 60000),
        contributions: [
          {
            id: 'c7',
            timestamp: new Date(Date.now() - 2 * 24 * 60 * 60000),
            type: 'research',
            description: 'Researched trading journal database schema',
            impact: 'moderate'
          }
        ]
      },
      {
        agentId: 'jyotishi',
        agentName: 'Jyotishi',
        role: 'contributor',
        contributionScore: 45,
        tasksCompleted: 1,
        tasksTotal: 3,
        lastContribution: new Date(Date.now() - 5 * 24 * 60 * 60000),
        contributions: [
          {
            id: 'c8',
            timestamp: new Date(Date.now() - 5 * 24 * 60 * 60000),
            type: 'analysis',
            description: 'Analyzed auspicious trading times',
            impact: 'minor'
          }
        ]
      }
    ],
    tasks: [
      { id: 't10', title: 'Database Schema', description: 'Design trading journal database structure', status: 'in_progress', priority: 'high', assignee: 'trading_journal', assigneeName: 'Trading Journal', createdAt: new Date('2026-02-15'), startedAt: new Date('2026-02-18'), tags: ['database', 'schema'] },
      { id: 't11', title: 'Trade Entry API', description: 'API for logging trades with metadata', status: 'todo', priority: 'high', assignee: 'trading_journal', assigneeName: 'Trading Journal', createdAt: new Date('2026-02-15'), tags: ['api', 'backend'] },
      { id: 't12', title: 'Performance Analytics', description: 'P&L tracking and performance metrics', status: 'todo', priority: 'medium', assignee: 'trading_journal', assigneeName: 'Trading Journal', createdAt: new Date('2026-02-16'), tags: ['analytics', 'reporting'] },
      { id: 't13', title: 'Astrology Integration', description: 'Trading timing based on planetary positions', status: 'todo', priority: 'low', assignee: 'jyotishi', assigneeName: 'Jyotishi', createdAt: new Date('2026-02-17'), tags: ['astrology', 'timing'] }
    ],
    milestones: [
      { id: 'm10', title: 'Data Layer', description: 'Database and entry systems', targetDate: new Date('2026-02-25'), status: 'pending', criteria: ['Schema finalized', 'Entry API working'] },
      { id: 'm11', title: 'Analytics Release', description: 'Charts and performance tracking', targetDate: new Date('2026-03-10'), status: 'pending', criteria: ['Visualizations', 'Export reports'] }
    ],
    tags: ['trading', 'finance', 'automation'],
    relatedAgents: ['trading_journal', 'jyotishi', 'finance_tracker']
  },
  {
    id: 'escape-plan',
    name: '$150K Escape Plan',
    description: 'Career transition strategy: job hunt, side hustle, skill development',
    status: 'active',
    progress: 22,
    priority: 'critical',
    startDate: new Date('2026-02-01'),
    targetDate: new Date('2026-08-01'),
    contributors: [
      {
        agentId: 'job_hunt',
        agentName: 'Job Hunt',
        role: 'lead',
        contributionScore: 40,
        tasksCompleted: 2,
        tasksTotal: 10,
        lastContribution: new Date(Date.now() - 3 * 24 * 60 * 60000),
        contributions: [
          {
            id: 'c10',
            timestamp: new Date(Date.now() - 3 * 24 * 60 * 60000),
            type: 'research',
            description: 'Researched 50 target companies',
            impact: 'moderate'
          }
        ]
      },
      {
        agentId: 'hustler',
        agentName: 'Hustler',
        role: 'lead',
        contributionScore: 35,
        tasksCompleted: 1,
        tasksTotal: 8,
        lastContribution: new Date(Date.now() - 7 * 24 * 60 * 60000),
        contributions: []
      },
      {
        agentId: 'nomad',
        agentName: 'Nomad',
        role: 'contributor',
        contributionScore: 25,
        tasksCompleted: 1,
        tasksTotal: 5,
        lastContribution: new Date(Date.now() - 10 * 24 * 60 * 60000),
        contributions: []
      },
      {
        agentId: 'learning_coach',
        agentName: 'Learning Coach',
        role: 'contributor',
        contributionScore: 55,
        tasksCompleted: 4,
        tasksTotal: 6,
        lastContribution: new Date(Date.now() - 1 * 24 * 60 * 60000),
        contributions: [
          {
            id: 'c11',
            timestamp: new Date(Date.now() - 1 * 24 * 60 * 60000),
            type: 'documentation',
            description: 'Created skill development roadmap',
            impact: 'major'
          }
        ]
      }
    ],
    tasks: [
      { id: 't20', title: 'Target Company List', description: '50 companies matching career goals', status: 'done', priority: 'high', assignee: 'job_hunt', assigneeName: 'Job Hunt', createdAt: new Date('2026-02-01'), completedAt: new Date('2026-02-15'), tags: ['research', 'companies'] },
      { id: 't21', title: 'Resume Update', description: 'Modernize CV for 2026 job market', status: 'in_progress', priority: 'critical', assignee: 'job_hunt', assigneeName: 'Job Hunt', createdAt: new Date('2026-02-05'), startedAt: new Date('2026-02-18'), tags: ['cv', 'branding'] },
      { id: 't22', title: 'Mauritius Visa Research', description: 'Premium visa requirements and timeline', status: 'todo', priority: 'high', assignee: 'nomad', assigneeName: 'Nomad', createdAt: new Date('2026-02-10'), tags: ['visa', 'mauritius'] },
      { id: 't23', title: 'Side Hustle Ideas', description: 'Brainstorm and evaluate 10 business ideas', status: 'in_progress', priority: 'medium', assignee: 'hustler', assigneeName: 'Hustler', createdAt: new Date('2026-02-12'), startedAt: new Date('2026-02-17'), tags: ['business', 'ideas'] },
      { id: 't24', title: 'Skills Gap Analysis', description: 'Compare current vs target skills', status: 'done', priority: 'high', assignee: 'learning_coach', assigneeName: 'Learning Coach', createdAt: new Date('2026-02-08'), completedAt: new Date('2026-02-16'), tags: ['skills', 'learning'] }
    ],
    milestones: [
      { id: 'm20', title: 'Foundation', description: 'Research and planning complete', targetDate: new Date('2026-02-28'), status: 'pending', criteria: ['Company list', 'Resume ready', 'Skills roadmap'] },
      { id: 'm21', title: 'Applications', description: 'Active job hunt and side hustle launch', targetDate: new Date('2026-04-30'), status: 'pending', criteria: ['20+ applications', 'Side hustle #1 launched'] },
      { id: 'm22', title: 'Escape', description: 'New job secured or side income covers salary', targetDate: new Date('2026-08-01'), status: 'pending', criteria: ['Offer signed OR $8K/month side income'] }
    ],
    tags: ['career', 'escape', 'money'],
    relatedAgents: ['job_hunt', 'hustler', 'nomad', 'learning_coach', 'connector']
  },
  {
    id: 'content-empire',
    name: 'Content & Knowledge Empire',
    description: 'Notion templates, courses, and content creation business',
    status: 'planning',
    progress: 8,
    priority: 'medium',
    startDate: new Date('2026-02-18'),
    targetDate: new Date('2026-06-01'),
    contributors: [
      {
        agentId: 'chitra',
        agentName: 'Chitra',
        role: 'lead',
        contributionScore: 30,
        tasksCompleted: 1,
        tasksTotal: 5,
        lastContribution: new Date(Date.now() - 2 * 24 * 60 * 60000),
        contributions: [
          {
            id: 'c15',
            timestamp: new Date(Date.now() - 2 * 24 * 60 * 60000),
            type: 'design',
            description: 'Designed template system architecture',
            impact: 'moderate'
          }
        ]
      },
      {
        agentId: 'pustak',
        agentName: 'Pustak',
        role: 'contributor',
        contributionScore: 20,
        tasksCompleted: 1,
        tasksTotal: 4,
        lastContribution: new Date(Date.now() - 5 * 24 * 60 * 60000),
        contributions: []
      }
    ],
    tasks: [
      { id: 't30', title: 'Niche Research', description: 'Identify profitable template niches', status: 'done', priority: 'high', assignee: 'chitra', assigneeName: 'Chitra', createdAt: new Date('2026-02-18'), completedAt: new Date('2026-02-19'), tags: ['research', 'market'] },
      { id: 't31', title: 'Template #1: PARA System', description: 'Notion template for PARA method', status: 'todo', priority: 'high', assignee: 'chitra', assigneeName: 'Chitra', createdAt: new Date('2026-02-20'), tags: ['template', 'notion'] },
      { id: 't32', title: 'Gumroad Setup', description: 'Create seller account and listing', status: 'todo', priority: 'medium', assignee: 'hustler', assigneeName: 'Hustler', createdAt: new Date('2026-02-21'), tags: ['sales', 'setup'] }
    ],
    milestones: [
      { id: 'm30', title: 'First Dollar', description: 'First template sale', targetDate: new Date('2026-03-31'), status: 'pending', criteria: ['1 sale completed'] },
      { id: 'm31', title: 'Product Line', description: '5 templates in marketplace', targetDate: new Date('2026-06-01'), status: 'pending', criteria: ['5+ templates', '$100/month recurring'] }
    ],
    tags: ['content', 'notion', 'passive-income'],
    relatedAgents: ['chitra', 'pustak', 'hustler', 'uiux']
  }
];

// Calculate project statistics
export function calculateProjectStats() {
  const total = liveProjects.length;
  const active = liveProjects.filter(p => p.status === 'active').length;
  const completed = liveProjects.filter(p => p.status === 'completed').length;
  const blocked = liveProjects.filter(p => p.status === 'blocked').length;
  const avgProgress = liveProjects.reduce((sum, p) => sum + p.progress, 0) / total;
  const critical = liveProjects.filter(p => p.priority === 'critical').length;
  
  return {
    total,
    active,
    completed,
    blocked,
    avgProgress: Math.round(avgProgress),
    critical
  };
}

// Get top contributors across all projects
export function getTopContributors(limit = 5) {
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
          role: contributor.role
        });
      }
    });
  });
  
  return Array.from(contributorMap.values())
    .sort((a, b) => b.totalScore - a.totalScore)
    .slice(0, limit);
}

// Get agent contribution details
export function getAgentContributions(agentId: string) {
  const contributions: {
    project: Project;
    contributor: ProjectContributor;
  }[] = [];
  
  liveProjects.forEach(project => {
    const contributor = project.contributors.find(c => c.agentId === agentId);
    if (contributor) {
      contributions.push({ project, contributor });
    }
  });
  
  return contributions;
}

// Calculate agent workload
export function getAgentWorkload(agentId: string) {
  const agentProjects = liveProjects.filter(p => 
    p.contributors.some(c => c.agentId === agentId)
  );
  
  const activeTasks = agentProjects.flatMap(p => 
    p.tasks.filter(t => t.assignee === agentId && t.status !== 'done')
  );
  
  const completedTasks = agentProjects.flatMap(p =>
    p.tasks.filter(t => t.assignee === agentId && t.status === 'done')
  );
  
  return {
    projectsCount: agentProjects.length,
    activeTasks: activeTasks.length,
    completedTasks: completedTasks.length,
    totalTasks: activeTasks.length + completedTasks.length
  };
}
