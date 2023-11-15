import requirements from '@/data/requirements/camouflages'

export default {
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
