import requirements from '@/data/requirements/camouflages'

export default {
  'BAS-B': {
    'Sunset Blur': requirements['Sunset Blur'],
    'Phantom Glitch': requirements['Phantom Glitch'],
    'Orange Sands': requirements['Orange Sands'],
    'White Satin': requirements['White Satin'],

    'Gilded': {
      amount: 3,
      times: 10,
      type: 'one_mag',
    },

    'Forged': {
      amount: 10,
      type: 'multikills',
    },

    'Priceless': {
      amount: 25,
      type: 'suppressed_clean_kills',
    },
  },

  'Sidewinder': {
    'Solar Flare': requirements['Solar Flare'],
    'Sandzone': requirements['Sandzone'],
    'Mind Peak': requirements['Mind Peak'],
    'Purple Satin': requirements['Purple Satin'],

    'Gilded': {
      amount: 3,
      times: 10,
      type: 'one_mag',
    },

    'Forged': {
      amount: 10,
      type: 'one_shot',
    },

    'Priceless': {
      amount: 25,
      type: 'longshot',
    },
  },

  'MTZ-762': {
    'Aquatic Blur': requirements['Aquatic Blur'],
    'Topo Caustic': requirements['Topo Caustic'],
    'Heatwave': requirements['Heatwave'],
    'Blue Satin': requirements['Blue Satin'],

    'Gilded': {
      amount: 3,
      times: 10,
      type: 'one_mag',
    },

    'Forged': {
      amount: 25,
      type: 'ads_fully_loaded',
    },

    'Priceless': {
      amount: 15,
      type: 'semi_auto_headshots_magnification_scope',
    },
  },
}
