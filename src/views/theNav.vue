<template>
<div>
     <nav class="navbar navbar-expand-lg navbar-dark text-light" data-aos="flip-left">
  <a class="navbar-brand" href="#">
       <img src="../assets/church-logo.png">
  </a>
  <div class="row pl-2" id='mobileOption'>
      <p class="w-100 pt-3 heading">THE REDEEMED CHRISTIAN CHURCH OF GOD</p> <br>
      <p class="w-100 support-text">Bethel Christian Center</p>
  </div>
  <div class="row mt-2 d-sm-none" id='largeScreen'>
      <p class="w-100 mobile-text">Bethel Christian Center</p>
  </div>
  <button class="navbar-toggler" type="button" data-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation">
    <a class="more-mobile"><img @click="popover = true" src="../assets/more.png"></a>
    <!-- <a href="#menu">Click me</a> -->
  </button>
  <div class="collapse navbar-collapse justify-content-end text-light">
    <ul class="navbar-nav">
      <li class="nav-item"  data-aos="fade-right" data-aos-delay="500">
          <router-link to="/home" class="nav-link px-4">Home</router-link>
      </li>
      <li class="nav-item" data-aos="fade-right" data-aos-delay="400">
           <router-link to="/media"  class="nav-link px-4">Media</router-link>
      </li>
      <li class="nav-item" data-aos="fade-right" data-aos-delay="300">
           <router-link to="/events"  class="nav-link px-4">Events</router-link>
      </li>
      <li class="nav-item" data-aos="fade-right" data-aos-delay="300">
           <router-link to="/live"  class="nav-link px-4">Live</router-link>
      </li>
       <li class="nav-item"  data-aos="fade-right" data-aos-delay="100">
          <router-link to="/about"  class="nav-link px-4">About</router-link>
      </li>
      <li class="nav-item"  data-aos="fade-right" v-show="theUser">
          <p class="nav-link px-4">Hi {{userDetails.first_name}}</p>
      </li>
    </ul>
  </div>
</nav>
<!-- Mobile Nav Starts Here -->
<div v-show="popover" class="menu">
 <div>
   <button type="button" class="close" aria-label="Close" @click="popover = false">
  <img src="../assets/cancel.png">
</button>
  <div class="inner-content text-light justify-content-center row align-items-center">
    <ul class="navbar-nav">
      <li class="nav-item py-2" @click="popover = false"  v-show="theUser">
          <p class="nav-link">Hi {{userDetails.first_name}}</p>
      </li>
      <li class="nav-item py-2" @click="popover = false">
          <router-link to="/home" class="nav-link">Home</router-link>
      </li>
      <li class="nav-item py-2" @click="popover = false">
           <router-link to="/media"  class="nav-link">Media</router-link>
      </li>
      <li class="nav-item py-2" @click="popover = false">
           <router-link to="/events"  class="nav-link">Events</router-link>
      </li>
      <li class="nav-item py-2" @click="popover = false">
           <router-link to="/live"  class="nav-link">Live</router-link>
      </li>
      <li class="nav-item py-2" @click="popover = false">
          <router-link to="/about"  class="nav-link">About</router-link>
      </li>
    </ul>
  </div>
 </div>
 </div>
</div>
</template>

<script>

export default {
  name: 'Navbar',
  data () {
    return {
      bal: this.scroller,
      popover: false,
      mobileOption: true,
      userDetails: {}
    }
  },
  methods: {

  },
  created: {
  },
  computed: {
    scroller: function () {
      let val = document.documentElement.scrollTop
      return val
    },
    theUser: function () {
      let val = localStorage.getItem('user')
      if (val) {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.userDetails = JSON.parse(localStorage.getItem('user'))
        return true
      } else {
        return false
      }
    }
  },
  watch: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav{
     background-image: linear-gradient(to right, #000033, #00001a, #000000);
}
.heading{
 font-family: 'Bree Serif', serif;
}
.support-text{
  opacity: 0.8;
  font-size: 20px;
  font-family: 'Imprima', sans-serif;
}
.more-mobile >img, button.close > img{
     max-width: 1.1rem;
     filter: invert(100);
}
.navbar-toggler, .navbar-toggler:active{
     border: none !important;
}
.router-link-exact-active{
     color: #fff !important;
     font-weight: bolder;
}
.navbar li.nav-item:hover{
     transition: all 0.2s ease-out;
     border-bottom: 3px solid #fff !important;
}
.navbar-brand > img {
     max-width: 70px;
}
.navbar > p{
     font-weight: 500;
     font-size: clamp(1rem, calc(0.5rem + 1vw), 1.1rem);
     /* font-family: "Berlin Sans FB"; */
     letter-spacing: 1px;
}

.menu {
  z-index: 1000;
   box-shadow: 0px 6px 8px rgba(19, 19, 19, .7);
  animation: 2s fadeIn forwards .5s;
  background-image: linear-gradient(to left, #e5e5f5, #bcbcf5, #8282f8);;
   position: absolute;
   top: 0;
   right: 0;
   left: 0;
  height: 100vh;
}
.inner-content{
  margin-top: 15vh;
  margin-left: 5vw;
  width: 40vw;
  height: 70vh;
  border-left: 4px solid #fff;
  border-radius: 20px;
}
.inner-content li.nav-item{
   animation: 2s fadeIn forwards .5s;
}
button.close{
  right: 3rem;
  top: 3rem;
  width: 25px;
  height: 25px;
  position: absolute;
  display: flex;
  z-index: 1;
  border-radius: 8px;
  font-size: 35px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 0;
  animation: 1s fadeIn ease forwards .5s;
}

@keyframes grow {
  100% {
    height: 90%;
    width: 90%;
 }
}

@keyframes fadeIn {
100% {
  opacity: 1;
 }
}

@keyframes slideUp {
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

@media only screen and (max-width: 500px){
     .navbar-brand > img {
          max-width: 50px;
     }
     #mobileOption{
       display: none;
     }
}
</style>
