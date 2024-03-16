const multiplayer = ['Orange', 'Purple', 'Red', 'Pink']

const zombies = ['Mud', 'Oracle', 'Terracotta', 'Desolation']

const camouflages = [...multiplayer, ...zombies].sort((a, b) => a.localeCompare(b))

export default camouflages.map((camouflage) => ({
  category: 'Bold',
  name: camouflage,
  multiplayer: multiplayer.includes(camouflage),
  zombies: zombies.includes(camouflage),
}))
