<template>
     <div>
          <div class="row row-cols-1 row-cols-md-2 justify-content-center">
              <div class="col-sm-10 col-md-5 mb-4" data-aos="flip-left"  data-aos-duration="1500">
    <div class="card border-0" >
      <img src="../assets/pictures/prayerOne.jpg" class="card-img-top">
      <div class="card-body text-center">
        <h5 class="card-title">Midweek Celebration Service</h5>
        <p class="card-text">Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
        <button class="col-sm-3 justify-content-center card-button" @click="eventRegister('eventName')">Register</button>
      </div>

    </div>
  </div>
  <div class="col-sm-10 col-md-5 mb-4" data-aos="flip-left"   data-aos-duration="1500">
    <div class="card border-0" >
      <img src="../assets/pictures/motherOne.jpg" class="card-img-top">
      <div class="card-body text-center">
        <h5 class="card-title">Sunday Services</h5>
        <p class="card-text">Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
          <button class="col-sm-3 justify-content-center card-button" @click="eventRegister('eventName')">Register</button>
      </div>
    </div>
  </div>
   <div class="col-sm-10 col-md-5  mb-4" data-aos="flip-right"  data-aos-duration="1500">
    <div class="card border-0">
      <img src="../assets/pictures/prayerTwo.jpg" class="card-img-top" >
      <div class="card-body text-center">
        <h5 class="card-title">Thanksgiving Service</h5>
        <p class="card-text">Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
          <button class="col-sm-3 justify-content-center card-button" @click="eventRegister('eventName')">Register</button>
      </div>
    </div>
  </div>
  <div class="col-sm-10 col-md-5  mb-4" data-aos="flip-right"  data-aos-duration="1500">
    <div class="card border-0">
      <img src="../assets/pictures/preacher.jpg" class="card-img-top">
      <div class="card-body text-center">
        <h5 class="card-title">Special Service</h5>
        <p class="card-text">Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
          <button class="col-sm-3 justify-content-center card-button" @click="eventRegister('eventName')">Register</button>
      </div>
    </div>
  </div>
</div>
<userModal></userModal>
     </div>
</template>

<script>
import userModal from '../views/userModal'
import { EventBus } from '../main'
import authentication from '../assets/mixins/authenticateUser'

export default {
  name: 'EventsView',
  mixins: [authentication],
  components: {
    userModal
  },
  data () {
    return {
      signedIn: false
    }
  },
  methods: {
    eventRegister (eventData) {
      if (this.signedIn === false) {
        EventBus.$emit('openModal', eventData)
      } else {
        this.registerUser(eventData)
      }
    },
    registerUser (eventData) {
    }
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
.card-body .card-button{
  position: absolute;
  box-sizing: content-box;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  padding: 5px 10px;
  color: #1f1f1f;
  transition: all 0.5s ease-in;
  border: 2px solid #1f1f1f;
}
.card img{
   transition: .5s ease;
}
.card:hover img{
  opacity: 0.3 !important;
}
.card:hover .card-button{
  opacity: 1;
}
.card-button:hover{
   text-decoration:none !important;
  background-color: #1f1f1f;
  color: #fff;
}
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
@media only screen and (max-width: 770px){
  .card-body .card-button{
    top: 30%;
  }
}
</style>
