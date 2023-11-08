import defaultProgress from '@/data/defaults/progress/subMachineGuns'
import zombiesProgress from '@/data/defaults/progress/zombies'

// The order of the weapons in this array is the order they will appear in the app
const weapons = [
  { name: 'VEL 46', game: 'MW2' },
  { name: 'MX9', game: 'MW2' },
  { name: 'Lachmann Sub', game: 'MW2' },
  { name: 'Vaznev-9K', game: 'MW2' },
  { name: 'FSS Hurricane', game: 'MW2' },
  { name: 'Minibak', game: 'MW2' },
  { name: 'BAS-P', game: 'MW2' },
  { name: 'PDSW 528', game: 'MW2' },
  { name: 'Fennec 45', game: 'MW2' },
  { name: 'ISO 45', game: 'MW2' },
  { name: 'Lachmann Shroud', game: 'MW2' },
  { name: 'ISO 9mm', game: 'MW2' },
  { name: 'Striker', game: 'MW3' },
  { name: 'WSP Swarm', game: 'MW3' },
  { name: 'AMR9', game: 'MW3' },
  { name: 'WSP-9', game: 'MW3' },
  { name: 'Rival-9', game: 'MW3' },
  { name: 'Striker 9', game: 'MW3' },
]

export default weapons.map((weapon) => ({
  category: 'Sub Machine Guns',
  comingSoon: weapon.comingSoon || false,
  game: weapon.game,
  name: weapon.name,

  progress: {
    ...defaultProgress[weapon.name],
    Gilded: false,
    Forged: false,
    Priceless: false,
  },

  zombiesProgress: {
    ...zombiesProgress[weapon.game],
  },
}))
