import requirements from '@/data/requirements/camouflages'

const camouflages = [
  'Overgrown',
  'Mudslide',
  'Dank Forest',
  'Abominable',
  'Faded Veil',
  'Feral Beast',
  'Tiger Stripes',
  'Desert Cat',
  'Red Tiger',
  'Blue Tiger',
  'Desert Wave',
  'Neon Shards',
  'Teal Tiger',
  'Intoxicate',
  'Shadow Tiger',
  'Sunlit Croc',
  'Ethereal Rampage',
  'Velvet Midnight',
  'Acrid Drift',
]

export default camouflages.map((camouflage) => ({
  category: 'Tiger',
  completed: false,
  name: camouflage,
  requirement: requirements[camouflage],
}))
