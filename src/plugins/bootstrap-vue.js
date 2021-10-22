import Vue from 'vue'
import {
    BContainer,
    BCard,
    BRow,
    BCol,
    BCardText,
    BButton,
    BFormInput
} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

/**
 * Grid components
 */
Vue.component('b-container', BContainer)
Vue.component('b-row', BRow)
Vue.component('b-col', BCol)

/**
 * Any components
 */
Vue.component('b-card', BCard)
Vue.component('b-card-text', BCardText)
Vue.component('b-button', BButton)
Vue.component('b-form-input', BFormInput)