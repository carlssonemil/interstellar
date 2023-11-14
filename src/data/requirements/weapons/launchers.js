import requirements from '@/data/requirements/camouflages'

const completionistChallenges = {
  MW2: {
    Gold: {
      amount: 2,
      type: 'without_dying',
      times: 5,
    },
    Platinum: {
      amount: 10,
      type: 'destroy_streaks_equipment_or_vehicles',
    },
    Polyatomic: {
      amount: 15,
      type: 'double',
    },
  },
}

export default {
  'PILA': {
    'Dead Leaves': requirements['Dead Leaves'],
    ...completionistChallenges['MW2'],
    'Platinum': {
      amount: 15,
      type: 'destroy_streaks_equipment_or_vehicles',
    },
  },

  'STRELA-P': {
    'Deep Jungle': requirements['Deep Jungle'],
    ...completionistChallenges['MW2'],
    'Platinum': {
      amount: 25,
      type: 'destroy_streaks_equipment_or_vehicles',
    },
  },

  'JOKR': {
    'Azure Fray': requirements['Azure Fray'],
    ...completionistChallenges['MW2'],
    'Gold': {
      amount: 2,
      type: 'without_dying',
      times: 10,
    },
  },

  'RPG-7': {
    'Jungle Digital (RPG)': requirements['Jungle Digital (RPG)'],
    ...completionistChallenges['MW2'],
  },

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
