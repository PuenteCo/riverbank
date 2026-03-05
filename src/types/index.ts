export interface ProblemCard {
  number: string;
  icon: string;
  title: string;
  body: string;
}

export interface MethodStep {
  number: string;
  title: string;
  description: string;
  tag: string;
}

export interface AICard {
  icon: string;
  title: string;
  description: string;
}

export interface Employee {
  avatar: string;
  name: string;
  role: string;
  progress: number;
  animationDuration: string;
}

export interface Insight {
  icon: string;
  text: string;
  highlight: string;
}

export interface Product {
  number: string;
  category: string;
  name: string;
  description: string;
  badge: string;
  badgeVariant: 'dark' | 'accent' | 'outline';
}

export interface TargetSector {
  emoji: string;
  title: string;
  description: string;
  tag: string;
}

export interface Credential {
  text: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface BarItem {
  icon: string;
  title: string;
  description: string;
}

export interface PanelMetric {
  value: string;
  suffix: string;
  description: string;
  highlight: string;
}
