<template>
	<div class="container">
		<Alert style="margin-top: 30px">
			Hello grinders! I'm currently in the process of building this new tracker for Modern Warfare
			3. As the game is not released yet and information is still emerging, I appreciate your
			patience as we gather all the necessary details.<br />

			<br />

			Want to contribute or join the discussion? Head over to our
			<a href="https://github.com/carlssonemil/interstellar/discussions/landing" target="_blank"
				>GitHub discussions</a
			>
			and lend a hand or share your insights!<br />

			<br />

			Thank you for your understanding and support. Stay tuned for more updates! ❤️
		</Alert>

		<Weapons :weapons="filteredWeapons" :favorites="favorites" />
	</div>
</template>

<script>
import { mapState } from 'pinia'
import { useWeaponsStore } from '@/store/stores/weapons'
import { groupBy } from '@/utils/array'

import Weapons from '@/components/Weapons.vue'

export default {
	components: {
		Weapons,
	},

	computed: {
		...mapState(useWeaponsStore, ['weapons', 'categories', 'favorites']),

		filteredWeapons() {
			return groupBy(this.weapons, 'category')
		},
	},
}
</script>

<style lang="scss" scoped>
.container {
	text-align: center;
}

h1 {
	margin-top: 75px;
}

h2 {
	margin: 30px auto 0;
	max-width: 450px;
}
</style>
