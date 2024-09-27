const multiplayer = [
  'Shadow',
  'Coiled',
  'Tidepool',
  'Blacklight',
  'Penny',
  'Bugged Out',
  'No-Fly Zone',
  'Cursed Photocopy',
]

const zombies = [
  'Shadow Sting',
  'Piranha',
  'Blight Hound',
  'Spectral',
  'Lurker',
  'Dead Creeper',
  'Flightless Bird',
  'Photocopied Horror',
]

const camouflages = [...multiplayer, ...zombies].sort((a, b) => a.localeCompare(b))

export default camouflages.map((camouflage) => ({
  category: 'Cute Critters',
  name: camouflage,
  multiplayer: multiplayer.includes(camouflage),
  zombies: zombies.includes(camouflage),
}))
