import requirements from '@/data/requirements/camouflages'

export default {
  'RGL-80': {
    // Multiplayer
    'Strain': requirements['Strain'],

    // Zombies
    'Pathosis': requirements['Pathosis'],

    'Gilded': {
      amount: 10,
      type: 'direct_impact_kills',
    },

    'Forged': {
      amount: 25,
      type: 'destroy_equipment',
    },

    'Priceless': {
      amount: 25,
      type: 'double_kills',
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

  'Stormender': {
    // Multiplayer
    'Spectral Overload': requirements['Spectral Overload'],

    // Zombies
    'Deformed': requirements['Deformed'],

    'Gilded': {
      amount: 10,
      type: 'destroy_streaks',
    },

    'Forged': {
      amount: 25,
      type: 'destroy_streaks_equipment_or_vehicles',
    },

    'Priceless': {
      amount: 25,
      type: 'affect_with_emp',
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

  'Torque 35': {
    // Multiplayer
    'The Last Post': requirements['The Last Post'],

    // Zombies
    'Forum Chaser': requirements['Forum Chaser'],

    'Gilded': {
      amount: 50,
      type: 'hipfire_kills',
    },

    'Forged': {
      amount: 25,
      type: 'one_shot_kills',
    },

    'Priceless': {
      amount: 2,
      seconds: 10,
      times: 10,
      type: 'time_limit_kills',
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
