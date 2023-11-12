import defaultProgress from '@/data/defaults/progress/assaultRifles'
import defaultCompletionistProgress from '@/data/defaults/progress/completionist'
import defaultMasteryProgress from '@/data/defaults/progress/mastery'
import defaultZombiesProgress from '@/data/defaults/progress/zombies'

// The order of the weapons in this array is the order they will appear in the app
const weapons = [
  { name: 'M4', game: 'MW2' },
  { name: 'TAQ-56', game: 'MW2' },
  { name: 'Kastov 762', game: 'MW2' },
  { name: 'Lachmann-556', game: 'MW2' },
  { name: 'STB 556', game: 'MW2' },
  { name: 'M16', game: 'MW2' },
  { name: 'Kastov-74U', game: 'MW2' },
  { name: 'Kastov 545', game: 'MW2' },
  { name: 'Chimera', game: 'MW2' },
  { name: 'M13B', game: 'MW2' },
  { name: 'ISO Hemlock', game: 'MW2' },
  { name: 'Tempus Razorback', game: 'MW2' },
  { name: 'FR Avancer', game: 'MW2' },
  { name: 'M13C', game: 'MW2' },
  { name: 'TR-76 Geist', game: 'MW2' },
  { name: 'SVA 545', game: 'MW3' },
  { name: 'MTZ-556', game: 'MW3' },
  { name: 'Holger 556', game: 'MW3' },
  { name: 'MCW', game: 'MW3' },
  { name: 'DG-50', game: 'MW3' },
  { name: 'FR 5.56', game: 'MW3' },
]

export default weapons.map((weapon) => ({
  category: 'Assault Rifles',
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
