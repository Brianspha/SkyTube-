import swal from 'sweetalert2'
import axios from 'axios'

export default {

    methods: {
        getRegistry: async function () {
            let This = this
            return new Promise((resolve) => {
                axios.get('https://api.myjson.com/bins/wwu5a').then((response) => {
                    console.log('response: ', response)
                    resolve(response.data)
                }).catch((error) => {
                    console.log('Something went wrong whilst adding video to registry')
                    resolve(null)
                })
            })
        },
        uploadVideoToRegistryViews: async function (url, title) {
            let This = this
            return new Promise(async (resolve) => {
                var registry = await Promise.resolve(This.getRegistry())
                if (registry) {
                    registry = registry.map((video) => {
                        if (video === This.$store.state.selectedVideo.url) {
                            video.views++
                        }
                        return video
                    })
                    axios.put('https://api.myjson.com/bins/wwu5a', registry).then((response) => {
                        console.log('response adding to registry: ', response)
                        resolve(true)
                    }).catch((error) => {
                        console.log('Somethhing went wrong')
                        resolve(null)
                    })
                }
            })

        },
        uploadVideoToRegistry: async function (url, title) {
            let This = this
            return new Promise(async (resolve) => {
                var registry = await Promise.resolve(This.getRegistry())
                if (registry) {
                    registry.videos.push({
                        title: title,
                        views: 0,
                        url: url,
                        dateAdded: Math.round(new Date() / 1000)
                    })
                    axios.put('https://api.myjson.com/bins/wwu5a', registry).then((response) => {
                        console.log('response adding to registry: ', response)
                        resolve(true)
                    }).catch((error) => {
                        console.log('Somethhing went wrong')
                        resolve(null)
                    })
                }
            })

        },
        errorCustom(message) {
            swal.fire({
                icon: 'error',
                text: message
            })
        },
        successCustom(message) {
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
    }
}