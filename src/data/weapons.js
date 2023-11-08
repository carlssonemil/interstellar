import assaultRifles from '@/data/weapons/assaultRifles'
import battleRifles from '@/data/weapons/battleRifles'
import subMachineGuns from '@/data/weapons/subMachineGuns'
import shotguns from '@/data/weapons/shotguns'
import lightMachineGuns from '@/data/weapons/lightMachineGuns'
import marksman from '@/data/weapons/marksmanRifles'
import sniperRifles from '@/data/weapons/sniperRifles'
import handguns from '@/data/weapons/handguns'
import launchers from '@/data/weapons/launchers'
import melee from '@/data/weapons/melee'

// The order of this array determines the order of the weapon categories
export default [
	...assaultRifles,
	...battleRifles,
	...subMachineGuns,
	...shotguns,
	...lightMachineGuns,
	...marksman,
	...sniperRifles,
	...handguns,
	...launchers,
	...melee,
]
