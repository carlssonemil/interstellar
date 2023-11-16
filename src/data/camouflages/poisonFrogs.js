const multiplayer = ['Ameerga', 'Dart', 'Golden Poison', 'Marbled', 'Phantasmal', 'Rock Stone']

const zombies = ['Dire', 'Disoriented', 'Fading Breath', 'Familiar', 'Nocuous', 'Perilous']

const camouflages = [...multiplayer, ...zombies].sort((a, b) => a.localeCompare(b))

export default camouflages.map((camouflage) => ({
  category: 'Poison Frogs',
  name: camouflage,
  multiplayer: multiplayer.includes(camouflage),
  zombies: zombies.includes(camouflage),
}))
