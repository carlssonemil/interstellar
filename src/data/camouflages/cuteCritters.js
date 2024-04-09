const multiplayer = [
  'Shadow',
  'Coiled',
  'Tidepool',
  'Blacklight',
  'Penny',
]

const zombies = [
  'Shadow Sting',
  'Piranha',
  'Blight Hound',
  'Spectral',
  'Lurker'
]

const camouflages = [...multiplayer, ...zombies].sort((a, b) => a.localeCompare(b))

export default camouflages.map((camouflage) => ({
  category: 'Cute Critters',
  name: camouflage,
  multiplayer: multiplayer.includes(camouflage),
  zombies: zombies.includes(camouflage),
}))
