<template>
  <div id="app" >
    <router-view/>
    <!-- Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a> -->
    <footer class="w-100 text-light row justify-content-space-between mx-auto align-items-center">
      <div class="col pb-2"><span><img src="../src/assets/church-logo.png" class="img-responsive mr-2"> </span>The Redeemed Christian Church of God</div>
      <div class="col">
        <div class="row justify-content-space-between socials pt-md-2">
          <p class="col-sm-1 text-center pr-md-4 mr-2">Connect With Us</p>
          <img src="../src/assets/facebook.png" class="col-sm-1 mt-md-2" style="max-width: 55px; height: 25px">
          <img class="col-sm-1 mt-md-2" src="../src/assets/instagram.png"  style="max-width: 55px; height: 25px">
          <img class="col-sm-1 mt-md-2" src="../src/assets/twitter.png"  style="max-width: 55px; height: 25px">
          <img class="col-sm-1 mt-md-2 " src="../src/assets/youtube.png"  style="max-width: 55px; height: 25px">
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Montserrat:300,400,500,700);
body{
  font-family: Montserrat, "Helvetica Neue", Helvetica, Arial, sans-serif;
}
footer {
   background-image: linear-gradient(to right, #000033, #00001a, #000000);
   font-size: 10px;
   height: 9vh;
}
footer > div img{
   max-width: 1.5rem;
}
.socials img{
  cursor: pointer;
  -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
    filter: grayscale(100%);
}
.socials img:hover, .socials img:active{
    filter: grayscale(0);
}
@media only screen and (max-width: 500px){
     .socials img{
          max-width: 45px !important;
          height: 15px !important;
     }
}
</style>
