import Alert from './Alert.vue'
import Button from './Button.vue'
import Icon from './Icon.vue'
import Input from './Input.vue'
import InputCheckbox from './InputCheckbox.vue'
import InputSelect from './InputSelect.vue'
import InputText from './InputText.vue'
import InputTextarea from './InputTextarea.vue'
import Notice from './Notice.vue'

export const defineGlobalComponents = (app) => {
	app.component('Alert', Alert)
	app.component('Button', Button)
	app.component('Icon', Icon)
	app.component('Input', Input)
	app.component('InputCheckbox', InputCheckbox)
	app.component('InputSelect', InputSelect)
	app.component('InputText', InputText)
	app.component('InputTextarea', InputTextarea)
	app.component('Notice', Notice)
}
