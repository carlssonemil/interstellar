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
    'Cosmic Filaments': requirements['Cosmic Filaments'],
    'Ember Glitch': requirements['Ember Glitch'],
    'Sunset Retro': requirements['Sunset Retro'],
    'B&W Fuzz': requirements['B&W Fuzz'],

    'Gilded': {
      amount: 2,
      type: 'kills_shortly_after_sprinting_one_life',
    },

    'Forged': {
      amount: 25,
      type: 'magnification_scope',
    },

    'Priceless': {
      amount: 5,
      times: 10,
      type: 'one_mag',
    },
  },

  'DG-58 LSW': {
    'Psychedelic Sky': requirements['Psychedelic Sky'],
    'Topo Reverb': requirements['Topo Reverb'],
    'Cold Fall': requirements['Cold Fall'],
    'B&W Re-Fuzz': requirements['B&W Re-Fuzz'],

    'Gilded': {
      amount: 2,
      type: 'kills_shortly_after_sprinting_one_life',
    },

    'Forged': {
      amount: 25,
      type: 'ads_moving',
    },

    'Priceless': {
      amount: 25,
      type: 'hipfire_strafing',
    },
  },

  'Holger 26': {
    'Ghastly': requirements['Ghastly'],
    'Cobalt Sands': requirements['Cobalt Sands'],
    'Green Field': requirements['Green Field'],
    'Warbled': requirements['Warbled'],

    'Gilded': {
      amount: 2,
      type: 'kills_shortly_after_sprinting_one_life',
    },

    'Forged': {
      amount: 25,
      type: 'ads_moving',
    },

    'Priceless': {
      amount: 25,
      type: 'hipfire_strafing',
    },
  },

  'Bruen MK9': {
    Dusted: requirements['Dusted'],
    Shuffle: requirements['Shuffle'],
    Drip: requirements['Drip'],
    Gaggle: requirements['Gaggle'],

    Gilded: {
      amount: 2,
      type: 'kills_shortly_after_sprinting_one_life',
    },

    Forged: {
      amount: 20,
      type: 'suppressed_headshots',
    },

    Priceless: {
      amount: 3,
      times: 10,
      type: 'one_mag',
    },
  },

  'TAQ Eradicator': {
    Gilded: {},

    Forged: {},

    Priceless: {},
  },
}
