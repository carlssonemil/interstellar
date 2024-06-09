import defaultProgress from '@/data/defaults/progress/marksmanRifles'
import defaultCompletionistProgress from '@/data/defaults/progress/completionist'
import defaultMasteryProgress from '@/data/defaults/progress/mastery'

// The order of the weapons in this array is the order they will appear in the app
const weapons = [
  { name: 'KVD Enforcer' },
  { name: 'MCW 6.8' },
  { name: 'DM56' },
  { name: 'MTZ Interceptor' },
  { name: 'Kar98k' },
]

export default weapons.map((weapon) => ({
  category: 'Marksman Rifles',
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
