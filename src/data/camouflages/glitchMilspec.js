const multiplayer = [
  'Alert Glitch',
  'Deluge Glitch',
  'Ember Glitch',
  'Iris Glitch',
  'Oil Slick Glitch',
  'Phantom Glitch',
  'Rainfall Glitch',
  'Scoured',
  'Twilight Glitch',
  'Electro Torrent',
  'Ghostware',
]

const zombies = [
  'Hallowed Glitch',
  'Hallucinate Glitch',
  'Murk Glitch',
  'Pain Glitch',
  'Slash Glitch',
  'Sonic Glitch',
  'Spirit Glitch',
  'Tomb Glitch',
  'Torment Glitch',
]

const camouflages = [...multiplayer, ...zombies].sort((a, b) => a.localeCompare(b))

export default camouflages.map((camouflage) => ({
  category: 'Glitch Milspec',
  name: camouflage,
  multiplayer: multiplayer.includes(camouflage),
  zombies: zombies.includes(camouflage),
}))
