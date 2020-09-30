<template>
<div>
     <navComponent id="theNav"></navComponent>
     <!-- Carousel starts -->
     <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active text-light bg-dark">
        <div class="page ml-4 pl-4" data-aos="slide-right">
           <!-- <h4 class="pt-md-4 mt-md-4" style="color:#1010b8">Join a family of <span class="text-light">CHRIST</span> </h4> -->
        </div>
    </div>
    <div class="carousel-item text-light bg-dark">
        <div class="page ml-4 pl-4" data-aos="slide-right">
           <!-- <h4 class="pt-md-4 mt-md-4">Experience the amazing power of <span class="special">GOD</span></h4> -->
        </div>
    </div>
    <div class="carousel-item text-light bg-dark">
        <div class="page ml-4 pl-4" data-aos="slide-right">
           <!-- <h4 class="pt-md-4 mt-md-4">An atmosphere of  <br><span class="special">PRAISE</span> and <span class="special">WORSHIP</span></h4> -->
        </div>
    </div>
  </div>
   <a class="carousel-control-prev" href="#carouselExampleSlidesOnly" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleSlidesOnly" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
<!-- Carousel  Ends-->
<hr>
<h3  data-aos="zoom-in" class="section-title text-center py-4 ">BETHEL CHRISTIAN CENTER</h3>
<hr>
<section>
  <div class="media row">
  <img src="../assets/pictures/IMG.jpg" class="align-self-center  img-responsive col-xs-12 col-lg-4" alt="media image one" data-aos="fade-right">
  <div class="media-body col" data-aos="fade-left">
    <h5 class="mt-2 text-center mb-4  py-2"><span><img src="../assets/church-icon.png" class="my-2"> </span>  <br>OUR CHURCH </h5>
    <p class="px-lg-4">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
    <p class="mb-0 px-lg-4">Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
    <router-link to="About"  class="row justify-content-end m-4"><button class="media-btn">About Us</button></router-link>
  </div>
</div>
<hr >
<div class="media row">
  <div class="media-body col" data-aos="fade-right">
    <h5 class="mt-0 text-center mb-4 py-2"> <span><img src="../assets/serviceIcon.png" class="my-2"> </span> <br> OUR SERVICES </h5>
    <p class="px-lg-4">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
    <p class="mb-0 px-lg-4">Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
    <router-link to="/events"  class="row justify-content-start m-4"><button class="media-btn">See More</button></router-link>
  </div>
  <img src="../assets/pictures/fellow.jpg" class="align-self-center ml-3 img-responsive col-xs-12 col-lg-4" alt="media image one" data-aos="fade-left">
</div>
 <div class="media row">
  <img src="../assets/pictures/preacher.jpg" class="align-self-center  img-responsive col-xs-12 col-lg-4" alt="media image one" data-aos="fade-right">
  <div class="media-body col" data-aos="fade-left">
    <h5 class="mt-2 text-center mb-4  py-2"><span><img src="../assets/video-fileIcon.png" class="my-2"> </span>  <br>SERMONS</h5>
    <p class="px-lg-4">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
    <p class="mb-0 px-lg-4">Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
    <router-link to="/media"  class="row justify-content-end m-4"><button class="media-btn">View Media</button></router-link>
  </div>
</div>
<hr >
</section>
<hr>
<h3  data-aos="zoom-in" class="section-title text-center py-4">OUR PROGRAMS</h3>
<hr>
<section>
<events></events>
</section>
</div>
</template>

<script>
import navComponent from '../views/theNav'
import events from '../views/eventsView'
export default {
  name: 'Home',
  components: {navComponent, events},
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
#theNav{
  position: sticky;
}
.carousel-item{
  height: 20rem;
}
.carousel-item h4{
  font-size: 40px;
  padding: 15px 0 0 5rem ;
}
.carousel-item:nth-child(1){
  background-image: url('../assets/pictures/overheadShot.jpg');
  background-size: cover;
  background-position: right;
  background-repeat: no-repeat;
}
.carousel-item:nth-child(2){
  background-image: url('../assets/pictures/backview.jpg');
  background-size: cover;
  background-position: right;
  background-repeat: no-repeat;
}
hr{
  margin: 0 4rem;
}
.carousel-item:nth-child(3){
  background-image: url('../assets/pictures/outside.jpg');
    background-size: cover;
  background-position: right;
  background-repeat: no-repeat;
}
.carousel-item .page{
  margin-top: 10%;
}
span.special{
  font-weight: bolder;
  color: #000033;
  text-decoration: underline;
}
.media{
  margin: 5rem;
}
.media p{
  letter-spacing: 1px;
  transition: all 1s ease-in-out;
}
.media p:hover{
  color: #1010b8;
}
.media h5:hover{
  font-size: 115%;
}
.media h5{
  transition: all 1s ease-in;
    font-size:18px;
    line-height:23px;
    color:#1f1f1f;
    font-weight: 800;
}
.section-title{
    font-size:30px;
    line-height:23px;
    color:#1f1f1f;
    font-weight: 800;
}
.media h5 span > img{
  max-width: 35px;
}
.media img{
  aspect-ratio: 1/1;
  transition: transform 2s;
  max-width: 340px;
}
.media:hover img{
  transform: scale(1.1);
}
.media-body p::first-letter{
  font-size: 30px;
  font-family: Algerian;
}
.media-btn{
  padding: 5px 10px;
  color: #1f1f1f;
  transition: all 0.5s ease-in;
  border: 2px solid #1f1f1f;
}
.media-btn:hover, button:hover{
  text-decoration:none !important;
  background-color: #1f1f1f;
  color: #fff;
}
.media-btn:active{
   transform: scale(0.9);
}
</style>
