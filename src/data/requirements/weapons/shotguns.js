import requirements from '@/data/requirements/camouflages'

export default {
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
