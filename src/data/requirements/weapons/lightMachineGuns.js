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
			amount: 25,
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
	'Sakin MG38': {
		'Commando Paint': requirements['Commando Paint'],
		'Necropolis': requirements['Necropolis'],
		'Fractal Mud': requirements['Fractal Mud'],
		'Magma Digital': requirements['Magma Digital'],
		...completionistChallenges['MW2'],
	},

	'HCR 56': {
		'Surface Tension': requirements['Surface Tension'],
		'Hexed': requirements['Hexed'],
		'Sunset': requirements['Sunset'],
		'Tessellation': requirements['Tessellation'],
		...completionistChallenges['MW2'],
	},

	'556 Icarus': {
		'Olive': requirements['Olive'],
		'What Skulls?': requirements['What Skulls?'],
		'Night Quarry': requirements['Night Quarry'],
		'Autumn Dazzle': requirements['Autumn Dazzle'],
		...completionistChallenges['MW2'],
	},

	'Raal MG': {
		'Rocky Desert': requirements['Rocky Desert'],
		'Trailblazer': requirements['Trailblazer'],
		'Night Terror': requirements['Night Terror'],
		'Uncheckered': requirements['Uncheckered'],
		...completionistChallenges['MW2'],
	},

	'RPK': {
		'Dark Rainforest': requirements['Dark Rainforest'],
		'China Lake': requirements['China Lake'],
		'Asphalt': requirements['Asphalt'],
		'Rupture': requirements['Rupture'],
		...completionistChallenges['MW2'],
	},

	'Rapp H': {
		'Desert Snake': requirements['Desert Snake'],
		'Classic Digital': requirements['Classic Digital'],
		'Quarry': requirements['Quarry'],
		'Blue Tiger': requirements['Blue Tiger'],
		...completionistChallenges['MW2'],
	},

	'Pulemyot 762': {
		...completionistChallenges['MW3'],
	},

	'DG-58 LSW': {
		...completionistChallenges['MW3'],
	},

	'Holger 26': {
		...completionistChallenges['MW3'],
	},

	'Bruen MK9': {
		...completionistChallenges['MW3'],
	},

	'TAQ Eradicator': {
		...completionistChallenges['MW3'],
	},
}
