<template>
	<div class="error container">
		<h1 class="error-title" data-shadow="404">404</h1>

		<p class="error-subtitle">
			<i18n-t keypath="pages.404.description">
				{{ $t(`pages.404.scenarios[${scenario}]`) }}
			</i18n-t>
		</p>

		<router-link to="/" class="button">
			<Icon name="arrow-left" color="black" :size="20" />{{ $t('pages.404.link') }}
		</router-link>
	</div>
</template>

<script>
export default {
	data() {
		return {
			scenario: Math.floor(Math.random() * 20),
		}
	},
}
</script>

<style lang="scss" scoped>
.error {
	padding-top: 15vh;
	text-align: center;

	.error-title {
		$size: 8px;

		font-size: 125px;
		font-weight: 600;
		letter-spacing: $size;
		position: relative;
		text-shadow: calc($size / 2) calc($size / 2) 0 black;

		&:after {
			animation: shadow-animation 15s linear infinite;
			background-image: linear-gradient(
				45deg,
				transparent 45%,
				$orange 45%,
				$orange 55%,
				transparent 0
			);
			background-clip: text;
			background-size: $size $size;
			content: attr(data-shadow);
			left: calc(50% + #{$size});
			position: absolute;
			text-shadow: none;
			transform: translateX(-50%);
			top: $size;
			z-index: -1;
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
		}
	}

	.error-subtitle {
		font-size: 22px;
		line-height: 1.4;
		margin: 35px auto 50px;
		max-width: 600px;
	}

	.button {
		align-items: center;
		background: white;
		border-radius: $border-radius;
		color: black;
		display: inline-flex;
		padding: 12px 20px;

		&:hover {
			text-decoration: none;

			.icon {
				transform: translateX(-15%);
			}
		}

		.icon {
			margin-right: 6px;
			position: relative;
			top: 2px;
			transition: $transition;
		}
	}
}
</style>
