import defaultProgress from '@/data/defaults/progress/sniperRifles'
import defaultCompletionistProgress from '@/data/defaults/progress/completionist'
import defaultMasteryProgress from '@/data/defaults/progress/mastery'
import defaultZombiesProgress from '@/data/defaults/progress/zombies'

// The order of the weapons in this array is the order they will appear in the app
const weapons = [
  { name: 'MCPR-300', game: 'MW2' },
  { name: 'Victus XMR', game: 'MW2' },
  { name: 'Signal 50', game: 'MW2' },
  { name: 'LA-B 330', game: 'MW2' },
  { name: 'Carrack .300', game: 'MW2' },
  { name: 'SP-X 80', game: 'MW2' },
  { name: 'FJX Imperium', game: 'MW2' },
  { name: 'KATT-AMR', game: 'MW3' },
  { name: 'Longbow', game: 'MW3' },
  { name: 'KV Inhibitor', game: 'MW3' },
]

export default weapons.map((weapon) => ({
  category: 'Sniper Rifles',
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
