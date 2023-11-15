import requirements from '@/data/requirements/camouflages'

export default {
  'Striker': {
    'Ameerga': requirements['Ameerga'],
    'Topo Regal': requirements['Topo Regal'],
    'Absorption': requirements['Absorption'],
    'Viral Invasion': requirements['Viral Invasion'],

    'Gilded': {
      amount: 10,
      type: 'without_damaged',
    },

    'Forged': {
      amount: 3,
      times: 10,
      type: 'one_mag',
    },

    'Priceless': {
      amount: 5,
      times: 10,
      type: 'without_dying',
    },
  },

  'WSP Swarm': {
    'Phantasmal': requirements['Phantasmal'],
    'Granite Pass': requirements['Granite Pass'],
    'Red': requirements['Red'],
    'Fritillary': requirements['Fritillary'],

    'Gilded': {
      amount: 10,
      type: 'without_damaged',
    },

    'Forged': {
      amount: 10,
      type: 'hipfire_enemy_tactical_affected',
    },

    'Priceless': {
      amount: 10,
      type: 'akimbo_double_kills',
    },
  },

  'AMR9': {
    'Dart': requirements['Dart'],
    'Amaranth Sands': requirements['Amaranth Sands'],
    'Microscopic': requirements['Microscopic'],
    'Rainfall Glitch': requirements['Rainfall Glitch'],

    'Gilded': {
      amount: 10,
      type: 'without_damaged',
    },

    'Forged': {
      amount: 10,
      type: 'quickscope',
    },

    'Priceless': {
      amount: 10,
      type: 'outside_line_of_sight',
    },
  },

  'WSP-9': {
    'Golden Poison': requirements['Golden Poison'],
    'Shattered Rock': requirements['Shattered Rock'],
    'Orange': requirements['Orange'],
    'Orange Sulphur': requirements['Orange Sulphur'],

    'Gilded': {
      amount: 10,
      type: 'without_damaged',
    },

    'Forged': {
      amount: 10,
      type: 'magnification_scope',
    },

    'Priceless': {
      amount: 10,
      type: 'suppressed_headshots',
    },
  },

  'Rival-9': {
    'Rock Stone': requirements['Rock Stone'],
    'Rock Glow': requirements['Rock Glow'],
    'Deluge Glitch': requirements['Deluge Glitch'],
    'Bacterial Decay': requirements['Bacterial Decay'],

    'Gilded': {
      amount: 10,
      type: 'without_damaged',
    },

    'Forged': {
      amount: 10,
      type: 'quickscope',
    },

    'Priceless': {
      amount: 10,
      type: 'suppressed_double_kills',
    },
  },

  'Striker 9': {
    'Marbled': requirements['Marbled'],
    'Topo Hardpan': requirements['Topo Hardpan'],
    'Yellow Sands': requirements['Yellow Sands'],
    'Desolate Ops': requirements['Desolate Ops'],

    'Gilded': {
      amount: 10,
      type: 'without_damaged',
    },

    'Forged': {
      amount: 15,
      type: 'longshot',
    },

    'Priceless': {
      amount: 15,
      type: 'headshots_moving',
    },
  },
}
