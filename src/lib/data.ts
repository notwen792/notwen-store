export type UserProfile = {
  id: number;
  username: string;
  avatarImageId: string;
  rank: string;
  rankIcon: string;
  level: number;
  hoursPlayed: number;
  bio: string;
};

const ranks = {
  diamond: 'https://img.icons8.com/nolan/64/diamond.png',
  platinum: 'https://img.icons8.com/nolan/64/platinum-bar.png',
  gold: 'https://img.icons8.com/nolan/64/gold-bars.png',
  silver: 'https://img.icons8.com/nolan/64/silver-bar.png',
};

export const userProfiles: UserProfile[] = [
  {
    id: 1,
    username: 'NeonNinja',
    avatarImageId: 'avatar1',
    rank: 'Diamond',
    rankIcon: ranks.diamond,
    level: 88,
    hoursPlayed: 1240,
    bio: 'Silent steps, sharp blade. Mastering the shadows in every game.'
  },
  {
    id: 2,
    username: 'CyberGladiator',
    avatarImageId: 'avatar2',
    rank: 'Diamond',
    rankIcon: ranks.diamond,
    level: 92,
    hoursPlayed: 1530,
    bio: 'Fighting for glory in the digital arena. Challenge me if you dare.'
  },
  {
    id: 3,
    username: 'VortexViper',
    avatarImageId: 'avatar3',
    rank: 'Platinum',
    rankIcon: ranks.platinum,
    level: 75,
    hoursPlayed: 980,
    bio: 'Twisting the meta. Strategic mastermind and team player.'
  },
  {
    id: 4,
    username: 'PixelPhantom',
    avatarImageId: 'avatar4',
    rank: 'Platinum',
    rankIcon: ranks.platinum,
    level: 68,
    hoursPlayed: 850,
    bio: 'Now you see me, now you don\'t. Ghosting through pixels.'
  },
  {
    id: 5,
    username: 'GridGazer',
    avatarImageId: 'avatar5',
    rank: 'Gold',
    rankIcon: ranks.gold,
    level: 55,
    hoursPlayed: 620,
    bio: 'Watching the grid, one victory at a time. The OG.'
  },
  {
    id: 6,
    username: 'ArcadeAce',
    avatarImageId: 'avatar6',
    rank: 'Gold',
    rankIcon: ranks.gold,
    level: 61,
    hoursPlayed: 710,
    bio: 'High scores and higher spirits. Retro-futurist gamer.'
  },
  {
    id: 7,
    username: 'SynthwaveScout',
    avatarImageId: 'avatar7',
    rank: 'Silver',
    rankIcon: ranks.silver,
    level: 42,
    hoursPlayed: 450,
    bio: 'Exploring new worlds with a synthwave beat in the background.'
  },
  {
    id: 8,
    username: 'GlitchGuardian',
    avatarImageId: 'avatar8',
    rank: 'Silver',
    rankIcon: ranks.silver,
    level: 39,
    hoursPlayed: 390,
    bio: 'Finding and exploiting the glitches. It\'s not a bug, it\'s a feature.'
  },
  {
    id: 9,
    username: 'RogueRunner',
    avatarImageId: 'avatar9',
    rank: 'Silver',
    rankIcon: ranks.silver,
    level: 45,
    hoursPlayed: 500,
    bio: 'Going against the grain. Prefers the path less traveled.'
  },
];
