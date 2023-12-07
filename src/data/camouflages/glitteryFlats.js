const multiplayer = [
  'Amaranth Sands',
  'Blue Sands',
  'Cobalt Sands',
  'Green Sands',
  'Orange Sands',
  'Pink Sands',
  'Purple Sands',
  'Red Sands',
  'Sea Green Sands',
  'Yellow Sands',
  'Brown Sands',
]

const zombies = [
  'Burnt Sands',
  'Dark Sands',
  'Dead Sands',
  'Foam Sands',
  'Forest Sands',
  'Golden Sands',
  'Marrow Sands',
  'Midnight Sands',
  'Toxic Sands',
  'Decayed Sands',
]

const camouflages = [...multiplayer, ...zombies].sort((a, b) => a.localeCompare(b))

export default camouflages.map((camouflage) => ({
  category: 'Glittery Flats',
  name: camouflage,
  multiplayer: multiplayer.includes(camouflage),
  zombies: zombies.includes(camouflage),
}))
