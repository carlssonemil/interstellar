import requirements from '@/data/requirements/camouflages'

const camouflages = [
	'What Skulls?',
	'Necropolis',
	'Cthulhu',
	'Lichyard',
	'Haunting',
	'Styx',
	'Postmortem',
]

export default camouflages.map((camouflage) => ({
	category: 'Skulls',
	completed: false,
	name: camouflage,
	requirement: requirements[camouflage],
}))
