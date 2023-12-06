const multiplayer = [
  'B&W Fuzz',
  'B&W Re-Fuzz',
  'Blue Satin',
  'Dark Vision',
  'Light Vision',
  'Purple Satin',
  'Satin Swirl',
  'Smooth Satin',
  'Warbled',
  'White Satin',
  'Spectral Overload',
  'Sprayed Lines',
]

const zombies = [
  'Black Satin',
  'Blurred Myopia',
  'Dazed',
  'Green Satin',
  'Inkblot',
  'Orange Satin',
  'Ripped',
  'Royale Swirl',
  'Spectral Sight',
  'Unknown Visitor',
  'Deformed',
  'Blood Gutter',
]

const camouflages = [...multiplayer, ...zombies].sort((a, b) => a.localeCompare(b))

export default camouflages.map((camouflage) => ({
  category: 'High Contrast',
  name: camouflage,
  multiplayer: multiplayer.includes(camouflage),
  zombies: zombies.includes(camouflage),
}))
