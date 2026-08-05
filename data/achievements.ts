export type Achievement = {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: 'progress' | 'mastery' | 'streak' | 'social';
};

export const ACHIEVEMENTS: Achievement[] = [
  { id: 'first_correct',   title: 'Hello World',           description: 'Answer your first question correctly',              icon: '🌟', category: 'progress' },
  { id: 'world1_complete', title: 'Hardware Hacker',        description: 'Complete all levels in Computers & Hardware',      icon: '💻', category: 'progress' },
  { id: 'world2_complete', title: 'Code Wizard',            description: 'Complete all levels in Programming & Algorithms',  icon: '🧩', category: 'progress' },
  { id: 'world3_complete', title: 'Net Ranger',             description: 'Complete all levels in Internet & Networks',       icon: '🌐', category: 'progress' },
  { id: 'world4_complete', title: 'AI Pioneer',             description: 'Complete all levels in AI & The Future',           icon: '🤖', category: 'progress' },
  { id: 'all_worlds',      title: 'Apex Technologist',      description: 'Complete all four worlds',                         icon: '🏆', category: 'mastery'  },
  { id: 'boss_first',      title: 'Bug Slayer',             description: 'Defeat your first boss',                           icon: '⚔️', category: 'mastery'  },
  { id: 'boss_all',        title: 'System Lord',            description: 'Defeat all four world bosses',                     icon: '👑', category: 'mastery'  },
  { id: 'streak_10',       title: 'No Bugs Here!',          description: 'Get a 10-question answer streak',                  icon: '🔥', category: 'streak'   },
  { id: 'perfect_level',   title: 'Flawless',               description: 'Complete a level with 10/10 correct answers',      icon: '⭐', category: 'mastery'  },
  { id: '100_questions',   title: '100 Lines',              description: 'Answer 100 questions correctly',                   icon: '💯', category: 'progress' },
  { id: '500_questions',   title: 'Deep Learner',           description: 'Answer 500 questions correctly',                   icon: '🧠', category: 'progress' },
  { id: 'login_7',         title: 'Daily Build',            description: 'Log in 7 days in a row',                          icon: '📅', category: 'social'   },
];
