<template>
  <div id="app" >
    <navComponent id="theNav"></navComponent>
    <router-view/>
    <!-- Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a> -->
    <button class="scroll-button mr-lg-0 mr-sm-3 shadow" title="Scroll to top" v-show="scroller" @click="topFunction"><img src="../src/assets/up-arrow.png"/></button>
    <footer class="py-4 text-light">
      <div class=""><p class="row justify-content-center">The Redeemed Christian Church of God </p><p class="row justify-content-center" > Bethel Christian Center</p></div>
      <div class="row justify-content-center ">
          <router-link to="/about" class="footer-link col-md-2 text-center">About Us</router-link><router-link to="/media" class="footer-link text-center col-md-2">Messages</router-link><router-link to="/live" class="footer-link col-md-2 text-center">Live</router-link>
        </div>
        <div class="row justify-content-center socials my-4">
          <a href="https://www.facebook.com/rccgbcc" target="_blank"> <img src="../src/assets/facebook.png" class="col-sm-1 mt-md-2" style="max-width: 55px; height: 25px"></a>
           <a href="https://www.instagram.com/rccgbccabuja" target="_blank">
          <img class="col-sm-1 mt-md-2" src="../src/assets/instagram.png"  style="max-width: 55px; height: 25px">
           </a>
           <a href="https://www.youtube.com/channel/UCok6SJC0guIVjznAdtScCgQ" target="_blank"> <img class="col-sm-1 mt-md-2 " src="../src/assets/youtube.png"  style="max-width: 55px; height: 25px"></a>
           <a href="https://mixlr.com/rccgbcc" target="_blank">
          <img class="col-sm-1 mt-md-2" src="../src/assets/mixlr-icon.png"  style="max-width: 55px; height: 25px">
          </a>
        </div>
    </footer>
  </div>
</template>

<script>
import navComponent from '../src/views/theNav'
export default {
  name: 'App',
  components: {navComponent},
  data () {
    return {
      scroller: false
    }
  },
  mounted () {
    document.addEventListener('scroll', (e) => {
      this.scrollFunction()
    })
  },
  methods: {
    scrollFunction () {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        this.scroller = true
      } else {
        this.scroller = false
      }
    },
    topFunction () {
      document.body.scrollTop = 0 // For Safari
      document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
    }
  },
  computed: {
  }
}
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Montserrat:300,400,500,700);
@import url('https://fonts.googleapis.com/css2?family=Bree+Serif&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Imprima&display=swap');
body{
  font-family: Montserrat, "Helvetica Neue", Helvetica, Arial, sans-serif;
}
iframe{
  border:none;
}
footer {
   background-image: linear-gradient(to right, #000033, #00001a, #000000);
}
footer > div img{
   max-width: 1.5rem;
}
*:any-link{
  text-decoration: none;
}
.socials img{
  cursor: pointer;
  -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);
}
.footer-link:hover{
  text-decoration: none;
  color: #fff;
}
.footer-link:active{
  transform: scale(0.9);
}
.socials img:hover, .socials img:active{
    filter: grayscale(0);
}
button.scroll-button{
  border: 2px solid gainsboro;
  border-radius: 50%;
  position:fixed;
  /* display: none; */
  bottom: 20px;
  padding: 10px;
  right: 30px;
}
button.scroll-button:hover{
  background-color: gainsboro;
}
@media only screen and (max-width: 500px){
     .socials img{
          max-width: 45px !important;
          height: 15px !important;
     }
}
</style>
