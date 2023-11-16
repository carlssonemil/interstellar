const multiplayer = [
  'Bone Shaker',
  'Crimson Skulls',
  'Death 3D',
  'Deathparency',
  'Ghastly',
  'Skull-o-Vision',
  'Skullflagration',
  'Skullish',
]

const zombies = [
  'Archfiend',
  'Calamity',
  'Damned Souls',
  'Destiny',
  'Incinerated',
  'Ruination',
  'Thanatos',
  'Vehement Rage',
]

const camouflages = [...multiplayer, ...zombies].sort((a, b) => a.localeCompare(b))

export default camouflages.map((camouflage) => ({
  category: 'Skeletal',
  name: camouflage,
  multiplayer: multiplayer.includes(camouflage),
  zombies: zombies.includes(camouflage),
}))
