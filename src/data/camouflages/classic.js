import requirements from '@/data/requirements/camouflages'

const camouflages = [
  'New Urban',
  'Autumn Return',
  'Back in Blue',
  'Hexed',
  'Spectrums',
  '80s Fever',
]

export default camouflages.map((camouflage) => ({
  category: 'Classic',
  completed: false,
  name: camouflage,
  requirement: requirements[camouflage],
}))
