import defaultProgress from '@/data/defaults/progress/lightMachineGuns'
import defaultCompletionistProgress from '@/data/defaults/progress/completionist'
import defaultMasteryProgress from '@/data/defaults/progress/mastery'
import defaultZombiesProgress from '@/data/defaults/progress/zombies'

// The order of the weapons in this array is the order they will appear in the app
const weapons = [
  { name: 'Sakin MG38', game: 'MW2' },
  { name: 'HCR 56', game: 'MW2' },
  { name: '556 Icarus', game: 'MW2' },
  { name: 'Raal MG', game: 'MW2' },
  { name: 'RPK', game: 'MW2' },
  { name: 'Rapp H', game: 'MW2' },
  { name: 'Pulemyot 762', game: 'MW3' },
  { name: 'DG-58 LSW', game: 'MW3' },
  { name: 'Holger 26', game: 'MW3' },
  { name: 'Bruen MK9', game: 'MW3' },
  { name: 'TAQ Eradicator', game: 'MW3' },
]

export default weapons.map((weapon) => ({
  category: 'Light Machine Guns',
  comingSoon: weapon.comingSoon || false,
  game: weapon.game,
  name: weapon.name,

  progress: {
    ...defaultProgress[weapon.name],
    ...defaultCompletionistProgress[weapon.game],
  },

  masteryProgress: {
    ...defaultMasteryProgress[weapon.game],
  },

  zombiesProgress: {
    ...defaultZombiesProgress[weapon.game],
  },
}))
