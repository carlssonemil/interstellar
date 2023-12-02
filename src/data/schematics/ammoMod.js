import defaultProgress from '@/data/defaults/progress/schematics'

// The order of the items in this array is the order they will appear in the app
const schematics = [
    {
        name: 'Napalm Burst Ammo Mod',
        rarity: 'rare',
        description: 'Applies Napalm Burst to your currently held weapon.',
        cooldown: '3 hour'
    },
    {
        name: 'Shatter Blast Ammo Mod',
        rarity: 'rare',
        description: 'Applies Shatter Blast to your currently held weapon.',
        cooldown: '3 hour'
    },
    {
        name: 'Brain Rot Ammo Mod',
        rarity: 'rare',
        description: 'Applies Brain Rot to your currently held weapon.',
        cooldown: '3 hour'
    },
    {
        name: 'Cryo Freeze Ammo Mod',
        rarity: 'rare',
        description: 'Applies Cryo Freeze to your currently held weapon.',
        cooldown: '3 hour'
    },
    {
        name: 'Dead Wire Ammo Mod',
        rarity: 'rare',
        description: 'Applies Dead Wire to your currently held weapon.',
        cooldown: '3 hour'
    }
]

export default schematics.map((schematic) => ({
    category: 'Ammo Mod',
    comingSoon: schematic.comingSoon || false,
    acquired: defaultProgress[schematic.name],
    ...schematic
}))
