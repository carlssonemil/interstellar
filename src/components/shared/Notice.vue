<template>
	<transition name="slidedown">
		<div v-if="show" class="notice">
			<slot />

			<Icon name="times" @click="close" />
		</div>
	</transition>
</template>

<script>
export default {
	props: {
		delay: {
			type: Number,
			default: 0,
		},
	},

	data() {
		return {
			show: false,
		}
	},

	mounted() {
		setTimeout(() => {
			this.show = true
		}, this.delay)
	},

	methods: {
		close() {
			this.show = false
		},
	},
}
</script>

<style lang="scss" scoped>
.notice {
	$padding: 5px;

	background: $elevation-2-color;
	font-size: 13px;
	padding: $padding;
	position: fixed;
	text-align: center;
	top: 0;
	width: 100%;
	z-index: z-index('notice');

	@media (max-width: $tablet) {
		display: none;
	}

	.icon {
		cursor: pointer;
		opacity: 0.5;
		padding: $padding $padding * 2 $padding;
		position: absolute;
		right: 0;
		transition: $transition;
		top: 0;

		&:hover {
			opacity: 0.75;
		}
	}
}
</style>
