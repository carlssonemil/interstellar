const multiplayer = [
  'Palette Dusk',
  'Palette Garden',
  'Palette Grasses',
  'Palette Navy',
  'Palette Neapolitan',
  'Palette Rosemary',
  'Palette Sands',
  'Palette Storm',
  'Palette Sunrise',
  'Palette Tropics',
  'Palette Twilight',
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
  'Palette Scorched',
  'Palette Shade',
  'Palette Sickly',
]

const camouflages = [...multiplayer, ...zombies].sort((a, b) => a.localeCompare(b))

export default camouflages.map((camouflage) => ({
  category: 'Neapolitan',
  name: camouflage,
  multiplayer: multiplayer.includes(camouflage),
  zombies: zombies.includes(camouflage),
}))
