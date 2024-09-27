const multiplayer = [
  'Drip', 
  'Gaggle', 
  'Tiger Blood',
  'Whats Your Sign',
  'Sunny Side',
  'Evil Spawn',
  'Donut Worry',
  'Dubs Dubs Dubs',
  'The Last Post',
  'Hit \'OK\'',
]

const zombies = [
  'Avaricious', 
  'Shin Rippers',
  'Anomaly',
  'Necromancy',
  'Tangy Donut',
  'Retrowave',
  'Forum Chaser',
  'Failure To Launch',
]

const camouflages = [...multiplayer, ...zombies].sort((a, b) => a.localeCompare(b))

export default camouflages.map((camouflage) => ({
  category: 'Fun',
  name: camouflage,
  multiplayer: multiplayer.includes(camouflage),
  zombies: zombies.includes(camouflage),
}))
