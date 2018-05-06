import Vue from 'vue'
import App from './App'
import * as firebase from 'firebase'
import store from './store'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created () {
    // Initialize Firebase
    const config = {
      apiKey: 'AIzaSyDKsJQyFlzyr8e-yQNssMeOoxIiNzwSwEA',
      authDomain: 'suslikads.firebaseapp.com',
      databaseURL: 'https://suslikads.firebaseio.com',
      projectId: 'suslikads',
      storageBucket: 'suslikads.appspot.com',
      messagingSenderId: '184877195462'
    }
    firebase.initializeApp(config)
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user)
      }
    })
  }
})
