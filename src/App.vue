<template>
	<div id="app">
		<Header />

		<Main>
			<router-view v-slot="{ Component }">
				<transition name="page-fade" mode="out-in">
					<component :is="Component" />
				</transition>
			</router-view>
		</Main>

		<notifications position="top center">
			<template #body="props">
				<div class="notification" :class="props.item.type" @click="props.close">
					<p class="title">{{ props.item.title }}</p>
					<Icon class="remove" name="times" width="18" height="18" />
				</div>
			</template>
		</notifications>

		<Footer />
	</div>
</template>

<script>
import Footer from '@/components/layout/Footer.vue'
import Header from '@/components/layout/Header.vue'
import Main from '@/components/layout/Main.vue'

export default {
	components: {
		Footer,
		Header,
		Main,
	},
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
@import '@/scss/main';

#app {
	display: flex;
	flex-direction: column;
	height: 100%;
}
</style>
