import requirements from '@/data/requirements/camouflages'

const completionistChallenges = {
	MW2: {
		Gold: {
			amount: 3,
			type: 'without_dying',
			times: 5,
		},
		Platinum: {
			amount: 15,
			type: 'longshot',
		},
		Polyatomic: {
			amount: 20,
			type: 'headshot',
		},
	},

	MW3: {
		Gilded: {},
		Forged: {},
		Priceless: {},
	},
}

export default {
	'P890': {
		'Sand': requirements['Sand'],
		'Muddied': requirements['Muddied'],
		'Blue Digital': requirements['Blue Digital'],
		'Pixel Coast': requirements['Pixel Coast'],
		...completionistChallenges['MW2'],
	},

	'.50 GS': {
		'Blades': requirements['Blades'],
		'Foliage': requirements['Foliage'],
		'Leopard': requirements['Leopard'],
		'8-Bit Static': requirements['8-Bit Static'],
		...completionistChallenges['MW2'],
	},

	'X12': {
		'Bio Static Digital': requirements['Bio Static Digital'],
		'Desert Wave': requirements['Desert Wave'],
		'Garter Snake': requirements['Garter Snake'],
		'Azul': requirements['Azul'],
		...completionistChallenges['MW2'],
	},

	'Basilisk': {
		Outcrop: requirements['Outcrop'],
		Countryside: requirements['Countryside'],
		Navy: requirements['Navy'],
		Chrysolite: requirements['Chrysolite'],
		...completionistChallenges['MW2'],
	},

	'X13 Auto': {
		'Void and Light': requirements['Void and Light'],
		'Asphalt Digital': requirements['Asphalt Digital'],
		'Dark Echo': requirements['Dark Echo'],
		'Party Time': requirements['Party Time'],
		...completionistChallenges['MW2'],
	},

	'FTAC Siege': {
		'Sandpaper': requirements['Sandpaper'],
		'Velvet Midnight': requirements['Velvet Midnight'],
		'Painted Pig': requirements['Painted Pig'],
		'Fuzzy Spectrum': requirements['Fuzzy Spectrum'],
		...completionistChallenges['MW2'],
	},

	'GS Magna': {
		'Digital Wilds': requirements['Digital Wilds'],
		'Rhyolitic': requirements['Rhyolitic'],
		'Cracking Onyx': requirements['Cracking Onyx'],
		'Rad Reverb': requirements['Rad Reverb'],
		...completionistChallenges['MW2'],
	},

	'9mm Daemon': {
		'Deserted': requirements['Deserted'],
		'Hunter': requirements['Hunter'],
		'Fractal Lapse': requirements['Fractal Lapse'],
		'Crosshatch': requirements['Crosshatch'],
		...completionistChallenges['MW2'],
	},

	'COR-45': {
		...completionistChallenges['MW3'],
	},

	'Renetti': {
		...completionistChallenges['MW3'],
	},

	'TYR': {
		...completionistChallenges['MW3'],
	},

	'WSP Stinger': {
		...completionistChallenges['MW3'],
	},
}
