// TypeScript interfaces for Mission Control Dashboard

export interface Agent {
  id: string;
  name: string;
  tier: 'infrastructure' | 'data' | 'execution' | 'personal';
  status: 'operational' | 'degraded' | 'failed' | 'idle';
  lastSuccess: Date;
  uptime: number; // percentage
  successRate: number; // percentage
  responseTime: number; // ms
  health: HealthStatus;
  dependencies: string[];
}

export interface HealthStatus {
  status: 'operational' | 'degraded' | 'failed';
  lastCheck: Date;
  issues: Issue[];
  performance: PerformanceMetrics;
}

export interface Issue {
  id: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  title: string;
  description: string;
  timestamp: Date;
  resolved?: boolean;
}

export interface PerformanceMetrics {
  avgResponseTime: number;
  successRate: number;
  uptime: number;
  lastFailure?: Date;
}

export interface ActivityEvent {
  id: string;
  type: 'link' | 'trade' | 'report' | 'backup' | 'alert' | 'deployment' | 'analysis';
  agent: string;
  description: string;
  timestamp: Date;
  metadata?: Record<string, any>;
}

export interface SystemMetrics {
  totalAgents: number;
  activeAgents: number;
  successRate: number;
  uptime: number;
  avgResponseTime: number;
  completedTasks: number;
  failedTasks: number;
  pendingTasks: number;
}

export interface Alert {
  id: string;
  severity: 'info' | 'warning' | 'error' | 'critical';
  agent?: string;
  title: string;
  description: string;
  timestamp: Date;
  dismissed?: boolean;
}

export interface TimeSeriesData {
  timestamp: Date;
  value: number;
  label?: string;
}

export interface AgentStatusFile {
  health: string;
  lastSuccess: string;
  lastFailure?: string;
  uptime: string;
  knownIssues: string[];
  performance: {
    avgResponseTime: string;
    successRate: string;
  };
  dependencies: string[];
}
