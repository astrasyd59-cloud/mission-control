// Design System for Mission Control Dashboard
// Professional, modern, accessible

export const colors = {
  // Primary palette
  primary: {
    900: '#0F1419', // Dark navy - backgrounds
    800: '#1A1F2E', // Card backgrounds
    700: '#2A3042', // Borders, dividers
    600: '#3D4556', // Hover states
    500: '#4A5568', // Secondary text
    400: '#718096', // Muted text
    300: '#A0AEC0', // Light text
    100: '#E2E8F0', // Borders light
    50: '#F7FAFC',  // Light backgrounds
  },
  
  // Accent colors
  accent: {
    orange: '#FF6B35', // Energy, OpenClaw brand
    orangeLight: '#FF8A5B',
    orangeDark: '#E55A2B',
  },
  
  // Status colors
  status: {
    success: '#00D084',   // Green - operational
    successLight: '#10E594',
    successDark: '#00B874',
    warning: '#FFB703',   // Amber - degraded
    warningLight: '#FFC947',
    warningDark: '#E5A503',
    error: '#E63946',     // Red - failed
    errorLight: '#F0515D',
    errorDark: '#CC2F3A',
    info: '#3B82F6',      // Blue - info
  },
  
  // Semantic colors
  text: {
    primary: '#F7FAFC',   // Main text
    secondary: '#A0AEC0', // Muted text
    tertiary: '#718096',  // Very muted
  },
  
  background: {
    main: '#0F1419',      // Page background
    card: '#1A1F2E',      // Card background
    elevated: '#252B3D',  // Elevated surfaces
  },
  
  border: {
    default: '#2A3042',
    hover: '#3D4556',
    active: '#4A5568',
  }
};

// Typography system
export const typography = {
  fontFamily: {
    sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
    mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
  },
  
  sizes: {
    xs: '0.75rem',    // 12px
    sm: '0.875rem',   // 14px
    base: '1rem',     // 16px
    lg: '1.125rem',   // 18px
    xl: '1.25rem',    // 20px
    '2xl': '1.5rem',  // 24px
    '3xl': '1.875rem',// 30px
    '4xl': '2.25rem', // 36px
  },
  
  weights: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
  
  lineHeights: {
    tight: '1.25',
    normal: '1.5',
    relaxed: '1.625',
    loose: '2',
  },
};

// Spacing system (8px base)
export const spacing = {
  0: '0',
  1: '0.25rem',   // 4px
  2: '0.5rem',    // 8px
  3: '0.75rem',   // 12px
  4: '1rem',      // 16px
  5: '1.25rem',   // 20px
  6: '1.5rem',    // 24px
  8: '2rem',      // 32px
  10: '2.5rem',   // 40px
  12: '3rem',     // 48px
  16: '4rem',     // 64px
  20: '5rem',     // 80px
  24: '6rem',     // 96px
};

// Border radius
export const radius = {
  none: '0',
  sm: '0.25rem',   // 4px
  md: '0.375rem',  // 6px
  lg: '0.5rem',    // 8px
  xl: '0.75rem',   // 12px
  '2xl': '1rem',   // 16px
  full: '9999px',
};

// Shadows
export const shadows = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  glow: {
    success: '0 0 20px rgba(0, 208, 132, 0.3)',
    warning: '0 0 20px rgba(255, 183, 3, 0.3)',
    error: '0 0 20px rgba(230, 57, 70, 0.3)',
    orange: '0 0 20px rgba(255, 107, 53, 0.3)',
  },
};

// Animations
export const animations = {
  duration: {
    fast: '150ms',
    normal: '250ms',
    slow: '350ms',
    slower: '500ms',
  },
  easing: {
    default: 'cubic-bezier(0.4, 0, 0.2, 1)',
    in: 'cubic-bezier(0.4, 0, 1, 1)',
    out: 'cubic-bezier(0, 0, 0.2, 1)',
    bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  },
};

// Z-index scale
export const zIndex = {
  base: 0,
  dropdown: 10,
  sticky: 20,
  fixed: 30,
  modalBackdrop: 40,
  modal: 50,
  popover: 60,
  tooltip: 70,
  toast: 80,
};

// Breakpoints
export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

// Status indicator configurations
export const statusConfig = {
  operational: {
    color: colors.status.success,
    bg: 'rgba(0, 208, 132, 0.1)',
    pulse: true,
    icon: 'CheckCircle',
    label: 'Operational',
  },
  degraded: {
    color: colors.status.warning,
    bg: 'rgba(255, 183, 3, 0.1)',
    pulse: true,
    blink: true,
    icon: 'AlertTriangle',
    label: 'Degraded',
  },
  failed: {
    color: colors.status.error,
    bg: 'rgba(230, 57, 70, 0.1)',
    pulse: false,
    icon: 'XCircle',
    label: 'Failed',
  },
  idle: {
    color: colors.primary[400],
    bg: 'rgba(113, 128, 150, 0.1)',
    pulse: false,
    icon: 'MinusCircle',
    label: 'Idle',
  },
};

// Agent tier configurations
export const agentTiers = {
  infrastructure: {
    label: 'Infrastructure',
    color: colors.accent.orange,
    icon: 'Server',
    agents: ['Astra', 'Beacon', 'Ledger', 'Atlas'],
  },
  data: {
    label: 'Data & Integration',
    color: colors.status.info,
    icon: 'Database',
    agents: ['Chitra', 'DiscordOps'],
  },
  execution: {
    label: 'Execution Specialists',
    color: colors.status.success,
    icon: 'Zap',
    agents: ['Groq Whisper', 'Jyotishi', 'UI/UX Designer', 'Social Manager'],
  },
  personal: {
    label: 'Personal Assistants',
    color: colors.status.warning,
    icon: 'User',
    agents: ['Trading Journal', 'Job Hunt', 'Email Assistant', 'Finance Tracker', 'Health Coach', 'Learning Coach', 'Pustak', 'Hustler', 'Nomad', 'Connector'],
  },
};

// Chart configurations
export const chartConfig = {
  colors: [
    colors.accent.orange,
    colors.status.success,
    colors.status.info,
    colors.status.warning,
    '#8B5CF6',
    '#EC4899',
  ],
  grid: {
    stroke: colors.primary[700],
    strokeDasharray: '3 3',
  },
  tooltip: {
    backgroundColor: colors.primary[800],
    borderColor: colors.border.default,
    textColor: colors.text.primary,
  },
};

// Component variants
export const componentVariants = {
  button: {
    primary: {
      bg: colors.accent.orange,
      hoverBg: colors.accent.orangeLight,
      text: '#FFFFFF',
    },
    secondary: {
      bg: colors.primary[700],
      hoverBg: colors.primary[600],
      text: colors.text.primary,
    },
    ghost: {
      bg: 'transparent',
      hoverBg: colors.primary[700],
      text: colors.text.secondary,
    },
    danger: {
      bg: colors.status.error,
      hoverBg: colors.status.errorLight,
      text: '#FFFFFF',
    },
  },
  card: {
    default: {
      bg: colors.background.card,
      border: colors.border.default,
      shadow: shadows.md,
    },
    elevated: {
      bg: colors.background.elevated,
      border: colors.border.hover,
      shadow: shadows.lg,
    },
    hover: {
      bg: colors.background.card,
      border: colors.border.hover,
      shadow: shadows.lg,
    },
  },
};
