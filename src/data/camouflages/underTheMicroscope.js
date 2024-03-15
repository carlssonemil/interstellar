const multiplayer = [
  'Bacterial Decay',
  'Cold Snap',
  'Deadly Spores',
  'Germ Factory',
  'Microbiology',
  'Microscopic',
  'Overwhelmed',
  'Red Cells',
  'Spreading',
  'Strain',
  'Viral Invasion',
  'Viral',
  'Firmicutes',
]

const zombies = [
  'Black Plague',
  'Ferver',
  'Hemoglobin',
  'Incurable',
  'Living Tissue',
  'New Strain',
  'Pathosis',
  'Pestilence',
  'Riddled',
  'Symptomatic',
  'Microbial',
]

const camouflages = [...multiplayer, ...zombies].sort((a, b) => a.localeCompare(b))

export default camouflages.map((camouflage) => ({
  category: 'Under the Microscope',
  name: camouflage,
  multiplayer: multiplayer.includes(camouflage),
  zombies: zombies.includes(camouflage),
}))
