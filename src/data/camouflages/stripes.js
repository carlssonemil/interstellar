import requirements from '@/data/requirements/camouflages'

const camouflages = [
	'Commando Paint',
	'Marshland',
	'Savannah',
	'Mud Bath',
	'Dark Rainforest',
	'Shadow Stalker',
	'Ground Cover',
	'Urban Zebra',
	'Wild Zebra',
	'Tendrils',
	'Beached',
	'Timber',
	'Snowed In',
	'Stalking Cat',
	'Field Ops',
	'Paths Of Light',
	'Dire Growth',
	'Sky Cover',
	'Wet Sands',
	'Zany Zebra',
]

export default camouflages.map((camouflage) => ({
	category: 'Stripes',
	completed: false,
	name: camouflage,
	requirement: requirements[camouflage],
}))
