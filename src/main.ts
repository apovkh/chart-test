import { createApp } from 'vue'

import vuetify from './plugins/vuetify'
import App from './App.vue'

import './style.css'
import '@mdi/font/css/materialdesignicons.min.css'

createApp(App)
	.use(vuetify)
	.mount('#app')
