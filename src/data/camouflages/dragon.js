const multiplayer = [
  'He\'s Looking At You',
  'All-Consuming',
]

const zombies = [
  'Evil-Eye-Ris',
  'Devouring Demons',
]

const camouflages = [...multiplayer, ...zombies].sort((a, b) => a.localeCompare(b))

export default camouflages.map((camouflage) => ({
  category: 'Dragon',
  name: camouflage,
  multiplayer: multiplayer.includes(camouflage),
  zombies: zombies.includes(camouflage),
}))
