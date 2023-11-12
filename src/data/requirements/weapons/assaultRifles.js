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

  MW3: {
    Gilded: {},
    Forged: {},
    Priceless: {},
  },
}

export default {
  'M4': {
    'Scales': requirements['Scales'],
    'Desert Hybrid': requirements['Desert Hybrid'],
    'Dark Leaves': requirements['Dark Leaves'],
    'New Urban': requirements['New Urban'],
    ...completionistChallenges['MW2'],
  },

  'TAQ-56': {
    'Hidden Snake': requirements['Hidden Snake'],
    'Icepick': requirements['Icepick'],
    'Stonewall Digital': requirements['Stonewall Digital'],
    'Back in Blue': requirements['Back in Blue'],
    ...completionistChallenges['MW2'],
  },

  'Kastov 762': {
    'Urban Foliage': requirements['Urban Foliage'],
    "Rip N' Tear": requirements["Rip N' Tear"],
    'Forest Ice': requirements['Forest Ice'],
    'Red Tiger': requirements['Red Tiger'],
    ...completionistChallenges['MW2'],
  },

  'Lachmann-556': {
    'Marshland': requirements['Marshland'],
    'Pine': requirements['Pine'],
    'Dark Tiger Digital': requirements['Dark Tiger Digital'],
    'Cthulhu': requirements['Cthulhu'],
    ...completionistChallenges['MW2'],
  },

  'STB 556': {
    'Sponge Tac': requirements['Sponge Tac'],
    'Black Top': requirements['Black Top'],
    'Slate': requirements['Slate'],
    'Neon Pink': requirements['Neon Pink'],
    ...completionistChallenges['MW2'],
  },

  'M16': {
    'Modern Woodland': requirements['Modern Woodland'],
    'Marsh Digital': requirements['Marsh Digital'],
    'Dank Forest': requirements['Dank Forest'],
    'Intoxicate': requirements['Intoxicate'],
    ...completionistChallenges['MW2'],
  },

  'Kastov-74U': {
    'Ripple Effect': requirements['Ripple Effect'],
    'Jungle Digital': requirements['Jungle Digital'],
    'Canary Stone': requirements['Canary Stone'],
    'Chemical Reaction': requirements['Chemical Reaction'],
    ...completionistChallenges['MW2'],
  },

  'Kastov 545': {
    'Snowdrift': requirements['Snowdrift'],
    'Mudslide': requirements['Mudslide'],
    'Savannah': requirements['Savannah'],
    'Petri Digital': requirements['Petri Digital'],
    ...completionistChallenges['MW2'],
  },

  'M13B': {
    'Tarnished': requirements['Tarnished'],
    'Field Ops': requirements['Field Ops'],
    'Projectile': requirements['Projectile'],
    'Ice Cave': requirements['Ice Cave'],
    ...completionistChallenges['MW2'],
  },

  'Chimera': {
    'Charcoal': requirements['Charcoal'],
    'Aztec': requirements['Aztec'],
    'Diabolical': requirements['Diabolical'],
    'Snow Leopard': requirements['Snow Leopard'],
    ...completionistChallenges['MW2'],
  },

  'ISO Hemlock': {
    'Gaseous': requirements['Gaseous'],
    'Cloud Hopper': requirements['Cloud Hopper'],
    'Lost Signal': requirements['Lost Signal'],
    'Paths Of Light': requirements['Paths Of Light'],
    ...completionistChallenges['MW2'],
  },

  'Tempus Razorback': {
    'Snake Oil': requirements['Snake Oil'],
    'Dark Croc': requirements['Dark Croc'],
    'Alien Waves': requirements['Alien Waves'],
    'Sky Cover': requirements['Sky Cover'],
    ...completionistChallenges['MW2'],
  },

  'FR Avancer': {
    'Fibrous': requirements['Fibrous'],
    'Scattered Lines': requirements['Scattered Lines'],
    'Bioluminescent': requirements['Bioluminescent'],
    'Postmortem': requirements['Postmortem'],
    ...completionistChallenges['MW2'],
  },

  'M13C': {
    'Cemented': requirements['Cemented'],
    'Poison Rivers': requirements['Poison Rivers'],
    'Demise': requirements['Demise'],
    'Virulent Strain': requirements['Virulent Strain'],
    ...completionistChallenges['MW2'],
  },

  'TR-76 Geist': {
    'Veldt': requirements['Veldt'],
    'Wild Funk': requirements['Wild Funk'],
    'Scratched Up': requirements['Scratched Up'],
    'Light Revisited': requirements['Light Revisited'],
    ...completionistChallenges['MW2'],
  },

  'SVA 545': {
    ...completionistChallenges['MW3'],
  },

  'MTZ-556': {
    ...completionistChallenges['MW3'],
  },

  'Holger 556': {
    ...completionistChallenges['MW3'],
  },

  'MCW': {
    ...completionistChallenges['MW3'],
  },

  'DG-50': {
    ...completionistChallenges['MW3'],
  },

  'FR 5.56': {
    ...completionistChallenges['MW3'],
  },
}
