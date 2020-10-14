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
    <iframe class="col-sm-12 col-lg-8 pl-3 img-responsive" id="live" src="https://www.youtube.com/embed/tgbNymZ7vqY" allow="fullscreen" allowfullscreen>
    </iframe>
    <iframe src="https://www.bible.com/bible/1/GEN.1.KJV" id="bible" height="480" width="360" class="col-sm-12 col-lg-4"></iframe>
  </div>
</section>
<section class="my-4 p-4">
  <h3 class="text-center my-3 pb-2">OLDER VIDEOS</h3>
  <div class="row justify-content-space-between">
    <div class="col-xs-12 col-md-6 col-lg-4 text-center"><iframe src="https://www.youtube.com/embed/tgbNymZ7vqY" height="250px" class="w-100" allow="fullscreen" allowfullscreen>
    </iframe>
    <p class="">This is the Message Description</p></div>
    <div class="col-xs-12 col-md-6 col-lg-4 text-center"><iframe src="https://www.youtube.com/embed/tgbNymZ7vqY" height="250px" class="w-100" allow="fullscreen" allowfullscreen>
    </iframe>
    <p class="">This is the Message Description</p></div>
    <div class="col-xs-12 col-md-6 col-lg-4 text-center"><iframe src="https://www.youtube.com/embed/tgbNymZ7vqY" height="250px" class="w-100" allow="fullscreen" allowfullscreen>
    </iframe>
    <p class="">This is the Message Description</p></div>
  </div>
</section>
</div>
</template>

<script>
export default {
  name: 'Live',
  components: {},
  data () {
    return {
    }
  },
  methods: {
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
