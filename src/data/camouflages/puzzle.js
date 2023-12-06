const multiplayer = ['Puzzling Tiles', 'Rippled', 'Fidget']

const zombies = ['Puzzled', 'Strung Organs', 'Trapped']

const camouflages = [...multiplayer, ...zombies].sort((a, b) => a.localeCompare(b))

export default camouflages.map((camouflage) => ({
  category: 'Puzzle',
  name: camouflage,
  multiplayer: multiplayer.includes(camouflage),
  zombies: zombies.includes(camouflage),
}))
