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
    'Deconstructed': requirements['Deconstructed'],
    'Alert Glitch': requirements['Alert Glitch'],
    'Acid Drop': requirements['Acid Drop'],
    'Red Admiral': requirements['Red Admiral'],

    'Gilded': {
      amount: 10,
      type: 'without_damaged',
    },

    'Forged': {
      amount: 25,
      type: 'injured_enemy',
    },

    'Priceless': {
      amount: 10,
      type: 'headshot',
    },
  },

  'Renetti': {
    'Pyro Filaments': requirements['Pyro Filaments'],
    'Red Cells': requirements['Red Cells'],
    'Psychotropic': requirements['Psychotropic'],
    'Pabels': requirements['Pabels'],

    'Gilded': {
      amount: 10,
      type: 'without_damaged',
    },

    'Forged': {
      amount: 25,
      type: 'longshot',
    },

    'Priceless': {
      amount: 25,
      type: 'headshot',
    },
  },

  'TYR': {
    'Satin Swirl': requirements['Satin Swirl'],
    'Topo Sandrock': requirements['Topo Sandrock'],
    'Cherry Blossom': requirements['Cherry Blossom'],
    'Corrugated': requirements['Corrugated'],

    'Gilded': {
      amount: 10,
      type: 'without_damaged',
    },

    'Forged': {
      amount: 25,
      type: 'one_shot',
    },

    'Priceless': {
      amount: 25,
      type: 'magnification_scope',
    },
  },

  'WSP Stinger': {
    'Green Sands': requirements['Green Sands'],
    'Arctic Filaments': requirements['Arctic Filaments'],
    'Geofunk': requirements['Geofunk'],
    'Mind Test': requirements['Mind Test'],

    'Gilded': {
      amount: 10,
      type: 'without_damaged',
    },

    'Forged': {
      amount: 25,
      type: 'hipfire_strafing',
    },

    'Priceless': {
      amount: 25,
      type: 'enemy_tactical_affected_akimbo',
    },
  },
}
