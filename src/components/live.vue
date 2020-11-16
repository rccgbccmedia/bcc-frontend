<template>
<div id='theBody'>
       <div class="jumbotron mb-4" data-aos="zoom-out"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1500">
  <div class="container text-center text-secondary">
    <p class="display-4">Worship With Us</p>
    <h1 class="display-1">LIVE</h1>
  </div>
</div>
<div class="row my-4"  data-aos="zoom-out"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1500">
  <h2 class="col text-center py-2">WELCOME TO RCCG <br>
      BETHEL CHRSITIAN CENTER <br>
      LIVE SERVICE</h2>
</div>
<section class="mb-3 p-2">
  <div class="row justify-content-space-between">
    <iframe src="https://www.youtube.com/embed/4evo7zy_FWs" class="col-sm-12 col-lg-8 pl-3 img-responsive" id="live" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <iframe src="https://www.bible.com/bible/1/GEN.1.KJV" id="bible" height="480" width="360" class="col-sm-12 col-lg-4"></iframe>
  </div>
</section>
<section class="my-4 p-4">
  <h3 class="text-center my-3 pb-2">OLDER VIDEOS</h3>
  <div class="row justify-content-space-between">
    <template v-for="video in theVideos">
    <div class="col-xs-12 col-md-6 col-lg-4 text-center" :key="video.id"><iframe :src="formatVideoLink(video.url)" height="250px" class="w-100" allow="fullscreen" allowfullscreen>
    </iframe>
    </div>
    </template>
  </div>
</section>
</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Live',
  components: {},
  data () {
    return {
      theVideos: []
    }
  },
  methods: {
    formatVideoLink (oldLink) {
      let rems = oldLink.split('=')
      let val = rems[1].split('&')
      return `https://www.youtube.com/embed/${val[0]}`
    },
    fetchVideos () {
      axios.get('https://bcc-backend.herokuapp.com/videos/all/').then((val) => {
        console.log(val)
        if (val.status === 200) {
          this.theVideos = val.data.slice(0, 3)
        }
      }).catch((err) => {
        console.log(err)
      })
    }
  },
  beforeMount () {
    this.fetchVideos()
  },
  computed: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.jumbotron{
  background-image:  url('../assets/church-logo.png'), linear-gradient(to left, #e5e5f5, #bcbcf5, #8282f8);
  background-blend-mode: soft-light, normal;
  background-position-y: center;
  background-size: 15%, 100%;
  background-repeat: no-repeat;
  margin: auto;
  padding: 20px;
  border-radius: 0;
}
h2{
  color: #3a3ae9;
  font-family: 'Bree Serif', serif;
}
@media only screen and (max-width: 810px){
  #live{
    height: 300px;
  }
   .jumbotron{
    background-size: 30%, 100%;
  }
}
@media only screen and (max-width: 500px){
    #live{
    padding: 0 5%;
    height: 400px;
  }
   .jumbotron{
    background-size: 50%, 100%;
  }
}
@media only screen and (min-width: 810px){
 #bible{
   border-left: 1px solid #8282f8;
 }
}
</style>
