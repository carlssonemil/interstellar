import requirements from '@/data/requirements/camouflages'

const camouflages = [
	'Deep Jungle',
	'Autumnal',
	'Dry Field',
	'Countryside',
	'Snow Grass',
	'Aspen',
	'Bamboo',
	'Mosswood',
	'Ferns',
	'Leafless',
	'Urban Dusk',
	'Fibrous',
	'Birch',
	'Scratched Up',
]

export default camouflages.map((camouflage) => ({
	category: 'Foliage',
	completed: false,
	name: camouflage,
	requirement: requirements[camouflage],
}))
