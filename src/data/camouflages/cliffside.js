const multiplayer = [
    'Desert Veil',
  ]
  
  const zombies = [
    'Crypt',
  ]
  
  const camouflages = [...multiplayer, ...zombies].sort((a, b) => a.localeCompare(b))
  
  export default camouflages.map((camouflage) => ({
    category: 'Cliffside',
    name: camouflage,
    multiplayer: multiplayer.includes(camouflage),
    zombies: zombies.includes(camouflage),
  }))
  