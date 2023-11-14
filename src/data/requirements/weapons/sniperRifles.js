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
      amount: 20,
      type: 'headshot',
    },
  },
}

export default {
  'MCPR-300': {
    'Clay': requirements['Clay'],
    'Snow Grass': requirements['Snow Grass'],
    'Neon Shards': requirements['Neon Shards'],
    'Bloodied': requirements['Bloodied'],
    ...completionistChallenges['MW2'],

    'Platinum': {
      amount: 20,
      type: 'longshot',
    },
  },

  'Signal 50': {
    Gladiator: requirements['Gladiator'],
    Unearthed: requirements['Unearthed'],
    Earthbound: requirements['Earthbound'],
    Spectrums: requirements['Spectrums'],
    ...completionistChallenges['MW2'],

    Platinum: {
      amount: 20,
      type: 'longshot',
    },
  },

  'LA-B 330': {
    'Shark Net': requirements['Shark Net'],
    'Dirt': requirements['Dirt'],
    'Leafless': requirements['Leafless'],
    'Teal Tiger': requirements['Teal Tiger'],
    ...completionistChallenges['MW2'],

    'Polyatomic': {
      amount: 25,
      type: 'headshot',
    },
  },

  'SP-X 80': {
    'Scratch': requirements['Scratch'],
    'Dry Field': requirements['Dry Field'],
    'Aspen': requirements['Aspen'],
    'Lichyard': requirements['Lichyard'],
    ...completionistChallenges['MW2'],

    'Polyatomic': {
      amount: 25,
      type: 'headshot',
    },
  },

  'Victus XMR': {
    'Snowy Nights': requirements['Snowy Nights'],
    'Burned Edges': requirements['Burned Edges'],
    'Tangographical': requirements['Tangographical'],
    'Coral Reef': requirements['Coral Reef'],
    ...completionistChallenges['MW2'],

    'Polyatomic': {
      amount: 25,
      type: 'headshot',
    },
  },

  'FJX Imperium': {
    'Arctic Growth': requirements['Arctic Growth'],
    'Styx': requirements['Styx'],
    'Psychoactive': requirements['Psychoactive'],
    'Bedlam': requirements['Bedlam'],
    ...completionistChallenges['MW2'],

    'Polyatomic': {
      amount: 25,
      type: 'headshot',
    },
  },

  'Carrack .300': {
    'Birch': requirements['Birch'],
    'Cloud Static': requirements['Cloud Static'],
    'Blood and Mud': requirements['Blood and Mud'],
    'Lumber Tactical': requirements['Lumber Tactical'],
    ...completionistChallenges['MW2'],

    'Polyatomic': {
      amount: 25,
      type: 'headshot',
    },
  },

  'KATT-AMR': {
    'Death 3D': requirements['Death 3D'],
    'Topo Boulder (KATT-AMR)': requirements['Topo Boulder (KATT-AMR)'],
    'Palette Neapolitan': requirements['Palette Neapolitan'],
    'Art Glass': requirements['Art Glass'],

    'Gilded': {
      amount: 10,
      type: 'laser_attachment',
    },

    'Forged': {
      amount: 25,
      type: 'penetration',
    },

    'Priceless': {
      amount: 3,
      type: 'suppressed_headshots',
    },
  },

  'Longbow': {
    'Crimson Skulls': requirements['Crimson Skulls'],
    'Topo Arid': requirements['Topo Arid'],
    'Palette Sunrise': requirements['Palette Sunrise'],
    'Rippled': requirements['Rippled'],

    'Gilded': {
      amount: 10,
      type: 'laser_attachment',
    },

    'Forged': {
      amount: 3,
      times: 10,
      type: 'one_mag',
    },

    'Priceless': {
      amount: 15,
      type: 'one_shot',
    },
  },

  'KV Inhibitor': {
    'Deathparency': requirements['Deathparency'],
    'Tactical Colors': requirements['Tactical Colors'],
    'Palette Dusk': requirements['Palette Dusk'],
    'Puzzling Tiles': requirements['Puzzling Tiles'],

    'Gilded': {
      amount: 10,
      type: 'laser_attachment',
    },

    'Forged': {
      amount: 25,
      type: 'headshots',
    },

    'Priceless': {
      amount: 5,
      type: 'headshots_moving',
    },
  },
}
