import defaultProgress from '@/data/defaults/progress/melee'
import zombiesProgress from '@/data/defaults/progress/zombies'

// The order of the weapons in this array is the order they will appear in the app
const weapons = [
	{ name: 'Combat Knife', game: 'MW2' },
	{ name: 'Riot Shield', game: 'MW2' },
	{ name: 'Dual Kodachis', game: 'MW2' },
	{ name: 'Tonfa', game: 'MW2' },
	{ name: 'Pickaxe', game: 'MW2' },
	{ name: 'Dual Kamas', game: 'MW2' },
	{ name: 'Gutter Knife', game: 'MW3' },
	{ name: 'Karambit', game: 'MW3' },
]

export default weapons.map((weapon) => ({
	category: 'Melee',
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
