import requirements from '@/data/requirements/camouflages'

export default {
  'KATT-AMR': {
    'Death 3D': requirements['Death 3D'],
    'Topo Boulder': requirements['Topo Boulder'],
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
      type: 'headshot',
    },

    'Priceless': {
      amount: 5,
      type: 'headshots_moving',
    },
  },
}
