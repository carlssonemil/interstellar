const multiplayer = []

const zombies = ['Unseen Ravager', 'Anomaly']

const camouflages = [...multiplayer, ...zombies].sort((a, b) => a.localeCompare(b))

export default camouflages.length > 0
  ? camouflages.map((camouflage) => ({
      category: 'Uncategorized',
      name: camouflage,
      multiplayer: multiplayer.includes(camouflage),
      zombies: zombies.includes(camouflage),
    }))
  : undefined
