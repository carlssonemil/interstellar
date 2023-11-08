import requirements from '@/data/requirements/camouflages'

const camouflages = [
	'Green Woods',
	'Hidden Snake',
	'Dark Canopy',
	'Snowdrift',
	'Dune Stalker',
	'Urban Foliage',
	'Concrete Jungle',
	'Dead Leaves',
	'Void and Light',
	'Arctic Chill',
	'Azure Fray',
	'Jungle Cat',
	'Modern Woodland',
	'Kill Brush',
	'Rocky Desert',
	'Desert Hybrid',
	'Midnight Bay',
	'Outcrop',
	'Forest Water',
	'Tangographical',
	'Red Smoke',
	'Cemented',
	'Poison Rivers',
	'Hunter',
	'Cyber Plateau',
]

export default camouflages.map((camouflage) => ({
	category: 'Woodland',
	completed: false,
	name: camouflage,
	requirement: requirements[camouflage],
}))
