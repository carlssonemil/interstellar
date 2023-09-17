<template>
	<div class="icon">
		<unicon
			:name="name"
			:width="size || width"
			:height="size || height"
			:fill="color || fill"
			:hover-fill="hover"
			:icon-style="iconStyle"
			@click="onClick" />
	</div>
</template>

<script>
export default {
	props: {
		name: {
			type: String,
			required: true,
		},

		size: {
			type: Number,
		},

		width: {
			type: Number,
			default: 16,
		},

		height: {
			type: Number,
			default: 16,
		},

		color: {
			type: String,
			default: 'white',
		},

		fill: {
			type: String,
		},

		hoverColor: {
			type: String,
		},

		hoverFill: {
			type: String,
		},

		iconStyle: {
			type: String,
			default: 'line',
		},
	},

	emits: ['click'],

	computed: {
		hover() {
			return this.hoverColor || this.hoverFill || this.color || this.fill
		},
	},

	methods: {
		onClick() {
			this.$emit('click')
		},
	},
}
</script>

<style lang="scss" scoped>
.icon {
	display: inline-flex;
	position: relative;
	top: 2px;
}
</style>
