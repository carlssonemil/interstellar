const multiplayer = [
  'Drip', 
  'Gaggle', 
  'Tiger Blood',
  'Whats Your Sign',
  'Sunny Side',
  'Evil Spawn',
  'Donut Worry',
  'Dubs Dubs Dubs',
]

const zombies = [
  'Avaricious', 
  'Shin Rippers',
  'Necromancy',
  'Tangy Donut',
  'Retrowave',
]

const camouflages = [...multiplayer, ...zombies].sort((a, b) => a.localeCompare(b))

export default camouflages.map((camouflage) => ({
  category: 'Fun',
  name: camouflage,
  multiplayer: multiplayer.includes(camouflage),
  zombies: zombies.includes(camouflage),
}))
