import defaultProgress from '@/data/defaults/progress/subMachineGuns'
import defaultCompletionistProgress from '@/data/defaults/progress/completionist'
import defaultMasteryProgress from '@/data/defaults/progress/mastery'
import defaultZombiesProgress from '@/data/defaults/progress/zombies'

// The order of the weapons in this array is the order they will appear in the app
const weapons = [
  { name: 'Striker' },
  { name: 'WSP Swarm' },
  { name: 'AMR9' },
  { name: 'WSP-9' },
  { name: 'Rival-9' },
  { name: 'Striker 9' },
]

export default weapons.map((weapon) => ({
  category: 'Sub Machine Guns',
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
