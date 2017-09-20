import Vue from 'vue'
import App from './App'
import router from './router'
import FBSignInButton from 'vue-facebook-signin-button'
import VueFire from 'vuefire'
import VueResource from 'vue-resource'
import Vuetify from 'vuetify'
import Tabs from './components/Tabs.vue'
import TabswithBack from'./components/TabswithBack.vue'


Vue.component('tabs',Tabs)
Vue.component('tabswithback',TabswithBack)
Vue.use(Vuetify)
Vue.use(VueResource)
Vue.use(VueFire)
Vue.use(FBSignInButton)
Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',

  components:{Tabs},
  router,
  render: h => h(App)
})
