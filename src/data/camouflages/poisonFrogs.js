const multiplayer = [
  'Ameerga', 'Dart',
  'Golden Poison',
  'Marbled',
  'Phantasmal',
  'Rock Stone',
  'Popping Out',
  'Delighted Liquification',
  'Wild Lines And Wild Times',
  'Hey, Boo!',
  'Illusive Neon',
  'And Then They All Fell Out...',
  'Lambent Streaks',
  'Filed And Buffed',
]

const zombies = [
  'Dire',
  'Disoriented',
  'Fading Breath',
  'Familiar',
  'Nocuous',
  'Perilous',
  'Raising The Bar',
  'Molten Blue',
  'Viscose Violence',
  'Ghosted',
  'Optically Elusive',
  'Healthy Appetite',
  'Do The Wave',
  'Primed And Polished',
]

const camouflages = [...multiplayer, ...zombies].sort((a, b) => a.localeCompare(b))

export default camouflages.map((camouflage) => ({
  category: 'Poison Frogs',
  name: camouflage,
  multiplayer: multiplayer.includes(camouflage),
  zombies: zombies.includes(camouflage),
}))
