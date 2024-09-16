const multiplayer = [
  'Get Stony',
  'Shuffle',
  'Azure Refract',
]

const zombies = [
  'Puncture',
  'Jagged Edges',
  'Crystalized',
]

const camouflages = [...multiplayer, ...zombies].sort((a, b) => a.localeCompare(b))

export default camouflages.map((camouflage) => ({
  category: 'Geometric',
  name: camouflage,
  multiplayer: multiplayer.includes(camouflage),
  zombies: zombies.includes(camouflage),
}))
