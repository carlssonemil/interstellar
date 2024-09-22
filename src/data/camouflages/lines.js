const multiplayer = [
  'Out Of Sorts',
  'Peaks And Valleys',
]

const zombies = [
  'Overstretched',
  'Highs And Lows',
]

const camouflages = [...multiplayer, ...zombies].sort((a, b) => a.localeCompare(b))

export default camouflages.map((camouflage) => ({
  category: 'Lines',
  name: camouflage,
  multiplayer: multiplayer.includes(camouflage),
  zombies: zombies.includes(camouflage),
}))
