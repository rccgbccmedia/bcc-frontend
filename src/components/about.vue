<template>
<div id='theBody'>
       <div class="jumbotron mb-4" data-aos="zoom-out"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1500">
  <div class="container text-left text-light">
    <h1 class="display-4">About Us</h1>
    <p class="lead ">Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.  </p>
  </div>
</div>
<section class="my-4 container section-body first" data-aos="slide-right"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1500">
     <div class="row ">
          <div class="col">
               <h3 class="my-4 pt-4">ABOUT BETHEL CHRISTIAN CENTER</h3>
               <p > Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
               <p > Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
          </div>
     </div>
</section>
<section class="my-4 container section-body second" data-aos="slide-right"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1500">
     <div class="row ">
          <div class="col">
               <h3 class="my-4 pt-4 text-right">WHO WE ARE</h3>
               <p > Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
               <p > Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
          </div>
     </div>
</section>
</div>
</template>

<script>
export default {
  name: 'About',
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
     background-image: url('../assets/pictures/aboutImg.jpg');
     background-size: cover;
     background-position: center;
     background-repeat: no-repeat;
}
.first{
     background-image: url('../assets/pictures/removebg-preview.png');
     background-repeat: no-repeat;
     background-position: right;
     background-size: 50%;
     background-blend-mode:overlay;
}
.second{
     background-image: url('../assets/pictures/IMG_3022-removebg-preview.png');
     background-repeat: no-repeat;
     background-position: left;
     background-size: 70%;
     background-blend-mode:overlay;
     background-position-y: bottom;
}
.section-body h3{
     font-weight: bolder;
     opacity: 0.8;
     transition: all 1s ease-in-out;
}
.section-body h3:hover, .section-body h3:active{
     color: #1010b8;
}
.section-body p{
     color: rgb(158, 157, 157);
     transition: all 1s ease-in-out;
}
.section-body p:hover, .section-body p:active{
     color: #1010b8;
}
@media only screen and (max-width: 500px){
     .first{
          background-size: 90%;
     }
  .second{
   background-size: 140%;
  }
}
</style>
