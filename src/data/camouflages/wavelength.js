const multiplayer = [
  '80s Spheres',
  'Geofunk',
  'Gradient Globs',
  'Heatwave',
  'Mind Peak',
  'Psychotropic',
  'Sunset Retro',
  'Shapely Print',
]

const zombies = [
  'Alert',
  'Biomass',
  'Cacophony',
  'Empty Screams',
  'Global Panic',
  'Lost Transmission',
  'Purple Ooze',
  'Radio Waves',
  'Neo-Geo',
]

const camouflages = [...multiplayer, ...zombies].sort((a, b) => a.localeCompare(b))

export default camouflages.map((camouflage) => ({
  category: 'Wavelength',
  name: camouflage,
  multiplayer: multiplayer.includes(camouflage),
  zombies: zombies.includes(camouflage),
}))
