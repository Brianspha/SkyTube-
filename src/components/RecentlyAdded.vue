<template>
  <v-container fluid>
    <v-app-bar
      dark
      color="#57b560"
    >
      <v-toolbar-title>Recently Added Videos</v-toolbar-title>
    </v-app-bar>

    <v-row no-gutters>
      <v-col
        v-for="(video,i) in $store.state.recentVideos"
        :key="i"
        class="pa-2"
      >
        <v-card
          color="#57b560"
          class="pa-2"
          max-width="344"
        >
          <v-img
            :src="$store.state.thumbnail"
            contain
          />
          <v-card-title>
            {{ video.title }}
          </v-card-title>
          <!--  <v-card-subtitle>
                    {{video.views}} views <br />
                    <a style="color: white;" :href="video.url">Video URL</a>
                </v-card-subtitle>-->
          <v-card-actions>
            <v-btn
              color="white"
              @click="download(video.url)"
              text
            >
              Download
            </v-btn>
            <v-btn
              color="white"
              @click="updateVideoView(video)"
              text
            >
              View
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <popular />
    <infinite-loading @infinite="infiniteHandler" />
    <loading
      :active.sync="isLoading"
      :is-full-page="true"
    />
  </v-container>
</template>

<script>
import popular from '../components/VideoView'
import axios from 'axios'
import Loading from 'vue-loading-overlay';
// Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css';
export default {
    components: {
        popular,
        Loading
    },
    data: () => ({
        isLoading: false

    }),
    mounted() {
        console.log('$store.state.popularVideos: ', this.$store.state.popularVideos)
    },
    methods: {
        infiniteHandler: async function ($state) {
            $state.loaded();

            $state.complete()
        },
        download(url) {
            console.log('response2: ', url)
            var anchor = document.createElement('a');
            anchor.href = url
            anchor.target = '_blank';
            anchor.download = 'video';
            anchor.click();
        },
        updateVideoView: async function (video) {
            this.isLoading = true
            //await Promise.resolve(this.uploadVideoToRegistry(video.url))
            this.$store.state.selectedVideo = video;
            this.$store.state.selectedVideo.views++;
            this.$store.state.selectedVideoPopup = !this.$store.state.selectedVideoPopup.selectedVideoPopup;
            this.isLoading = false
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
        uploadVideoToRegistry: async function (url) {
            let This = this
            return new Promise(async (resolve) => {
                var registry = await Promise.resolve(This.getRegistry())
                var updated = {}
                if (registry) {
                    registry.map((video) => {
                        if (video === url) {
                            video.views++
                            updated = video
                        }
                        return video
                    })
                    console.log('video: ', registry)
                    axios.put({
                        url: this.$store.state.registryURL,
                        data: JSON.stringify({
                            updated
                        })
                    }).then((response) => {
                        console.log('response adding to registry: ', response)
                        resolve(true)
                    }).catch((error) => {
                        console.log('Somethhing went wrong')
                        resolve(null)
                    })
                }
            })
        }
    }
}
</script>
