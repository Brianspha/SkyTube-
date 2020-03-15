<template>
  <v-row justify="center">
    <v-dialog
      v-model="$store.state.addVideoModal"
      persistent
    >
      <v-card>
        <v-card-title class="headline">
          Upload New/Existing Video
        </v-card-title>
        <v-card-text>
          <v-form
            ref="form"
            v-model="valid"
            lazy-validation
          >
            <v-text-field
              v-model="url"
              v-if="!checkbox"
              :counter="65"
              :rules="urlRules"
              label="Video URL"
              required
            />
            <v-text-field
              v-model="title"
              :rules="titleRules"
              label="Video Title"
              required
            />
            <v-checkbox
              v-model="checkbox"
              label="Upload Video?"
              required
            />
            <v-file-input
              v-model="video"
              :rules="videoRules"
              v-if="checkbox"
              accept="video/mp4,video/x-m4v,video/*"
              label="Select Video"
              show-size
              counter
              filled
              prepend-icon="mdi-camera"
            />
            <v-btn
              :disabled="!valid"
              color="#57b560"
              class="mr-4"
              @click="validate"
            >
              Upload
            </v-btn>
            <v-btn
              color="#57b560"
              @click="$store.state.addVideoModal=!$store.state.addVideoModal"
            >
              Close
            </v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
    <loading
      :active.sync="isLoading"
      :is-full-page="true"
    />
  </v-row>
</template>

<script>
import swal from 'sweetalert2'
import axios from 'axios'
import Loading from 'vue-loading-overlay';
// Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css';
export default {
    components: {
        Loading
    },
    data: () => ({
        isLoading: false,
        video: '',
        videoRules: [
            value => !value || value.size > 0 || 'Video size should be greater than 0 MB!',
        ],
        valid: true,
        url: '',
        urlRules: [
            v => !!v || 'URL is required',
            v => (v && v.length === 65 && new RegExp("^https://siasky.net/(.*){65}").test(v)) ||
            'URL Must be a valid skynetURL',
        ],
        title: '',
        titleRules: [
            v => !!v || 'Video title is required',
            v => (v && v.length >= 1) || 'Title greater than 1 character',
        ],
        checkbox: false,
    }),
    methods: {
        validate() {
            console.log('this.$refs.form.validate(): ', this.$refs.form.validate())
            if (this.$refs.form.validate()) {
                this.uploadFile()
            }
        },
        uploadFile: async function () {
            this.isLoading = true
            if (!this.checkbox) {
                var added = await Promise.resolve(this.uploadVideoToRegistry(this.url, this.title))
                if (added) {
                    this.isLoading = false
                    this.success('Succesfully added video to registry')
                } else {
                    this.isLoading = false
                    this.error('Something went wrong whilst adding video to registry')
                }
                this.$refs.form.reset()
            } else {
                let This = this
                return new Promise(async (resolve) => {
                    let formData = new FormData();
                    formData.append('file', this.video);
                    axios.post("https://siasky.net/skynet/skyfile",
                            formData, {
                                headers: {
                                    'Content-Type': 'multipart/form-data'
                                }
                            })
                        .then(async function (response) {
                            console.log('response: ', response);
                            console.log('This.$store.actions: ', This.mixins)

                            console.log('video: ', This.video)
                            console.log(
                                `Upload successful, skylink: https://siasky.net/${response.data.skylink}`
                            );
                            var added = await Promise.resolve(This.uploadVideoToRegistry(`https://siasky.net/${response.data.skylink}`, This.title))
                            if (added) {
                                This.$refs.form.reset()
                                This.successWithFooter(
                                    `https://siasky.net/${response.data.skylink}`)
                            } else {
                                This.error('Something went wrong whilst adding video to registry you may need to add manually')
                            }
                            resolve(response)
                            This.isLoading = false
                        })
                        .catch(function (error) {
                            console.log('error while uploading file: ', error);
                            This.error("Something went wrong whilst uploading video")
                            This.isLoading = false
                            resolve(null)
                        });

                })
            }
        },
        refreshStates: async function () {
            var registry = await Promise.resolve(this.getRegistry())
            console.log('registry: ', registry)
            this.$store.state.recentVideos = registry
            this.$store.state.popularVideos = registry
        },
        uploadVideoToRegistry: async function (url, title) {
            let This = this
            return new Promise(async (resolve) => {
                var registry = await Promise.resolve(This.getRegistry())
                if (registry) {
                    registry.push({
                        title: title,
                        views: 0,
                        url: url,
                        dateadded: Math.round(new Date() / 1000)
                    })
                    axios.put(this.$store.state.registryURL, {
                         videos:registry
                    }).then((response) => {
                        console.log('response adding to registry: ', response)
                        resolve(true)
                        This.refreshStates()
                    }).catch((error) => {
                        console.log('Somethhing went wrong')
                        resolve(null)
                    })
                }
            })

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
        error(message) {
            swal.fire({
                icon: 'error',
                text: message
            })
        },
        success(message) {
            swal.fire({
                icon: 'success',
                text: message
            })
        },
        successWithFooter(url) {
            swal.fire({
                title: 'Success',
                icon: 'success',
                html: 'You can use this link to access your video, ' +
                    `<a href="${url}">links</a> `,
                showCloseButton: true,
                confirmButtonAriaLabel: 'great!',
                cancelButtonText: 'Close',
            })
        }

    },
}
</script>
