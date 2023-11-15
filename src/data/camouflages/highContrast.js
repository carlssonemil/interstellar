const camouflages = [
  'B&W Fuzz',
  'B&W Re-Fuzz',
  'Blue Satin',
  'Dark Vision',
  'Purple Satin',
  'Satin Swirl',
  'Smooth Satin',
  'Warbled',
  'White Satin',
]

export default camouflages.map((camouflage) => ({
  category: 'High Contrast',
  name: camouflage,
}))
