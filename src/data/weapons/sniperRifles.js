import defaultProgress from '@/data/defaults/progress/sniperRifles'
import zombiesProgress from '@/data/defaults/progress/zombies'

// The order of the weapons in this array is the order they will appear in the app
const weapons = [
	{ name: 'MCPR-300', game: 'MW2' },
	{ name: 'Victus XMR', game: 'MW2' },
	{ name: 'Signal 50', game: 'MW2' },
	{ name: 'LA-B 300', game: 'MW2' },
	{ name: 'Carrack .300', game: 'MW2' },
	{ name: 'SP-X 80', game: 'MW2' },
	{ name: 'FJX Imperium', game: 'MW2' },
	{ name: 'KATT-AMR', game: 'MW3' },
	{ name: 'Longbow', game: 'MW3' },
	{ name: 'KV Inhibitor', game: 'MW3' },
]

export default weapons.map((weapon) => ({
	category: 'Sniper Rifles',
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
