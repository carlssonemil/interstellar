import defaultProgress from '@/data/defaults/progress/battleRifles'
import zombiesProgress from '@/data/defaults/progress/zombies'

// The order of the weapons in this array is the order they will appear in the app
const weapons = [
	{ name: 'Lachmann-762', game: 'MW2' },
	{ name: 'SO-14', game: 'MW2' },
	{ name: 'TAQ-V', game: 'MW2' },
	{ name: 'FTAC Recon', game: 'MW2' },
	{ name: 'Cronen Squall', game: 'MW2' },
	{ name: 'BAS-B', game: 'MW3' },
	{ name: 'Sidewinder', game: 'MW3' },
	{ name: 'MTZ-762', game: 'MW3' },
]

export default weapons.map((weapon) => ({
	category: 'Battle Rifles',
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
