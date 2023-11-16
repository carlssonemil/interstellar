const multiplayer = [
  'Absorption',
  'Abyssal Fox',
  'Art Glass',
  'Clouded Mind',
  'Corrugated',
  'Creeplines',
  'Descent',
  'Insectoid',
  'Mind Test',
  'Pabels',
  'Upward Reverb',
]

const zombies = [
  'Apocalyptic',
  'Crystal Palace',
  'Dimensional Shift',
  'Grim Reaper',
  'Hysteria',
  'Inner Demon',
  'Magma Beast',
  'Melting Hope',
  'Oxidized',
  'Tempest Shards',
  'Unyielding',
]

const camouflages = [...multiplayer, ...zombies].sort((a, b) => a.localeCompare(b))

export default camouflages.map((camouflage) => ({
  category: 'Perfect Symmetry',
  name: camouflage,
  multiplayer: multiplayer.includes(camouflage),
  zombies: zombies.includes(camouflage),
}))
