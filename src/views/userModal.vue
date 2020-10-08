<template>
<div>
     <div id="myModal" class="modal">
          <!-- Modal content -->
          <div class="modal-content">
          <span class="close text-right" @click="closeForm" title="Close Form">&times;</span>
          <div id='registrationForm' v-if="registering" data-aos="flip-right"   data-aos-duration="1500">
        <form class="text-center">
          <section class="form-head text-dark">
            <h3 class="lead pb-4">Glad to have you! <br>
              Please register in order to attend
            </h3>
          </section>
        <div class="form-row justify-content-center">
          <div class="form-group col-md-5 w-xs-100">
            <label for="firstName">First Name</label>
            <input type="text" class="form-control" id="firstName" placeholder="Mary" v-model="registerDetails.firstName" required>
          </div>
          <div class="form-group col-md-5 w-xs-100">
            <label for="lastName">Last Name</label>
            <input type="text" class="form-control" id="lastName" placeholder="Jane" v-model="registerDetails.lastName" required>
          </div>
        </div>
        <div class="form-row justify-content-center">
          <div class="form-group col-md-5">
            <label for="passwordOne">Password</label>
            <input type="password" class="form-control" id="passwordOne" placeholder="******" v-model="registerDetails.passwordOne" required>
          </div>
          <div class="form-group col-md-5">
            <label for="passwordTwo">Confirm Password</label>
            <input type="password" class="form-control" id="passwordTwo" required placeholder="******" v-model="registerDetails.passwordConfirm">
          </div>
        </div>
        <div class="form-row  justify-content-center">
          <div class="form-group col-md-5">
            <label for="phoneNumber">Phone Number</label>
            <input type="number" class="form-control" id="phoneNumber" required placeholder="+234 012 345 6789" v-model="registerDetails.phoneNumber">
          </div>
          <div class="form-group col-md-5">
            <label for="userMail">Email</label>
            <input type="email" class="form-control" id="userMail" placeholder="heyUser@mail.com" v-model="registerDetails.email" required>
          </div>
        </div>
        <div class="form-row justify-content-center">
          <div class="form-group col-md-8">
          <label for="inputAddress">Address</label>
          <textarea class="form-control" id="inputAddress" placeholder="1234 Main St" v-model="registerDetails.address"></textarea>
          </div>
        </div>
        <button type="submit" class="btn btn-primary" @click.prevent="registerUser">Register</button>
        <section class="pt-4 form-footer">
          <h5>Already a member? <br> Please <span @click="registering = !registering" class="text-link">Sign In</span></h5>
        </section>
      </form>
          </div>
          <div id="loginForm" v-else data-aos="flip-left"   data-aos-duration="1500">
            <form class="text-center">
              <section class="form-head text-dark">
                <h3 class="lead pb-4">Hey there! <br>
                  Welcome back!
                </h3>
              </section>
              <div class="form-row justify-content-center">
              <div class="form-group col-md-8 col-lg-6">
                <label for="loginEmail">Email address</label>
                <input type="email" class="form-control" id="loginEmail" aria-describedby="emailHelp" v-model="loginDetails.mail">
              </div>
              </div>
              <div class="form-row justify-content-center">
              <div class="form-group col-md-7 col-lg-5">
                <label for="loginPassword">Password</label>
                <input type="password" class="form-control" id="loginPassword" v-model="loginDetails.password">
              </div>
              </div>
              <button type="submit" class="btn btn-primary" @click.prevent="loginUser">Login</button>
              <section class="pt-4 form-footer">
                <h5>Don't have an account? <br> Please <span @click="registering = !registering" class="text-link">Register here</span></h5>
              </section>
            </form>
          </div>
          </div>
     </div>
</div>
</template>

<script>
import { EventBus } from '../main.js'
import authentication from '../assets/mixins/authenticateUser'
export default {
  name: 'Modal',
  components: {},
  mixins: [authentication],
  props: {
    isModalOpen: {
      type: Boolean
    }
  },
  data () {
    return {
      registering: true,
      registerDetails: {
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        phoneNumber: '',
        passwordOne: '',
        passwordConfirm: '',
        password: ''
      },
      loginDetails: {
        mail: '',
        password: ''
      }
    }
  },
  methods: {
    closeForm () {
      let modal = document.querySelector('#myModal')
      modal.style.display = 'none'
    }
  },
  created () {
  },
  mounted () {
    let modal = document.getElementById('myModal')
    // Listening for when the register modal is called
    EventBus.$on('openModal', eventData => {
      modal.style.display = 'block'
    })
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      // eslint-disable-next-line eqeqeq
      if (event.target == modal) {
        modal.style.display = 'none'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
section h3 {
  font-weight: bolder;
  margin-top: -25px;
}

/* The Modal (background) */
.modal {
  display: block; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

/* Modal Content */
.modal-content {
  background-image:  url('../assets/church-logo.png'), linear-gradient(to left, #e5e5f5, #bcbcf5, #8282f8);
  background-blend-mode: soft-light, normal;
  background-position-y: top;
  background-size: 20%, 100%;
  background-repeat: no-repeat;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 60%;
}

/* The Close Button */
.close {
  color: #aaaaaa;
  font-size: 58px;
  font-weight: lighter;
}

.text-link{
  color: #ffffff;
  transition: all 0.5s ease-in;
}
.close:hover,
.close:focus,
.text-link:hover,
.text-link:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
@media only screen and (max-width: 770px){
  .modal-content{
    background-size: 30%, 100%;
    width: 80%;
  }
}
@media only screen and (max-width: 500px){
  .modal-content{
    background-size: 50%, 100%;
  }
}
</style>
