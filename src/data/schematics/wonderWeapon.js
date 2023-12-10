import defaultProgress from '@/data/defaults/progress/schematics'

// The order of the items in this array is the order they will appear in the app
const schematics = [
    {
        name: 'Ray Gun',
        rarity: 'ultra',
        description: 'Ray Gun Weapon Case that can be opened to equip the Ray Gun Wonder Weapon.',
        cooldown: '48 hour'
    },
    {
        name: 'The Scorcher',
        rarity: 'ultra',
        description: 'Scorcher Weapon Case that can be opened to equip the Scorcher Wonder Weapon.',
        cooldown: '48 hour'
    },
    {
        name: 'Wunderwaffe DG-2',
        rarity: 'ultra',
        description: 'Wunderwaffe DG-2 Weapon Case that can be opened to equip the Wunderwaffe DG-2 Wonder Weapon.',
        cooldown: '48 hour'
    }
]

export default schematics.map((schematic) => ({
    category: 'Wonder Weapon',
    comingSoon: schematic.comingSoon || false,
    acquired: defaultProgress[schematic.name],
    ...schematic
}))
