import requirements from '@/data/requirements/camouflages'

const completionistChallenges = {
	MW2: {
		Gold: {
			amount: 3,
			type: 'without_dying',
			times: 10,
		},
		Platinum: {
			amount: 25,
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
	'MCPR-300': {
		'Clay': requirements['Clay'],
		'Snow Grass': requirements['Snow Grass'],
		'Neon Shards': requirements['Neon Shards'],
		'Bloodied': requirements['Bloodied'],
		...completionistChallenges['MW2'],

		'Platinum': {
			amount: 20,
			type: 'longshot',
		},
	},

	'Signal 50': {
		Gladiator: requirements['Gladiator'],
		Unearthed: requirements['Unearthed'],
		Earthbound: requirements['Earthbound'],
		Spectrums: requirements['Spectrums'],
		...completionistChallenges['MW2'],

		Platinum: {
			amount: 20,
			type: 'longshot',
		},
	},

	'LA-B 330': {
		'Shark Net': requirements['Shark Net'],
		'Dirt': requirements['Dirt'],
		'Leafless': requirements['Leafless'],
		'Teal Tiger': requirements['Teal Tiger'],
		...completionistChallenges['MW2'],

		'Polyatomic': {
			amount: 25,
			type: 'headshot',
		},
	},

	'SP-X 80': {
		'Scratch': requirements['Scratch'],
		'Dry Field': requirements['Dry Field'],
		'Aspen': requirements['Aspen'],
		'Lichyard': requirements['Lichyard'],
		...completionistChallenges['MW2'],

		'Polyatomic': {
			amount: 25,
			type: 'headshot',
		},
	},

	'Victus XMR': {
		'Snowy Nights': requirements['Snowy Nights'],
		'Burned Edges': requirements['Burned Edges'],
		'Tangographical': requirements['Tangographical'],
		'Coral Reef': requirements['Coral Reef'],
		...completionistChallenges['MW2'],

		'Polyatomic': {
			amount: 25,
			type: 'headshot',
		},
	},

	'FJX Imperium': {
		'Arctic Growth': requirements['Arctic Growth'],
		'Styx': requirements['Styx'],
		'Psychoactive': requirements['Psychoactive'],
		'Bedlam': requirements['Bedlam'],
		...completionistChallenges['MW2'],

		'Polyatomic': {
			amount: 25,
			type: 'headshot',
		},
	},

	'Carrack .300': {
		'Birch': requirements['Birch'],
		'Cloud Static': requirements['Cloud Static'],
		'Blood and Mud': requirements['Blood and Mud'],
		'Lumber Tactical': requirements['Lumber Tactical'],
		...completionistChallenges['MW2'],

		'Polyatomic': {
			amount: 25,
			type: 'headshot',
		},
	},

	'KATT-AMR': {
		...completionistChallenges['MW3'],
	},

	'Longbow': {
		...completionistChallenges['MW3'],
	},

	'KV Inhibitor': {
		...completionistChallenges['MW3'],
	},
}
