const multiplayer = [
  'Acid Drip',
  'Cherry Blossom',
  'Cinders',
  'Cold Fall',
  'Desolate Ops',
  'Dry Heat',
  'Green Field',
  'Guts',
  'Magma Heat',
  'Rock Glow',
  'Sandzone',
  'Tactical Colors',
  'Ice Cave',
  'Fjord',
]

const zombies = [
  'Below Zero',
  'Cartilage',
  'Caustic River',
  'Decay',
  'Haunted',
  'Illusions',
  'Patchwork',
  'Sludge',
  'Spoiled Eggs',
  'Stonework',
  'Sunstroke',
  'Tide Surge',
  'Dissolver',
  'Gloom',
]

const camouflages = [...multiplayer, ...zombies].sort((a, b) => a.localeCompare(b))

export default camouflages.map((camouflage) => ({
  category: 'Retro',
  name: camouflage,
  multiplayer: multiplayer.includes(camouflage),
  zombies: zombies.includes(camouflage),
}))
