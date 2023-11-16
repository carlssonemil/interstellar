const multiplayer = [
  'Aquatic Blur',
  'Arctic Filaments',
  'Cosmic Filaments',
  'Pyro Filaments',
  'Solar Flare',
  'Sunset Blur',
]

const zombies = [
  'Reality Blur',
  'Mutated Flare',
  'Firestorm Blur',
  'Dirt Filaments',
  'Mist Filaments',
  'Moss Filaments',
]

const camouflages = [...multiplayer, ...zombies].sort((a, b) => a.localeCompare(b))

export default camouflages.map((camouflage) => ({
  category: 'Blur',
  name: camouflage,
  multiplayer: multiplayer.includes(camouflage),
  zombies: zombies.includes(camouflage),
}))
