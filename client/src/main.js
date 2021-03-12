import * as actions from './utils/actions/enums'
import App from './App'
import router from './router'
import Vue from 'vue'

import { store } from './store/store.js'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  store,
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  created () {
    this.$store.dispatch(actions.SET_INITIAL_DATA)
  }
})
