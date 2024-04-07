import defaultProgress from '@/data/defaults/progress/sniperRifles'
import defaultCompletionistProgress from '@/data/defaults/progress/completionist'
import defaultMasteryProgress from '@/data/defaults/progress/mastery'

// The order of the weapons in this array is the order they will appear in the app
const weapons = [{ name: 'XRK Stalker' }, {name: 'MORS' }, { name: 'KATT-AMR' }, { name: 'Longbow' }, { name: 'KV Inhibitor' }]

export default weapons.map((weapon) => ({
  category: 'Sniper Rifles',
  comingSoon: weapon.comingSoon || false,
  name: weapon.name,

  progress: {
    ...defaultProgress[weapon.name].multiplayer,
    ...defaultCompletionistProgress.multiplayer,
  },

  masteryProgress: {
    ...defaultMasteryProgress,
  },

  zombiesProgress: {
    ...defaultProgress[weapon.name].zombies,
    ...defaultCompletionistProgress.zombies,
  },
}))
