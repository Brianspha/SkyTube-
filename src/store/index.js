import Vue from 'vue'
import Vuex from 'vuex'
import swal from 'sweetalert2'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    registryURL:'https://api.myjson.com/bins/odagq',
    thumbnail: require('../images/thumbnail_blank.jpg'),
    popularVideos: [
    ],
    recentVideos: [],
    selectedVideo: {
    },
    selectedVideoPopup: false,
    addVideoModal:false
  },
  mutations: {},
  actions: {
   
  },
  modules: {}
})