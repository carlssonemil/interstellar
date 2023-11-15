import requirements from '@/data/requirements/camouflages'

export default {
  'RGL-80': {
    Strain: requirements['Strain'],

    Gilded: {
      amount: 10,
      type: 'direct_impact',
    },

    Forged: {
      amount: 25,
      type: 'destroy_equipment',
    },

    Priceless: {
      amount: 25,
      type: 'double_kills',
    },
  },
}
