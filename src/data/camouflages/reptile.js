import requirements from '@/data/requirements/camouflages'

const camouflages = [
  'Coral Snake',
  'Anaconda',
  'Python',
  'Rattlesnake',
  'Bullsnake',
  'Gecko',
  'Garter Snake',
  'Dark Echo',
  'Toxicity',
  'Shedding',
  'Skin and Scales',
  'Heavy Commando',
  'Night Terror',
  'Muddied',
  'Torn Scales',
  'Ice Cave',
  'Snowy Nights',
]

export default camouflages.map((camouflage) => ({
  category: 'Reptile',
  completed: false,
  name: camouflage,
  requirement: requirements[camouflage],
}))
