import defaultProgress from '@/data/defaults/progress/launchers'
import defaultCompletionistProgress from '@/data/defaults/progress/completionist'
import defaultMasteryProgress from '@/data/defaults/progress/mastery'
import defaultZombiesProgress from '@/data/defaults/progress/zombies'

// The order of the weapons in this array is the order they will appear in the app
const weapons = [
  { name: 'PILA', game: 'MW2' },
  { name: 'STRELA-P', game: 'MW2' },
  { name: 'JOKR', game: 'MW2' },
  { name: 'RPG-7', game: 'MW2' },
  { name: 'RGL-80', game: 'MW3' },
]

export default weapons.map((weapon) => ({
  category: 'Launchers',
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
