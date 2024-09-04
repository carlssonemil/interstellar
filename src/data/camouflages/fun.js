const multiplayer = [
  'Drip', 
  'Gaggle', 
  'Tiger Blood',
  'Whats Your Sign',
  'Sunny Side',
  'Evil Spawn',
  'The Last Post',
  'Donut Worry',
]

const zombies = [
  'Avaricious', 
  'Shin Rippers',
  'Anomaly',
  'Necromancy',
  'Forum Chaser',
  'Tangy Donut',
]

const camouflages = [...multiplayer, ...zombies].sort((a, b) => a.localeCompare(b))

export default camouflages.map((camouflage) => ({
  category: 'Fun',
  name: camouflage,
  multiplayer: multiplayer.includes(camouflage),
  zombies: zombies.includes(camouflage),
}))
