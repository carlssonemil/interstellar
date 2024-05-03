import defaultProgress from '@/data/defaults/progress/assaultRifles'
import defaultCompletionistProgress from '@/data/defaults/progress/completionist'
import defaultMasteryProgress from '@/data/defaults/progress/mastery'

// The order of the weapons in this array is the order they will appear in the app
const weapons = [
  { name: 'SVA 545' },
  { name: 'RAM-7' },
  { name: 'MTZ-556' },
  { name: 'Holger 556' },
  { name: 'MCW' },
  { name: 'DG-56' },
  { name: 'FR 5.56' },
  { name: 'BP50' },
  { name: 'BAL-27'}
]

export default weapons.map((weapon) => ({
  category: 'Assault Rifles',
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
