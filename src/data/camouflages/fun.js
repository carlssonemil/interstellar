const multiplayer = [
  'Drip', 
  'Gaggle', 
  'Tiger Blood',
  'Whats Your Sign',
]

const zombies = [
  'Avaricious', 
  'Shin Rippers',
  'Necromancy',
]

const camouflages = [...multiplayer, ...zombies].sort((a, b) => a.localeCompare(b))

export default camouflages.map((camouflage) => ({
  category: 'Fun',
  name: camouflage,
  multiplayer: multiplayer.includes(camouflage),
  zombies: zombies.includes(camouflage),
}))
