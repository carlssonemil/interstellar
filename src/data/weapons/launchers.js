import defaultProgress from '@/data/defaults/progress/launchers'
import zombiesProgress from '@/data/defaults/progress/zombies'

// The order of the weapons in this array is the order they will appear in the app
const weapons = [
	{ name: 'PILA', game: 'MW2' },
	{ name: 'STRELA-P', game: 'MW2' },
	{ name: 'JOKR', game: 'MW2' },
	{ name: 'RPG-7', game: 'MW2' },
	{ name: 'RGL-80', game: 'MW3' },
]

export default weapons.map((weapon) => ({
	category: 'Launchers',
	comingSoon: weapon.comingSoon || false,
	game: weapon.game,
	name: weapon.name,

	progress: {
		...defaultProgress[weapon.name],

		// MW2 Completionist Camouflages
		Gold: false,
		Platinum: false,
		Polyatomic: false,

		// MW3 Completionist Camouflages
		Gilded: false,
		Forged: false,
		Priceless: false,
	},

	zombiesProgress: {
		...zombiesProgress[weapon.game],
	},
}))
