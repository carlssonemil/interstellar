import defaultProgress from '@/data/defaults/progress/schematics'

// The order of the items in this array is the order they will appear in the app
const schematics = [
    {
        name: 'Deadshot Daiquiri Can',
        rarity: 'epic',
        description: 'ADS moves to enemy critical location. Remove scope sway.',
        cooldown: '3 hour'
    },
    {
        name: 'Death Perception Can',
        rarity: 'epic',
        description: 'Obscured enemies, chests, resources, and item drops are keylined.',
        cooldown: '3 hour'
    },
    {
        name: 'PHD Flopper Can',
        rarity: 'epic',
        description: 'Dive to prone triggers an explosion. The explosion increases the higher you fall. Immunity from fall damage while diving.',
        cooldown: '3 hour'
    },
    {
        name: 'Quick Revive Can',
        rarity: 'epic',
        description: 'Reduce the health regen delay time by 50%. Reduce the time it takes to revive an ally by 50%.',
        cooldown: '3 hour'
    },
    {
        name: 'Speed Cola Can',
        rarity: 'epic',
        description: 'Reload and replate amor faster.',
        cooldown: '3 hour'
    },
    {
        name: 'Stamin-Up Can',
        rarity: 'epic',
        description: 'Increase run and sprint speed.',
        cooldown: '3 hour'
    },
    {
        name: 'Elemental Pop Can',
        rarity: 'epic',
        description: 'Every bullet you fire has a small chance to apply a random Ammo Mod effect.',
        cooldown: '3 hour'
    },
    {
        name: 'Jugger-Nog Can',
        rarity: 'epic',
        description: 'Increases max health.',
        cooldown: '3 hour'
    },
    {
        name: 'Tombstone Soda Can',
        rarity: 'epic',
        description: 'On death create a tombstone stash at that location containing your backpack inventory in the next game.',
        cooldown: '3 hour'
    }
]

export default schematics.map((schematic) => ({
    category: 'Perk-A-Cola',
    comingSoon: schematic.comingSoon || false,
    acquired: defaultProgress[schematic.name],
    ...schematic
}))
