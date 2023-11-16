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

    'Serpeninite': {
      amount: 10,
      type: 'special_or_elite_zombie_kills',
    },
  },
}
