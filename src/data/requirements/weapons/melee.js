import requirements from '@/data/requirements/camouflages'

export default {
  'Combat Knife': {
    Scarlet: requirements['Scarlet'],

    Gold: {
      amount: 2,
      type: 'without_dying',
      times: 10,
    },

    Platinum: {
      amount: 2,
      type: 'time_limit',
      seconds: 10,
      times: 10,
    },

    Polyatomic: {
      amount: 20,
      type: 'behind',
    },
  },

  'Riot Shield': {
    'Urban Zebra': requirements['Urban Zebra'],

    'Gold': {
      amount: 2,
      type: 'without_dying',
      times: 10,
    },

    'Platinum': {
      amount: 2,
      type: 'time_limit',
      seconds: 10,
      times: 10,
    },

    'Polyatomic': {
      amount: 10,
      type: 'behind',
    },
  },

  'Dual Kodachis': {
    'Rush Hour': requirements['Rush Hour'],

    'Gold': {
      amount: 2,
      type: 'without_dying',
      times: 10,
    },

    'Platinum': {
      amount: 2,
      type: 'time_limit',
      seconds: 10,
      times: 10,
    },

    'Polyatomic': {
      amount: 20,
      type: 'behind',
    },
  },

  'Tonfa': {
    Oxidation: requirements['Oxidation'],

    Gold: {
      amount: 2,
      type: 'without_dying',
      times: 10,
    },

    Platinum: {
      amount: 2,
      type: 'time_limit',
      seconds: 10,
      times: 15,
    },

    Polyatomic: {
      amount: 20,
      type: 'behind',
    },
  },

  'Pickaxe': {
    'Zany Zebra': requirements['Zany Zebra'],

    'Gold': {
      amount: 2,
      type: 'without_dying',
      times: 10,
    },

    'Platinum': {
      amount: 2,
      type: 'time_limit',
      seconds: 10,
      times: 15,
    },

    'Polyatomic': {
      amount: 20,
      type: 'behind',
    },
  },

  'Dual Kamas': {
    'Cyber Plateau': requirements['Cyber Plateau'],

    'Gold': {
      amount: 2,
      type: 'without_dying',
      times: 10,
    },

    'Platinum': {
      amount: 2,
      type: 'time_limit',
      seconds: 10,
      times: 15,
    },

    'Polyatomic': {
      amount: 20,
      type: 'behind',
    },
  },

  'Gutter Knife': {
    'Sea Green Sands': requirements['Sea Green Sands'],

    'Gilded': {
      amount: 10,
      type: 'enemy_tactical_affected',
    },

    'Forged': {
      amount: 5,
      times: 5,
      type: 'without_dying',
    },

    'Priceless': {
      amount: 25,
      type: 'revenge',
    },
  },

  'Karambit': {
    'Dark Vision': requirements['Dark Vision'],

    'Gilded': {
      amount: 10,
      type: 'enemy_tactical_affected',
    },

    'Forged': {
      amount: 20,
      type: 'without_damaged',
    },

    'Priceless': {
      amount: 10,
      type: 'behind',
    },
  },
}
