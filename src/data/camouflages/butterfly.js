const multiplayer = [
  'Imago',
  'Fritillary',
  'Menelaus Blue',
  'Monarch',
  'Oakleaf',
  'Orange Sulphur',
  'Red Admiral',
  'Dopamine',
]

const zombies = [
  'Chaos',
  'Death Form',
  'Decrepit',
  'Grief Manifest',
  'Petrified',
  'Putrid Locust',
  'Toxic Spots',
  'Venom Prism',
]

const camouflages = [...multiplayer, ...zombies].sort((a, b) => a.localeCompare(b))

export default camouflages.map((camouflage) => ({
  category: 'Butterfly',
  name: camouflage,
}))
