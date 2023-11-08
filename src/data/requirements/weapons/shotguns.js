import requirements from '@/data/requirements/camouflages'

const completionistChallenges = {
	MW2: {
		Gold: {
			amount: 3,
			type: 'without_dying',
			times: 10,
		},
		Platinum: {
			amount: 20,
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
	'Lockwood 300': {
		'Mosswood': requirements['Mosswood'],
		'Jungle Cat': requirements['Jungle Cat'],
		'Red Cell': requirements['Red Cell'],
		'Hunting Orange': requirements['Hunting Orange'],
		...completionistChallenges['MW2'],
	},

	'Expedite 12': {
		'Forest Shadow': requirements['Forest Shadow'],
		'Tiger Stripes': requirements['Tiger Stripes'],
		'Snowed In': requirements['Snowed In'],
		'Violent Orchid': requirements['Violent Orchid'],
		...completionistChallenges['MW2'],
	},

	'Bryson 800': {
		'Mud Bath': requirements['Mud Bath'],
		'Bamboo': requirements['Bamboo'],
		'Ground Cover': requirements['Ground Cover'],
		'Aqua': requirements['Aqua'],
		...completionistChallenges['MW2'],
	},

	'Bryson 890': {
		'Snowstorm Digital': requirements['Snowstorm Digital'],
		'Stone Guard': requirements['Stone Guard'],
		'Shedding': requirements['Shedding'],
		'Arctic Chill': requirements['Arctic Chill'],
		...completionistChallenges['MW2'],
	},

	'KV Broadside': {
		'Unplumbed': requirements['Unplumbed'],
		'Conflagration': requirements['Conflagration'],
		'Ethereal Rampage': requirements['Ethereal Rampage'],
		'Riots Nest': requirements['Riots Nest'],

		'Gold': {
			amount: 3,
			type: 'without_dying',
			times: 10,
		},

		'Platinum': {
			amount: 25,
			type: 'longshot',
		},

		'Polyatomic': {
			amount: 25,
			type: 'headshot',
		},
	},

	'MX Guardian': {
		'Wet Sands': requirements['Wet Sands'],
		'Connected Dots': requirements['Connected Dots'],
		'Red Smoke': requirements['Red Smoke'],
		'Green Edges': requirements['Green Edges'],

		'Gold': {
			amount: 3,
			type: 'without_dying',
			times: 10,
		},

		'Platinum': {
			amount: 25,
			type: 'longshot',
		},

		'Polyatomic': {
			amount: 25,
			type: 'headshot',
		},
	},

	'Lockwood 680': {
		...completionistChallenges['MW3'],
	},

	'Haymaker': {
		...completionistChallenges['MW3'],
	},

	'Riveter': {
		...completionistChallenges['MW3'],
	},
}
