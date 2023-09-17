<template>
	<button :class="variant" :disabled="disabled">
		<Icon v-if="icon" :name="icon" :color="iconColor" :size="iconSize" />

		<slot />
	</button>
</template>

<script>
export default {
	props: {
		variant: {
			type: String,
			default: 'primary',
		},

		disabled: {
			type: Boolean,
			default: false,
		},

		icon: {
			type: String,
			default: '',
		},

		iconColor: {
			type: String,
			default: 'white',
		},

		iconSize: {
			type: Number,
			default: 16,
		},
	},
}
</script>

<style lang="scss" scoped>
button {
	align-items: center;
	background: white;
	border-radius: $border-radius;
	border: none;
	color: black;
	cursor: pointer;
	display: inline-flex;
	font-family: $font-family;
	font-size: 14px;
	font-weight: 500;
	justify-content: center;
	line-height: 1.4;
	padding: 8px 16px;
	transition: $transition;

	&:hover {
		opacity: 0.9;
	}

	@media (max-width: $mobile) {
		display: flex;
		font-size: 16px;
		padding: 12px 20px;
		width: 100%;
	}

	&.primary {
		background: $primary;
		color: white;
	}

	&.secondary {
		background: darken(white, 40%);
		color: white;
	}

	&.success {
		background: $success;
		color: white;
	}

	&.warning {
		background: $warning;
		color: black;
	}

	&.danger {
		background: $danger;
		color: white;
	}

	&.info {
		background: $info;
		color: white;
	}

	&:disabled {
		color: rgba(black, 0.5);
		cursor: not-allowed;

		&:hover {
			opacity: 1;
		}

		.icon {
			opacity: 0.5;
		}
	}

	.icon {
		margin-right: 6px;
		transition: $transition;
	}
}
</style>
