import requirements from '@/data/requirements/camouflages'

export default {
  'Gutter Knife': {
    // Multiplayer
    'Sea Green Sands': requirements['Sea Green Sands'],

    // Zombies
    'Foam Sands': requirements['Foam Sands'],

    'Gilded': {
      amount: 10,
      type: 'kills_while_enemy_affected_by_tactical',
    },

    'Forged': {
      amount: 5,
      times: 5,
      type: 'kills_without_dying',
    },

    'Priceless': {
      amount: 15,
      type: 'revenge_kills',
    },

    'Golden Enigma': {
      amount: 100,
      type: 'kills_and_successfully_extract_in_a_single_deployment',
    },

    'Zircon Scale': {
      amount: 300,
      type: 'pack_a_punched_kills',
    },

    'Serpentinite': {
      amount: 10,
      type: 'special_or_elite_zombie_kills',
    },
  },

  'Karambit': {
    // Multiplayer
    'Dark Vision': requirements['Dark Vision'],

    // Zombies
    'Ripped': requirements['Ripped'],

    'Gilded': {
      amount: 10,
      type: 'kills_while_enemy_affected_by_tactical',
    },

    'Forged': {
      amount: 20,
      type: 'kills_without_damaged',
    },

    'Priceless': {
      amount: 10,
      type: 'kills_from_behind',
    },

    'Golden Enigma': {
      amount: 100,
      type: 'kills_and_successfully_extract_in_a_single_deployment',
    },

    'Zircon Scale': {
      amount: 300,
      type: 'pack_a_punched_kills',
    },

    'Serpentinite': {
      amount: 10,
      type: 'special_or_elite_zombie_kills',
    },
  },
}
