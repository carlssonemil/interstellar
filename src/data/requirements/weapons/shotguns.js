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
    'Blue Sands': requirements['Blue Sands'],
    'Palette Navy': requirements['Palette Navy'],
    'Descent': requirements['Descent'],
    'Overwhelmed': requirements['Overwhelmed'],

    'Gilded': {
      amount: 2,
      type: 'kills_shortly_after_sprinting_one_life',
    },

    'Forged': {
      amount: 25,
      type: 'ads_one_shot',
    },

    'Priceless': {
      amount: 5,
      type: 'hipfire_moving',
    },
  },

  'Haymaker': {
    'Pink Sands': requirements['Pink Sands'],
    'Guts': requirements['Guts'],
    'Palette Tropics': requirements['Palette Tropics'],
    'Smooth Satin': requirements['Smooth Satin'],

    'Gilded': {
      amount: 2,
      type: 'kills_shortly_after_sprinting_one_life',
    },

    'Forged': {
      amount: 3,
      times: 15,
      type: 'hipfire_one_mag',
    },

    'Priceless': {
      amount: 10,
      type: 'double_kills_tac_stance',
    },
  },

  'Riveter': {
    'Purple Sands': requirements['Purple Sands'],
    '80s Spheres': requirements['80s Spheres'],
    'Palette Grasses': requirements['Palette Grasses'],
    'Upward Reverb': requirements['Upward Reverb'],

    'Gilded': {
      amount: 2,
      type: 'kills_shortly_after_sprinting_one_life',
    },

    'Forged': {
      amount: 25,
      type: 'multikills',
    },

    'Priceless': {
      amount: 5,
      times: 5,
      type: 'without_dying',
    },
  },
}
