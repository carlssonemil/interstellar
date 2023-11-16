const multiplayer = [
  'Palette Dusk',
  'Palette Garden',
  'Palette Grasses',
  'Palette Navy',
  'Palette Neapolitan',
  'Palette Rosemary',
  'Palette Sunrise',
  'Palette Tropics',
]

const zombies = [
  'Palette Adjudicator',
  'Palette Buried',
  'Palette Corpse',
  'Palette Cursed',
  'Palette Cyst',
  'Palette Grove',
  'Palette Infected',
  'Palette Rage',
]

const camouflages = [...multiplayer, ...zombies].sort((a, b) => a.localeCompare(b))

export default camouflages.map((camouflage) => ({
  category: 'Neapolitan',
  name: camouflage,
  multiplayer: multiplayer.includes(camouflage),
  zombies: zombies.includes(camouflage),
}))
