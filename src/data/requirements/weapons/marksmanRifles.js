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
  'EBR-14': {
    'Sandstorm Digital': requirements['Sandstorm Digital'],
    'Moss': requirements['Moss'],
    'Autumn Return': requirements['Autumn Return'],
    'Sunlit Croc': requirements['Sunlit Croc'],
    ...completionistChallenges['MW2'],
  },

  'SP-R 208': {
    'Dark Canopy': requirements['Dark Canopy'],
    'Desert Digital': requirements['Desert Digital'],
    'Ferns': requirements['Ferns'],
    'Crimson Streak': requirements['Crimson Streak'],
    ...completionistChallenges['MW2'],
  },

  'Lockwood MK2': {
    'Sand Viper': requirements['Sand Viper'],
    'Desert Rain': requirements['Desert Rain'],
    'Wild Zebra': requirements['Wild Zebra'],
    'Granite': requirements['Granite'],
    ...completionistChallenges['MW2'],
  },

  'LM-S': {
    'Commando Digital': requirements['Commando Digital'],
    'Abominable': requirements['Abominable'],
    'Autumnal': requirements['Autumnal'],
    'Coral Snake': requirements['Coral Snake'],
    ...completionistChallenges['MW2'],
  },

  'SA-B 50': {
    'Urban Digital': requirements['Urban Digital'],
    'Bullsnake': requirements['Bullsnake'],
    'Toxicity': requirements['Toxicity'],
    'Splintered Asphalt': requirements['Splintered Asphalt'],
    ...completionistChallenges['MW2'],
  },

  'TAQ-M': {
    'Dead Hive': requirements['Dead Hive'],
    'Forest Water': requirements['Forest Water'],
    'Skin and Scales': requirements['Skin and Scales'],
    'Chemist Digital': requirements['Chemist Digital'],
    ...completionistChallenges['MW2'],
  },

  'Crossbow': {
    'Deciduous': requirements['Deciduous'],
    'H20': requirements['H20'],
    'Unlit Showers': requirements['Unlit Showers'],
    'Rad N Rancid': requirements['Rad N Rancid'],
    ...completionistChallenges['MW2'],
  },

  'Tempus Torrent': {
    'Speckled': requirements['Speckled'],
    'Oxysporum': requirements['Oxysporum'],
    'Dire Growth': requirements['Dire Growth'],
    'Sandfall': requirements['Sandfall'],
    ...completionistChallenges['MW2'],
  },

  'KVD Enforcer': {
    ...completionistChallenges['MW3'],
  },

  'MCW 6.8': {
    ...completionistChallenges['MW3'],
  },

  'DM56': {
    ...completionistChallenges['MW3'],
  },

  'MTZ Interceptor': {
    ...completionistChallenges['MW3'],
  },
}
