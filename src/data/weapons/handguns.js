import defaultProgress from '@/data/defaults/progress/handguns'
import defaultCompletionistProgress from '@/data/defaults/progress/completionist'
import defaultMasteryProgress from '@/data/defaults/progress/mastery'
import defaultZombiesProgress from '@/data/defaults/progress/zombies'

// The order of the weapons in this array is the order they will appear in the app
const weapons = [{ name: 'COR-45' }, { name: 'Renetti' }, { name: 'TYR' }, { name: 'WSP Stinger' }]

export default weapons.map((weapon) => ({
  category: 'Handguns',
  comingSoon: weapon.comingSoon || false,
  name: weapon.name,

  progress: {
    ...defaultProgress[weapon.name],
    ...defaultCompletionistProgress,
  },

  masteryProgress: {
    ...defaultMasteryProgress,
  },

  zombiesProgress: {
    ...defaultZombiesProgress,
  },
}))
