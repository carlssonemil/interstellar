import defaultProgress from '@/data/defaults/progress/shotguns'
import zombiesProgress from '@/data/defaults/progress/zombies'

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

    // MW2 Completionist Camouflages
    Gold: false,
    Platinum: false,
    Polyatomic: false,

    // MW3 Completionist Camouflages
    Gilded: false,
    Forged: false,
    Priceless: false,
  },

  zombiesProgress: {
    ...zombiesProgress[weapon.game],
  },
}))
