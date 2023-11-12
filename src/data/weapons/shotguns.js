import defaultProgress from '@/data/defaults/progress/shotguns'
import defaultCompletionistProgress from '@/data/defaults/progress/completionist'
import defaultMasteryProgress from '@/data/defaults/progress/mastery'
import defaultZombiesProgress from '@/data/defaults/progress/zombies'

// The order of the weapons in this array is the order they will appear in the app
const weapons = [
  { name: 'Lockwood 300', game: 'MW2' },
  { name: 'Expedite 12', game: 'MW2' },
  { name: 'Bryson 800', game: 'MW2' },
  { name: 'Bryson 890', game: 'MW2' },
  { name: 'KV Broadside', game: 'MW2' },
  { name: 'MX Guardian', game: 'MW2' },
  { name: 'Lockwood 680', game: 'MW3' },
  { name: 'Haymaker', game: 'MW3' },
  { name: 'Riveter', game: 'MW3' },
]

export default weapons.map((weapon) => ({
  category: 'Shotguns',
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
