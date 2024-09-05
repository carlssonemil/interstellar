import requirements from '@/data/requirements/camouflages'

export default {
  'Reclaimer 18': {
    // Multiplayer
    'Bugged Out': requirements['Bugged Out'],
    'He\'s Looking At You': requirements['He\'s Looking At You'],
    'Azure Refract': requirements['Azure Refract'],
    'Donut Worry': requirements['Donut Worry'],

    // Zombies
    'Dead Creeper': requirements['Dead Creeper'],
    'Evil-Eye-Ris': requirements['Evil-Eye-Ris'],
    'Crystalized': requirements['Crystalized'],
    'Tangy Donut': requirements['Tangy Donut'],

    'Gilded': {
      amount: 2,
      times: 10,
      type: 'kills_shortly_after_sprinting_one_life',
    },

    'Forged': {
      amount: 2,
      seconds: 10,
      times: 15,
      type: 'time_limit_kills',
    },

    'Priceless': {
      amount: 10,
      type: 'hipfire_kills_while_strafing',
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

  'Lockwood 680': {
    // Multiplayer
    'Blue Sands': requirements['Blue Sands'],
    'Palette Navy': requirements['Palette Navy'],
    'Descent': requirements['Descent'],
    'Overwhelmed': requirements['Overwhelmed'],

    // Zombies
    'Dark Sands': requirements['Dark Sands'],
    'Palette Rage': requirements['Palette Rage'],
    'Magma Beast': requirements['Magma Beast'],
    'Riddled': requirements['Riddled'],

    'Gilded': {
      amount: 2,
      times: 10,
      type: 'kills_shortly_after_sprinting_one_life',
    },

    'Forged': {
      amount: 25,
      type: 'one_shot_kills_while_ads',
    },

    'Priceless': {
      amount: 5,
      type: 'hipfire_kills_while_moving',
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

  'Haymaker': {
    // Multiplayer
    'Pink Sands': requirements['Pink Sands'],
    'Guts': requirements['Guts'],
    'Palette Tropics': requirements['Palette Tropics'],
    'Smooth Satin': requirements['Smooth Satin'],

    // Zombies
    'Burnt Sands': requirements['Burnt Sands'],
    'Below Zero': requirements['Below Zero'],
    'Palette Buried': requirements['Palette Buried'],
    'Inkblot': requirements['Inkblot'],

    'Gilded': {
      amount: 2,
      times: 10,
      type: 'kills_shortly_after_sprinting_one_life',
    },

    'Forged': {
      amount: 3,
      times: 15,
      type: 'hipfire_kills_with_one_mag',
    },

    'Priceless': {
      amount: 10,
      type: 'double_kills_while_in_tac_stance',
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

  'Riveter': {
    // Multiplayer
    'Purple Sands': requirements['Purple Sands'],
    '80s Spheres': requirements['80s Spheres'],
    'Palette Grasses': requirements['Palette Grasses'],
    'Upward Reverb': requirements['Upward Reverb'],

    // Zombies
    'Marrow Sands': requirements['Marrow Sands'],
    'Global Panic': requirements['Global Panic'],
    'Palette Infected': requirements['Palette Infected'],
    'Melting Hope': requirements['Melting Hope'],

    'Gilded': {
      amount: 2,
      times: 10,
      type: 'kills_shortly_after_sprinting_one_life',
    },

    'Forged': {
      amount: 25,
      type: 'multikills',
    },

    'Priceless': {
      amount: 5,
      times: 5,
      type: 'kills_without_dying',
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
