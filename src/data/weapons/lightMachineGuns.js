import defaultProgress from '@/data/defaults/progress/lightMachineGuns'
import defaultCompletionistProgress from '@/data/defaults/progress/completionist'
import defaultMasteryProgress from '@/data/defaults/progress/mastery'

// The order of the weapons in this array is the order they will appear in the app
const weapons = [
  { name: 'Pulemyot 762' },
  { name: 'DG-58 LSW' },
  { name: 'Holger 26' },
  { name: 'Bruen MK9' },
  { name: 'TAQ Eradicator' },
  { name: 'TAQ Evolvere' },
  { name: 'Kastov LSW' },
]

export default weapons.map((weapon) => ({
  category: 'Light Machine Guns',
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
