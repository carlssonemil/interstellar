import requirements from '@/data/requirements/camouflages'

export default {
  'BAS-B': {
    // Multiplayer
    'Sunset Blur': requirements['Sunset Blur'],
    'Phantom Glitch': requirements['Phantom Glitch'],
    'Orange Sands': requirements['Orange Sands'],
    'White Satin': requirements['White Satin'],

    // Zombies
    'Reality Blur': requirements['Reality Blur'],
    'Spirit Glitch': requirements['Spirit Glitch'],
    'Forest Sands': requirements['Forest Sands'],
    'Black Satin': requirements['Black Satin'],

    'Gilded': {
      amount: 3,
      times: 10,
      type: 'kills_with_one_mag',
    },

    'Forged': {
      amount: 10,
      type: 'multikills',
    },

    'Priceless': {
      amount: 25,
      type: 'suppressed_clean_kills',
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

  'Sidewinder': {
    // Multiplayer
    'Solar Flare': requirements['Solar Flare'],
    'Sandzone': requirements['Sandzone'],
    'Mind Peak': requirements['Mind Peak'],
    'Purple Satin': requirements['Purple Satin'],

    // Zombies
    'Mutated Flare': requirements['Mutated Flare'],
    'Tide Surge': requirements['Tide Surge'],
    'Cacophony': requirements['Cacophony'],
    'Green Satin': requirements['Green Satin'],

    'Gilded': {
      amount: 3,
      times: 10,
      type: 'kills_with_one_mag',
    },

    'Forged': {
      amount: 25,
      type: 'one_shot_kills',
    },

    'Priceless': {
      amount: 25,
      type: 'longshot_kills',
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

  'MTZ-762': {
    // Multiplayer
    'Aquatic Blur': requirements['Aquatic Blur'],
    'Topo Caustic': requirements['Topo Caustic'],
    'Heatwave': requirements['Heatwave'],
    'Blue Satin': requirements['Blue Satin'],

    // Zombies
    'Firestorm Blur': requirements['Firestorm Blur'],
    'Topo Sickly': requirements['Topo Sickly'],
    'Alert': requirements['Alert'],
    'Orange Satin': requirements['Orange Satin'],

    'Gilded': {
      amount: 3,
      times: 10,
      type: 'kills_with_one_mag',
    },

    'Forged': {
      amount: 25,
      type: 'kills_while_ads_and_fully_loaded',
    },

    'Priceless': {
      amount: 15,
      type: 'semi_auto_headshots_with_magnification_scope',
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
