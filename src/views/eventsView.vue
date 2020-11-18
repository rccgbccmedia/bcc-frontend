<template>
     <div>
       <div class="alert alert-success shadow py-4" id="successAlert" role="alert" v-show="success">
          <span class="close text-right" @click="closeAlert" title="Close Alert">&times;</span>
          You've successfully registered for this event, please check your mail for more info
        </div>
        <div class="alert alert-danger shadow py-4" id="failAlert" role="alert" v-show="failed">
          <span class="close text-right" @click="closeAlert" title="Close Alert">&times;</span>
          Sorry, an error occured, please try again. <br>
          If this persists, please sign in again.
        </div>
        <div class="alert alert-danger shadow py-4" id="loginAlert" role="alert" v-show="login">
          <span class="close text-right" @click="closeAlert" title="Close Alert">&times;</span>
          Sorry, an error occured, please sign in again
        </div>
          <div class="row row-cols-1 row-cols-md-2 justify-content-center">
            <template v-for="event in allEvents.slice(0, theEnd)">
               <div class="col-sm-10 col-md-5 mb-4" data-aos="flip-left"  data-aos-duration="1500" :key="event.id">
    <div class="card border-0" >
      <img src="https://drive.google.com/uc?id=1u4YrtR6jOX1FoTvgMPuNu5CpJDr-Lrpl" class="card-img-top">
      <div class="card-body text-center">
        <h5 class="card-title">{{event.name}}</h5>
        <p class="card-text">{{event.description}}</p>
        <p class="card-text">{{event.venue}}</p>
        <p class="card-text">{{event.time | formatDate}}</p>
        <button class="col-sm-3 justify-content-center card-button" @click="eventRegister(event)">Register</button>
      </div>

    </div>
  </div>
            </template>
</div>
<userModal></userModal>
     </div>
</template>

<script>
import userModal from '../views/userModal'
import { EventBus } from '../main'
import authentication from '../assets/mixins/authenticateUser'
import axios from 'axios'
import moment from 'moment'
export default {
  name: 'EventsView',
  mixins: [authentication],
  components: {
    userModal
  },
  props: {
    limit: {
      type: Boolean
    }
  },
  data () {
    return {
      theDetails: localStorage.getItem('user'),
      success: false,
      failed: false,
      login: false,
      allEvents: []
    }
  },
  filters: {
    formatDate: function (value) {
      if (!value) return ''
      let theFullDate = value.split('T')
      let theTime = theFullDate[1].split(':')
      theTime.pop()
      return moment(theFullDate[0]).format('LL') + ' | ' + moment(`${parseInt(theTime[0])},${parseInt(theTime[1])}`, 'hh, mm').format('LT')
    }
  },
  methods: {
    async eventRegister (eventData) {
      console.log(localStorage.getItem('user'))
      if (!localStorage.getItem('user')) {
        EventBus.$emit('openModal', eventData)
      } else {
        this.registerUser(eventData)
      }
    },
    closeAlert () {
      this.success = false
      this.failed = false
      this.login = false
    },
    fetchEvents () {
      axios.get('https://bcc-backend.herokuapp.com/events/all/').then(val => {
        console.log(val)
        if (val.status === 200) {
          this.allEvents = val.data
        }
      }).catch((err) => {
        console.log(err)
      })
    },
    registerUser (eventData) {
      console.log('rsvp in process')
      console.log(localStorage.getItem('accessToken'))
      axios.post(`https://bcc-backend.herokuapp.com/events/${eventData.id}/rsvp/`, {}, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      }).then(val => {
        console.log(val)
        if (val.status === 201) {
          this.success = true
          // setTimeout(() => {
          //   this.success = false
          // }, 4399)
        }
      }).catch((err) => {
        console.log({err})
        if (err.request.status == '401') {
          this.login = true
          setTimeout(() => {
            this.login = false
            EventBus.$emit('openModal', eventData)
          }, 3290)
        } else {
          this.failed = true

          // setTimeout(() => {
          //   this.failed = false
          // }, 2090)
        }
      }).finally((val) => {
        // this.success = true
        // setTimeout(() => {
        //   this.success = false
        // }, 2500)
      })
    }
  },
  created: {
  },
  beforeMount () {
    this.fetchEvents()
  },
  computed: {
    signedIn: function () {
      let value = false
      let user = localStorage.getItem('user')
      if (user) {
        value = true
      } else {
        value = false
      }
      return value
    },
    theEnd: function () {
      if (this.limit) {
        return this.limit
      } else {
        return this.allEvents.length
      }
    }
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
#successAlert, #failAlert, #loginAlert{
  position: absolute;
  z-index: 20;
  margin: 30vh 20vw;
  width: 45vw;
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
