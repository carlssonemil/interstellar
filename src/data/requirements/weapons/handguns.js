import requirements from '@/data/requirements/camouflages'

export default {
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
