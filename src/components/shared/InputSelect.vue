<template>
	<div class="input-select">
		<label v-if="label" :for="id">
			{{ label }}
		</label>

		<select :id="id" :value="value" @input="onInput" @change="onChange">
			<option v-if="placeholder" value="">{{ placeholder }}</option>
			<option v-for="(option, index) in options" :key="index" :value="option.value">
				{{ option.label }}
			</option>
		</select>

		<Icon name="angle-down" />
	</div>
</template>

<script>
export default {
	props: {
		id: {
			type: String,
			required: true,
		},

		label: {
			type: String,
			default: '',
		},

		placeholder: {
			type: String,
			default: '',
		},

		value: {
			type: String,
			default: '',
		},

		options: {
			type: Array,
			default: () => [],
		},
	},

	emits: ['input', 'change'],

	methods: {
		onInput(event) {
			this.$emit('input', event.target.value)
		},

		onChange(event) {
			this.$emit('change', event.target.value)
		},
	},
}
</script>

<style lang="scss" scoped>
.input-select {
	position: relative;

	@media (max-width: $tablet) {
		width: 100%;
	}

	select {
		appearance: none;
		background: $elevation-4-color;
		border: none;
		border-radius: $border-radius;
		color: white;
		cursor: pointer;
		font-family: $font-family;
		font-weight: 500;
		min-width: 125px;
		padding: 8px 28px 8px 8px;
		transition: $transition;

		@media (max-width: $tablet) {
			font-size: 18px;
			padding: 15px;
			width: 100%;
		}

		&:hover {
			background: $elevation-5-color;
		}
	}

	label {
		font-size: 14px;
		left: 0;
		position: absolute;
		top: 0;
		transform: translateY(calc(-100% - 6px));

		@media (max-width: $tablet) {
			font-size: 16px;
		}
	}

	.icon {
		pointer-events: none;
		position: absolute;
		right: 4px;
		top: 50%;
		transform: translateY(-50%);
	}
}
</style>
