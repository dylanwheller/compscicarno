export type AgeRange = 'junior' | 'senior';

export type Question = {
  id: string;
  worldId: number;
  levelId: number;
  difficulty: AgeRange;
  text: string;
  options: [string, string, string, string];
  correctIndex: 0 | 1 | 2 | 3;
  explanation?: string;
  boss?: boolean;
};

export type World = {
  id: number;
  name: string;
  subject: string;
  description: string;
  icon: string;
  accentColor: string;
  levels: number;
  bossName: string;
};

export const WORLDS: World[] = [
  {
    id: 1,
    name: 'Computers & Hardware',
    subject: 'Computers & Hardware',
    description: 'CPUs, memory, storage, and how computers are built',
    icon: '💻',
    accentColor: '#14b8a6',
    levels: 5,
    bossName: 'The Silicon Overlord',
  },
  {
    id: 2,
    name: 'Programming & Algorithms',
    subject: 'Programming & Algorithms',
    description: 'Code, loops, logic, data structures, and problem solving',
    icon: '🧩',
    accentColor: '#14b8a6',
    levels: 5,
    bossName: 'The Logic Beast',
  },
  {
    id: 3,
    name: 'Internet & Networks',
    subject: 'Internet & Networks',
    description: 'The web, HTTP, cybersecurity, and how data travels',
    icon: '🌐',
    accentColor: '#14b8a6',
    levels: 5,
    bossName: 'The Data Hydra',
  },
  {
    id: 4,
    name: 'AI & The Future',
    subject: 'AI & The Future',
    description: 'Machine learning, robotics, ethics, and what comes next',
    icon: '🤖',
    accentColor: '#14b8a6',
    levels: 5,
    bossName: 'The Neural Titan',
  },
];

export const RANK_NAMES = [
  'Trainee',
  'Coder',
  'Developer',
  'Engineer',
  'Architect',
  'Analyst',
  'Hacker',
  'Technologist',
  'Innovator',
  'CompSciMaster',
];

export const RANK_THRESHOLDS = [0, 100, 250, 500, 1000, 2000, 3500, 5000, 7500, 10000];

export function getRankLevel(points: number): number {
  let rank = 1;
  for (let i = 1; i < RANK_THRESHOLDS.length; i++) {
    if (points >= RANK_THRESHOLDS[i]) rank = i + 1;
    else break;
  }
  return rank;
}

export function getRankName(points: number): string {
  return RANK_NAMES[getRankLevel(points) - 1];
}
