import requirements from '@/data/requirements/camouflages'

const camouflages = [
	'Dirt',
	'Moss',
	'Tagged',
	'Black Top',
	'Asphalt',
	'Crime Scene',
	'Neon Pink',
	'Trailblazer',
	'Foliage',
	'Reptilian',
	'Dark Leaves',
	'Internal Flame',
	'Omnihex',
	'Tessellation',
	'Moon Shadow',
	'Burned Edges',
	'Diabolical',
	'H20',
	'Cracking Onyx',
	'Dark Croc',
]

export default camouflages.map((camouflage) => ({
	category: 'Dragon',
	completed: false,
	name: camouflage,
	requirement: requirements[camouflage],
}))
