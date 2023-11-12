import defaultProgress from '@/data/defaults/progress/melee'
import defaultCompletionistProgress from '@/data/defaults/progress/completionist'
import defaultMasteryProgress from '@/data/defaults/progress/mastery'
import defaultZombiesProgress from '@/data/defaults/progress/zombies'

// The order of the weapons in this array is the order they will appear in the app
const weapons = [
  { name: 'Combat Knife', game: 'MW2' },
  { name: 'Riot Shield', game: 'MW2' },
  { name: 'Dual Kodachis', game: 'MW2' },
  { name: 'Tonfa', game: 'MW2' },
  { name: 'Pickaxe', game: 'MW2' },
  { name: 'Dual Kamas', game: 'MW2' },
  { name: 'Gutter Knife', game: 'MW3' },
  { name: 'Karambit', game: 'MW3' },
]

export default weapons.map((weapon) => ({
  category: 'Melee',
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
