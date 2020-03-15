import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import store from './store'
import routes from './routes'
import VueXgplayer from 'vue-xgplayer'
import InfiniteLoading from 'vue-infinite-loading';
import VueResource from 'vue-resource';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import mixins from './mixins/'
Vue.use(VueResource);
Vue.use(InfiniteLoading, { /* options */ });
Vue.use(VueXgplayer, {
  // globalOptions
  enterLogo: {
    url: '/images/video-player-loading.png',
    width: 100,
    height: 40
  },
  playsinline: true
})
Vue.config.productionTip = false
new Vue({
  vuetify,
  store,
  mixins:[mixins],
  router: routes,
  render: h => h(App)
}).$mount('#app')