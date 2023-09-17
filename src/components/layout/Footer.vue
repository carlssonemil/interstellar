<template>
	<footer class="container">
		<div>
			<i18n-t keypath="general.made_by">
				<a href="https://emilcarlsson.se/">Emil Carlsson</a>
			</i18n-t>
			<i18n-t v-if="translatedBy" keypath="general.translated_by">
				<a :href="translatedBy.url">{{ translatedBy.username }}</a>
			</i18n-t>
		</div>

		<div>
			<router-link to="/about">{{ $t('general.about') }}</router-link>
			<router-link to="/requirements">{{ $tc('general.requirement') }}</router-link>
			<a href="https://github.com/carlssonemil/mw3">GitHub</a>
			<LocaleSwitcher />
		</div>
	</footer>
</template>

<script>
import { translatedBy } from '@/i18n/locales.js'
import LocaleSwitcher from '@/components/LocaleSwitcher.vue'

export default {
	components: {
		LocaleSwitcher,
	},

	computed: {
		translatedBy() {
			const currentLocale = this.$i18n.locale
			const translator = translatedBy[currentLocale]

			if (!translator) return null

			return {
				url: translator.github,
				username: translator.name || translator.github.split('/').pop(),
			}
		},
	},
}
</script>

<style lang="scss" scoped>
footer {
	align-items: center;
	cursor: default;
	display: flex;
	justify-content: space-between;
	opacity: 0.35;
	padding: 50px 0 75px;
	text-align: center;
	transition: $transition;

	@media (max-width: $tablet) {
		flex-direction: column-reverse;
		font-size: 14px;
		padding: 30px 0 50px;

		> div:first-child {
			font-size: 12px;
			margin-top: 30px;
		}
	}

	&:hover {
		opacity: 0.85;
	}

	> div {
		align-items: center;
		display: flex;
		white-space: pre-wrap;

		&:first-child a {
			margin-right: 0 !important;
		}
	}

	a {
		color: $text-color;
		text-decoration: none;
		transition: $transition;

		&:hover {
			opacity: 1;
			text-decoration: underline;
		}

		&:last-of-type {
			margin-right: 50px;

			@media (max-width: $tablet) {
				margin-right: 35px;
			}
		}

		+ a {
			margin-left: 50px;

			@media (max-width: $tablet) {
				margin-left: 35px;
			}
		}
	}
}
</style>
