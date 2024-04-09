import defaultProgress from '@/data/defaults/progress/melee'
import defaultCompletionistProgress from '@/data/defaults/progress/completionist'
import defaultMasteryProgress from '@/data/defaults/progress/mastery'

// The order of the weapons in this array is the order they will appear in the app
const weapons = [
  { name: 'Gutter Knife' },
  { name: 'Karambit' },
  { name: 'Gladiator' },
  { name: 'Soulrender' },
]

export default weapons.map((weapon) => ({
  category: 'Melee',
  comingSoon: weapon.comingSoon || false,
  name: weapon.name,

  progress: {
    ...defaultProgress[weapon.name].multiplayer,
    ...defaultCompletionistProgress.multiplayer,
  },

  masteryProgress: {
    ...defaultMasteryProgress,
  },

  zombiesProgress: {
    ...defaultProgress[weapon.name].zombies,
    ...defaultCompletionistProgress.zombies,
  },
}))
