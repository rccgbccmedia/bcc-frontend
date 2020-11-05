<template>
<div id='theBody'>
       <div class="jumbotron mb-4" data-aos="zoom-out"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1500">
  <div class="container text-left text-light">
    <h1 class="display-4">About Us</h1>
    <!-- <p class="lead ">Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.  </p> -->
  </div>
</div>
<section class="my-4 container section-body first" data-aos="slide-right"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1500">
     <div class="row ">
          <div class="col">
               <h3 class="my-4 pt-4">ABOUT BETHEL CHRISTIAN CENTER</h3>
               <p >Bethel Christian Church is Youth and Young Adult Area Parish of the Redeemed Christian Church of God, Kaduna Youth Province 6. The church has two churches in one location, the expression church and the celebration church. The expression church starts every 7am to 9am on Sundays. </p>
               <p >It’s a vibrant church for the youth to experience God just as they are. The celebration church is the starts by 9:30 am to 11:30am and its for the young at heart and young adults. BCC is where God lives, rules and reigns. We are building men and woman that will change the world politically, financially and economically using the power of God.</p>
          </div>
     </div>
</section>
<section class="my-4 container section-body" data-aos="slide-right"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1500">
     <div class="row ">
          <div class="col">
               <h3 class="my-4 pt-4 text-left">MISSION AND VISION</h3>
               <ol>
                    <li class="py-1">To make heaven.</li>
                    <li  class="py-1">To take as many people with us.</li>
                    <li class="py-1">To have a member of RCCG in every family of all nations</li>
                    <li class="py-1">To accomplish No. 1 above, holiness will be our lifestyle</li>
                    <li class="py-1 mr-4 pr-4">To accomplish No. 2 and 3 above, we will plant churches within five minutes walking distance in every city and town of developing countries and within five minutes driving distance in every city and town of developed countries.</li>
                    <li class="py-1">We will pursue these objectives until every Nation in the world is reached for the Lord Jesus Christ</li>
               </ol>
          </div>
          <div class="d-sm-none d-md-block second col-md-4 col-lg-3 align-content-end"></div>
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
     background-image: url('https://drive.google.com/uc?id=1C-foaepn8dBC2iKiEEeYUwlwfFVAd5hN');
     background-size: cover;
     background-position: center;
     background-repeat: no-repeat;
}
.first{
     background-image: url('../assets/pictures/removebg-preview.png'), linear-gradient(to right, #fff, rgb(230, 227, 227), #d9d9e9, rgb(158, 157, 157));
     background-repeat: no-repeat;
     background-position-x: right;
     border-top-right-radius: 40px;
     border-bottom-right-radius: 40px;
     background-position-y: bottom;
     background-size: 35%;
}
.second{
     border-top-right-radius: 40px;
     border-bottom-right-radius: 40px;
     background-image: url('../assets/pictures/IMG_3022-removebg-preview.png'), linear-gradient(to right, #fff, rgb(230, 227, 227), #d9d9e9, rgb(158, 157, 157));
     background-repeat: no-repeat;
     background-size: auto;
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
     line-height: 28px;
     max-width: 60vw;
}
.section-body p:hover, .section-body p:active{
     color: #1010b8;
}
@media only screen and (max-width: 800px){
     .first{
           background-size: 75%;
           background-origin:border-box;
     }
     .second{
          background-position-y: center;
     }
}
@media only screen and (max-width: 500px){
     .first, .second{
          background:none
     }
     .section-body p{
     max-width: 90vw;
}
}
</style>
