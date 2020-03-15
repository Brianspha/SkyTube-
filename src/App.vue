<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      color="#57b560"
      app
      clipped
    >
      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.text"
          :to="item.to"
          link
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              {{ item.text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon color="#57b560">
              mdi-settings
            </v-icon>
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      clipped-left
      color="#57b560"
      dense
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title
        class="mr-12 align-center"
        v-ripple="{ center: true }"
      >
        <span class="title">SkyTube</span>
      </v-toolbar-title>
      <v-spacer />
      <!--  <v-row align="center" style="max-width: 650px">
            <v-text-field :append-icon-cb="() => {}" placeholder="Search..." single-line append-icon="mdi-magnify" color="white" hide-details />
        </v-row>-->
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-content>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view />
        <addvideoview />
      </v-container>
    </v-content>
    <v-btn
      bottom
      color="#57b560"
      dark
      fab
      fixed
      right
      @click="$store.state.addVideoModal=!$store.state.addVideoModal"
    >
      <v-icon>mdi-plus</v-icon>
    </v-btn>
    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>
import addvideoview from './components/AddVideo'
import axios from 'axios'
import Swal from 'sweetalert2'

export default {
    components: {
        addvideoview
    },
    data: () => ({
        drawer: null,
        items: [{
                icon: 'mdi-trending-up',
                text: 'Most Popular',
                to: "/popular"
            },
            {
                icon: 'mdi-history',
                text: 'Recently Added',
                to: '/recents'
            },
        ]
    }),
    mounted() {
        this.init()
    },
    methods: {
        preventPageInspect() {
            document.addEventListener('contextmenu', function (e) {
                e.preventDefault();
            });
            document.onkeydown = function (e) {
                if (event.keyCode == 123) {
                    return false;
                }
                if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
                    return false;
                }
                if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
                    return false;
                }
                if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
                    return false;
                }
                if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
                    return false;
                }
            }
        },
        init: async function () {
            this.preventPageInspect()
            var registry = await Promise.resolve(this.getRegistry())
            console.log('registry: ', registry)
            this.$store.state.recentVideos = registry
            this.$store.state.popularVideos = registry
            this.warn()
        },
        getRegistry: async function () {
            let This = this
            return new Promise((resolve) => {
                axios.get(this.$store.state.registryURL).then((response) => {
                    console.log('response: ', response)
                    resolve(response.data.videos)
                }).catch((error) => {
                    console.log('Something went wrong whilst adding video to registry')
                    resolve(null)
                })
            })
        },
        warn() {
            Swal.fire({
                icon: 'warning',
                text: "Website under development",
            })
        }
    },
}
</script>

<style>
a {
    text-decoration: none;
}
</style>
