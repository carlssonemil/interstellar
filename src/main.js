import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import { i18n } from './i18n'
import Notifications from '@kyvg/vue3-notification'
import Unicon from './icons/unicons'
import { defineGlobalComponents } from './components/shared'
import { plugin as VueTippy } from 'vue-tippy'
import '/node_modules/flag-icons/css/flag-icons.min.css'
import 'tippy.js/dist/tippy.css'
import 'tippy.js/animations/shift-away.css'

const app = createApp(App)

app.use(store)
app.use(Unicon)
app.use(Notifications)
app.use(router)
app.use(i18n)
app.use(VueTippy, {
	defaultProps: {
		animation: 'shift-away',
	},
})

defineGlobalComponents(app)

router.isReady().then(() => {
	app.mount('#app')
})
