const multiplayer = ['Occult', 'Psychedelic Loops', 'Psychedelic Pop', 'Psychedelic Sky']

const zombies = ['Mystic Wither', 'Psychedelic Misery', 'Psychedelic Ridge', 'Psychedelic Toxins']

const camouflages = [...multiplayer, ...zombies].sort((a, b) => a.localeCompare(b))

export default camouflages.map((camouflage) => ({
  category: 'Psychedelics',
  name: camouflage,
  multiplayer: multiplayer.includes(camouflage),
  zombies: zombies.includes(camouflage),
}))
