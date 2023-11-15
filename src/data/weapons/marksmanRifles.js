import defaultProgress from '@/data/defaults/progress/marksmanRifles'
import defaultCompletionistProgress from '@/data/defaults/progress/completionist'
import defaultMasteryProgress from '@/data/defaults/progress/mastery'
import defaultZombiesProgress from '@/data/defaults/progress/zombies'

// The order of the weapons in this array is the order they will appear in the app
const weapons = [
  { name: 'KVD Enforcer' },
  { name: 'MCW 6.8' },
  { name: 'DM56' },
  { name: 'MTZ Interceptor' },
]

export default weapons.map((weapon) => ({
  category: 'Marksman Rifles',
  comingSoon: weapon.comingSoon || false,
  name: weapon.name,

  progress: {
    ...defaultProgress[weapon.name],
    ...defaultCompletionistProgress,
  },

  masteryProgress: {
    ...defaultMasteryProgress,
  },

  zombiesProgress: {
    ...defaultZombiesProgress,
  },
}))
