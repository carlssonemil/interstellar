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
	'VEL 46': {
		'Arid Digital': requirements['Arid Digital'],
		'Midnight Bay': requirements['Midnight Bay'],
		'Tagged': requirements['Tagged'],
		'Whiteout': requirements['Whiteout'],
		...completionistChallenges['MW2'],
	},

	'MX9': {
		'Concrete Jungle': requirements['Concrete Jungle'],
		'Forest Digital': requirements['Forest Digital'],
		'Overgrown': requirements['Overgrown'],
		'Rainbow Tiger': requirements['Rainbow Tiger'],
		...completionistChallenges['MW2'],
	},

	'Lachmann Sub': {
		'Darkfall': requirements['Darkfall'],
		'Arctic Digital': requirements['Arctic Digital'],
		'Crime Scene': requirements['Crime Scene'],
		'Poison': requirements['Poison'],
		...completionistChallenges['MW2'],
	},

	'Vaznev-9K': {
		'Snow Melt Digital': requirements['Snow Melt Digital'],
		'Kill Brush': requirements['Kill Brush'],
		'Forest Rain': requirements['Forest Rain'],
		'Omnihex': requirements['Omnihex'],
		...completionistChallenges['MW2'],
	},

	'FSS Hurricane': {
		'Green Woods': requirements['Green Woods'],
		'Python': requirements['Python'],
		'Moon Shadow': requirements['Moon Shadow'],
		'Neon Loud': requirements['Neon Loud'],
		...completionistChallenges['MW2'],
	},

	'Minibak': {
		'Timber': requirements['Timber'],
		'Rattlesnake': requirements['Rattlesnake'],
		'Green Digital': requirements['Green Digital'],
		'Stoked Flame': requirements['Stoked Flame'],
		...completionistChallenges['MW2'],
	},

	'PDSW 528': {
		'Shadow Stalker': requirements['Shadow Stalker'],
		'Gecko': requirements['Gecko'],
		'Shale': requirements['Shale'],
		'Pinkish': requirements['Pinkish'],
		...completionistChallenges['MW2'],
	},

	'Fennec 45': {
		'Motley': requirements['Motley'],
		'Shadow Tiger': requirements['Shadow Tiger'],
		'Feral Beast': requirements['Feral Beast'],
		'80s Fever': requirements['80s Fever'],
		...completionistChallenges['MW2'],
	},

	'BAS-P': {
		'Grass Snake': requirements['Grass Snake'],
		'Bark Digital': requirements['Bark Digital'],
		'Urban Dusk': requirements['Urban Dusk'],
		'Dark Violet': requirements['Dark Violet'],
		...completionistChallenges['MW2'],
	},

	'ISO 45': {
		'Tunnels': requirements['Tunnels'],
		'Ziggurat': requirements['Ziggurat'],
		'Dappled Shade': requirements['Dappled Shade'],
		'Prismatic': requirements['Prismatic'],
		...completionistChallenges['MW2'],
	},

	'Lachmann Shroud': {
		'Mud Snake': requirements['Mud Snake'],
		'Germinate': requirements['Germinate'],
		'Acrid Drift': requirements['Acrid Drift'],
		'Goodnight Vibes': requirements['Goodnight Vibes'],
		...completionistChallenges['MW2'],
	},

	'ISO 9mm': {
		'Digital Boulder': requirements['Digital Boulder'],
		'Foundation': requirements['Foundation'],
		'Snow Tiger': requirements['Snow Tiger'],
		'Neon Peaks': requirements['Neon Peaks'],
		...completionistChallenges['MW2'],
	},

	'Striker': {
		...completionistChallenges['MW3'],
	},

	'WSP Swarm': {
		...completionistChallenges['MW3'],
	},

	'AMR9': {
		...completionistChallenges['MW3'],
	},

	'WSP-9': {
		...completionistChallenges['MW3'],
	},

	'Rival-9': {
		...completionistChallenges['MW3'],
	},

	'Striker 9': {
		...completionistChallenges['MW3'],
	},
}
