const multiplayer = [
  '80s Spheres',
  'Geofunk',
  'Heatwave',
  'Mind Peak',
  'Psychotropic',
  'Sunset Retro',
]

const zombies = [
  'Alert',
  'Cacophony',
  'Global Panic',
  'Lost Transmission',
  'Purple Ooze',
  'Radio Waves',
]

const camouflages = [...multiplayer, ...zombies].sort((a, b) => a.localeCompare(b))

export default camouflages.map((camouflage) => ({
  category: 'Wavelength',
  name: camouflage,
  multiplayer: multiplayer.includes(camouflage),
  zombies: zombies.includes(camouflage),
}))
