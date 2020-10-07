<template>
<div>
     <nav class="navbar navbar-expand-lg navbar-dark text-light" data-aos="flip-left">
  <a class="navbar-brand" href="#">
       <img src="../assets/church-logo.png">
  </a>
  <div class="row pl-2">
      <p class="d-xs-none d-lg-block w-100 pt-3 heading">THE REDEEMED CHRISTIAN CHURCH OF GOD</p> <br>
      <p class="d-xs-none d-lg-block w-100 support-text">Bethel Christian Center</p>
  </div>
  <button class="navbar-toggler" type="button" data-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation">
    <a class="more-mobile"><img @click="popover = true" src="../assets/more.png"></a>
    <!-- <a href="#menu">Click me</a> -->
  </button>
  <div class="collapse navbar-collapse justify-content-end text-light">
    <ul class="navbar-nav">
      <li class="nav-item"  data-aos="fade-right">
          <router-link to="/" class="nav-link">Home</router-link>
      </li>
      <li class="nav-item"  data-aos="fade-right">
          <router-link to="About"  class="nav-link">About</router-link>
      </li>
      <li class="nav-item" data-aos="fade-right">
           <router-link to="/media"  class="nav-link">Media</router-link>
      </li>
      <li class="nav-item" data-aos="fade-right">
           <router-link to="/events"  class="nav-link">Events</router-link>
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
  <div class="inner-content border text-light justify-content-center row align-items-center">
    <ul class="navbar-nav">
      <li class="nav-item py-2">
          <router-link to="/" class="nav-link">Home</router-link>
      </li>
      <li class="nav-item py-2">
          <router-link to="About"  class="nav-link">About</router-link>
      </li>
      <li class="nav-item py-2">
           <router-link to="/media"  class="nav-link">Media</router-link>
      </li>
      <li class="nav-item py-2">
           <router-link to="/events"  class="nav-link">Events</router-link>
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
      popover: false
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
  background-color: #000033;
   position: absolute;
   top: 0;
   right: 0;
   left: 0;
  height: 100vh;
}
.inner-content{
  margin-top: 15vh;
  margin-left: 25vw;
  width: 50vw;
  height: 70vh;
  border: 1px solid #000;
  border-radius: 3rem;
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
}
</style>
