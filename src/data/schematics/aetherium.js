import defaultProgress from '@/data/defaults/progress/schematics'

// The order of the items in this array is the order they will appear in the app
const schematics = [
    {
        name: 'Uncommon Aether Tool',
        rarity: 'uncommon',
        description: 'Upgrades currently held weapon to Uncommon Rarity.',
        cooldown: '2 hour'
    },
    {
        name: 'Rare Aether Tool',
        rarity: 'rare',
        description: 'Upgrades currently held weapon to Rare Rarity.',
        cooldown: '5 hour'
    },
    {
        name: 'Raw Aetherium Crystal',
        rarity: 'epic',
        description: 'Pack-A-Punches currently held weapon to Level I.',
        cooldown: '8 hour'
    },
    {
        name: 'Epic Aether Tool',
        rarity: 'epic',
        description: 'Upgrades currently held weapon to Epic Rarity.',
        cooldown: '8 hour'
    },
    {
        name: 'Legendary Aether Tool',
        rarity: 'legendary',
        description: 'Upgrades currently held weapon to Legendary Rarity.',
        cooldown: '8 hour'
    },
    {
        name: 'Refined Aetherium Crystal',
        rarity: 'legendary',
        description: 'Pack-A-Punches currently held weapon to Level II.',
        cooldown: '8 hour'
    },
    {
        name: 'Flawless Aetherium Crystal',
        rarity: 'ultra',
        description: 'Pack-A-Punches currently held weapon to Level III.',
        cooldown: '8 hour'
    }
]

export default schematics.map((schematic) => ({
    category: 'Aetherium',
    comingSoon: schematic.comingSoon || false,
    acquired: defaultProgress[schematic.name],
    ...schematic
}))
