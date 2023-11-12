import { createApp } from 'vue'
import App from './App.vue'
import store from './stores'
import router from './router'
import { i18n } from './i18n'
import Notifications from '@kyvg/vue3-notification'
import Unicon from './icons/unicons'
import { plugin as VueTippy } from 'vue-tippy'
import '/node_modules/flag-icons/css/flag-icons.min.css'
import 'tippy.js/dist/tippy.css'
import 'tippy.js/animations/shift-away.css'

// TODO: Extract these global imports to a different file
import IconComponent from './components/IconComponent.vue'
import LoaderComponent from './components/LoaderComponent.vue'
import ModalComponent from './components/ModalComponent.vue'

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

app.component('IconComponent', IconComponent)
app.component('LoaderComponent', LoaderComponent)
app.component('ModalComponent', ModalComponent)

router.isReady().then(() => {
  app.mount('#app')
})
