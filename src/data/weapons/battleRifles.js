import defaultProgress from '@/data/defaults/progress/battleRifles'
import defaultCompletionistProgress from '@/data/defaults/progress/completionist'
import defaultMasteryProgress from '@/data/defaults/progress/mastery'

// The order of the weapons in this array is the order they will appear in the app
const weapons = [
  { name: 'BAS-B' },
  { name: 'Sidewinder' },
  { name: 'MTZ-762' },
  { name: 'SOA Subverter' },
  { name: 'DTIR 30-06' },
]

export default weapons.map((weapon) => ({
  category: 'Battle Rifles',
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
