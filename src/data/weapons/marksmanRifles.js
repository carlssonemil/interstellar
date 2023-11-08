import defaultProgress from '@/data/defaults/progress/marksmanRifles'
import zombiesProgress from '@/data/defaults/progress/zombies'

// The order of the weapons in this array is the order they will appear in the app
const weapons = [
  { name: 'EBR-14', game: 'MW2' },
  { name: 'SP-R 208', game: 'MW2' },
  { name: 'Lockwood MK2', game: 'MW2' },
  { name: 'LM-S', game: 'MW2' },
  { name: 'SA-B 50', game: 'MW2' },
  { name: 'TAQ-M', game: 'MW2' },
  { name: 'Crossbow', game: 'MW2' },
  { name: 'Tempus Torrent', game: 'MW2' },
  { name: 'KVD Enforcer', game: 'MW3' },
  { name: 'MCW 6.8', game: 'MW3' },
  { name: 'DM56', game: 'MW3' },
  { name: 'MTZ Interceptor', game: 'MW3' },
]

export default weapons.map((weapon) => ({
  category: 'Marksman Rifles',
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
