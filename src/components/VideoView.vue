<template>
  <v-row justify="center">
    <v-dialog v-model="$store.state.selectedVideoPopup">
      <v-card>
        <v-card-title class="headline">
          View Video
        </v-card-title>
        <xgplayer
          :no-destroy="false"
          :options="{
            url: $store.state.selectedVideo.url,
            width: '100%' // Depends on its wrapper element.
          }"
        />
        <v-card-title>
          {{ $store.state.selectedVideo.title }}
        </v-card-title>
        <!--  <v-card-subtitle>
                {{$store.state.selectedVideo.views}} views
            </v-card-subtitle>-->
        <v-card-actions>
          <v-btn
            color="green darken-1"
            text
            @click="$store.state.selectedVideoPopup=!$store.state.selectedVideoPopup;"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
    components: {},
    data() {
        return {
            isLoading: false,
        }
    },
    mounted() {

    },
    methods: {

    }
}
</script>
