import requirements from '@/data/requirements/camouflages'

const camouflages = [
  'Sand',
  'Olive',
  'Clay',
  'Slate',
  'Pine',
  'Neon Loud',
  'Hunting Orange',
  'Azul',
  'Aqua',
  'Scarlet',
  'Navy',
  'Pinkish',
  'Whiteout',
  'Charcoal',
  'Unplumbed',
  'Ghastly Green',
]

export default camouflages.map((camouflage) => ({
  category: 'Solid Colors',
  completed: false,
  name: camouflage,
  requirement: requirements[camouflage],
}))
