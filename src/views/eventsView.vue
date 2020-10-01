<template>
     <div>
          <div class="row row-cols-1 row-cols-md-2 justify-content-center">
              <div class="col-sm-10 col-md-5 mb-4" data-aos="flip-left"  data-aos-duration="1500">
    <div class="card border-0" >
      <img src="../assets/pictures/prayerOne.jpg" class="card-img-top">
      <div class="card-body text-center">
        <h5 class="card-title">Midweek Celebration Service</h5>
        <p class="card-text">Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
      </div>
    </div>
  </div>
  <div class="col-sm-10 col-md-5 mb-4" data-aos="flip-left"   data-aos-duration="1500">
    <div class="card border-0" >
      <img src="../assets/pictures/motherOne.jpg" class="card-img-top">
      <div class="card-body text-center">
        <h5 class="card-title">Sunday Services</h5>
        <p class="card-text">Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
      </div>
    </div>
  </div>
   <div class="col-sm-10 col-md-5  mb-4" data-aos="flip-right"  data-aos-duration="1500">
    <div class="card border-0">
      <img src="../assets/pictures/prayerTwo.jpg" class="card-img-top" >
      <div class="card-body text-center">
        <h5 class="card-title">Thanksgiving Service</h5>
        <p class="card-text">Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
      </div>
    </div>
  </div>
  <div class="col-sm-10 col-md-5  mb-4" data-aos="flip-right"  data-aos-duration="1500">
    <div class="card border-0">
      <img src="../assets/pictures/preacher.jpg" class="card-img-top">
      <div class="card-body text-center">
        <h5 class="card-title">Special Service</h5>
        <p class="card-text">Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
      </div>
    </div>
  </div>
</div>
     </div>
</template>

<script>

export default {
  name: 'EventsView',
  data () {
    return {
    }
  },
  methods: {

  },
  created: {
  },
  computed: {

  },
  watch: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h5.card-title{
    font-size: 30px;
     color: #1a1a70;
}
p.card-text{
  transition: all 1s ease-in-out;
}
p.card-text:hover{
    color: #1010b8;
}
</style>
