import assaultRifles from '@/data/requirements/weapons/assaultRifles'
import battleRifles from '@/data/requirements/weapons/battleRifles'
import handguns from '@/data/requirements/weapons/handguns'
import launchers from '@/data/requirements/weapons/launchers'
import lightMachineGuns from '@/data/requirements/weapons/lightMachineGuns'
import marksmanRifles from '@/data/requirements/weapons/marksmanRifles'
import melee from '@/data/requirements/weapons/melee'
import shotguns from '@/data/requirements/weapons/shotguns'
import sniperRifles from '@/data/requirements/weapons/sniperRifles'
import subMachineGuns from '@/data/requirements/weapons/subMachineGuns'

export default {
	...assaultRifles,
	...battleRifles,
	...handguns,
	...launchers,
	...lightMachineGuns,
	...marksmanRifles,
	...melee,
	...shotguns,
	...sniperRifles,
	...subMachineGuns,
}
