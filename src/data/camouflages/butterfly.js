const camouflages = [
  'Fritillary',
  'Menelaus Blue',
  'Monarch',
  'Oakleaf',
  'Orange Sulphur',
  'Red Admiral',
]

export default camouflages.map((camouflage) => ({
  category: 'Butterfly',
  name: camouflage,
}))
