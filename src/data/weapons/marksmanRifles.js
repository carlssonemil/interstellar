import defaultProgress from '@/data/defaults/progress/marksmanRifles'
import defaultCompletionistProgress from '@/data/defaults/progress/completionist'
import defaultMasteryProgress from '@/data/defaults/progress/mastery'
import defaultZombiesProgress from '@/data/defaults/progress/zombies'

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
    ...defaultCompletionistProgress[weapon.game],
  },

  masteryProgress: {
    ...defaultMasteryProgress[weapon.game],
  },

  zombiesProgress: {
    ...defaultZombiesProgress[weapon.game],
  },
}))
