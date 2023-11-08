import requirements from '@/data/requirements/camouflages'

const camouflages = [
  'Blades',
  'Motley',
  'Dune Sea',
  'Forest Ice',
  'Stone Guard',
  'Icepick',
  'Shale',
  'Uncheckered',
  'Canary Stone',
  'Stoked Flame',
  'Autumn Dazzle',
  'Poison',
  'Granite',
  'Chrysolite',
  'Splintered Asphalt',
  'Sunset',
  'Deciduous',
  'Stone Ridge',
  'Ziggurat',
  'Green Edges',
  'Scattered Lines',
  'Fractal Lapse',
  'Foundation',
]

export default camouflages.map((camouflage) => ({
  category: 'Geometric',
  completed: false,
  name: camouflage,
  requirement: requirements[camouflage],
}))
