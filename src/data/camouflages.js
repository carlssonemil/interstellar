import classic from '@/data/camouflages/classic'
import cliffside from '@/data/camouflages/cliffside'
import digital from '@/data/camouflages/digital'
import dragon from '@/data/camouflages/dragon'
import foliage from '@/data/camouflages/foliage'
import fun from '@/data/camouflages/fun'
import geometric from '@/data/camouflages/geometric'
import reptile from '@/data/camouflages/reptile'
import skulls from '@/data/camouflages/skulls'
import solidColors from '@/data/camouflages/solidColors'
import sprayPaint from '@/data/camouflages/sprayPaint'
import stripes from '@/data/camouflages/stripes'
import tiger from '@/data/camouflages/tiger'
import woodland from '@/data/camouflages/woodland'

// The order of this array determines the order of the camouflage categories
export default [
	...sprayPaint,
	...woodland,
	...digital,
	...dragon,
	...geometric,
	...fun,
	...foliage,
	...skulls,
	...tiger,
	...stripes,
	...reptile,
	...solidColors,
	...classic,
	...cliffside,
]
