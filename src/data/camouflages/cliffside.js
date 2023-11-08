import requirements from '@/data/requirements/camouflages'

const camouflages = [
  'Forest Rain',
  'Desert Rain',
  'Quarry',
  'Night Quarry',
  'Rupture',
  'Chemical Reaction',
  'Fractal Mud',
  'Slime Time',
  'Violent Orchid',
  'Earthbound',
]

export default camouflages.map((camouflage) => ({
  category: 'Cliffside',
  completed: false,
  name: camouflage,
  requirement: requirements[camouflage],
}))
