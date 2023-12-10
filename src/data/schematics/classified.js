import defaultProgress from '@/data/defaults/progress/schematics'

// The order of the items in this array is the order they will appear in the app
const schematics = [
    {
        name: 'Aether Blade Case',
        rarity: 'ultra',
        description: '-CLASSIFIED- No.200 [ Code: Imbued Blade ]',
        cooldown: '???'
    },
    {
        name: 'Dog Bone',
        rarity: 'legendary',
        description: '-CLASSIFIED- No.332 [ Code: Good Dog ]',
        cooldown: '???'
    },
    {
        name: 'Golden Armor Plate',
        rarity: 'legendary',
        description: '-CLASSIFIED- No.215 [ Code: Gold Armor ]',
        cooldown: '???'
    }
]

export default schematics.map((schematic) => ({
    category: 'Classified',
    comingSoon: schematic.comingSoon || false,
    acquired: defaultProgress[schematic.name],
    ...schematic
}))
