const camouflages = [
  'Topo Arid',
  'Topo Boulder',
  'Topo Caustic',
  'Topo Glitch',
  'Topo Hardpan',
  'Topo Lithic',
  'Topo Muddy',
  'Topo Regal',
  'Topo Reverb',
  'Topo Sandrock',
]

export default camouflages.map((camouflage) => ({
  category: 'Topographic',
  name: camouflage,
}))
