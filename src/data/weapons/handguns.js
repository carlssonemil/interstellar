import defaultProgress from '@/data/defaults/progress/handguns'
import zombiesProgress from '@/data/defaults/progress/zombies'

// The order of the weapons in this array is the order they will appear in the app
const weapons = [
  { name: 'P890', game: 'MW2' },
  { name: '.50 GS', game: 'MW2' },
  { name: 'X12', game: 'MW2' },
  { name: 'Basilisk', game: 'MW2' },
  { name: 'X13 Auto', game: 'MW2' },
  { name: 'FTAC Siege', game: 'MW2' },
  { name: 'GS Magna', game: 'MW2' },
  { name: '9mm Daemon', game: 'MW2' },
  { name: 'COR-45', game: 'MW3' },
  { name: 'Renetti', game: 'MW3' },
  { name: 'TYR', game: 'MW3' },
  { name: 'WSP Stinger', game: 'MW3' },
]

export default weapons.map((weapon) => ({
  category: 'Handguns',
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
