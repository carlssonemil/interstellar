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
      amount: 25,
      type: 'headshot',
    },
  },
}

export default {
  'Lachmann-762': {
    'Day Marsh': requirements['Day Marsh'],
    'Desert Oil Digital': requirements['Desert Oil Digital'],
    'Stalking Cat': requirements['Stalking Cat'],
    'Internal Flame': requirements['Internal Flame'],
    ...completionistChallenges['MW2'],
  },

  'SO-14': {
    'Dune Stalker': requirements['Dune Stalker'],
    'Reptilian': requirements['Reptilian'],
    'Heavy Commando': requirements['Heavy Commando'],
    'Tendrils': requirements['Tendrils'],
    ...completionistChallenges['MW2'],
  },

  'TAQ-V': {
    'Dune Sea': requirements['Dune Sea'],
    'Faded Veil': requirements['Faded Veil'],
    'Anaconda': requirements['Anaconda'],
    'Slime Time': requirements['Slime Time'],
    ...completionistChallenges['MW2'],
  },

  'FTAC Recon': {
    'Beached': requirements['Beached'],
    'Torn Scales': requirements['Torn Scales'],
    'Desert Cat': requirements['Desert Cat'],
    'Haunting': requirements['Haunting'],
    ...completionistChallenges['MW2'],
  },

  'Cronen Squall': {
    'Vapor Storm': requirements['Vapor Storm'],
    'Ghastly Green': requirements['Ghastly Green'],
    'Stone Ridge': requirements['Stone Ridge'],
    'Intergalactic': requirements['Intergalactic'],
    ...completionistChallenges['MW2'],
  },

  'BAS-B': {
    'Sunset Blur': requirements['Sunset Blur'],
    'Phantom Glitch': requirements['Phantom Glitch'],
    'Orange Sands': requirements['Orange Sands'],
    'White Satin': requirements['White Satin'],

    'Gilded': {
      amount: 3,
      times: 10,
      type: 'one_mag',
    },

    'Forged': {
      amount: 10,
      type: 'multikills',
    },

    'Priceless': {
      amount: 25,
      type: 'suppressed_clean_kills',
    },
  },

  'Sidewinder': {
    'Solar Flare': requirements['Solar Flare'],
    'Sandzone': requirements['Sandzone'],
    'Mind Peak': requirements['Mind Peak'],
    'Purple Satin': requirements['Purple Satin'],

    'Gilded': {
      amount: 3,
      times: 10,
      type: 'one_mag',
    },

    'Forged': {
      amount: 10,
      type: 'one_shot',
    },

    'Priceless': {
      amount: 25,
      type: 'longshot',
    },
  },

  'MTZ-762': {
    'Aquatic Blur': requirements['Aquatic Blur'],
    'Topo Caustic': requirements['Topo Caustic'],
    'Heatwave': requirements['Heatwave'],
    'Blue Satin': requirements['Blue Satin'],

    'Gilded': {
      amount: 3,
      times: 10,
      type: 'one_mag',
    },

    'Forged': {
      amount: 25,
      type: 'ads_fully_loaded',
    },

    'Priceless': {
      amount: 15,
      type: 'semi_auto_headshots_magnification_scope',
    },
  },
}
