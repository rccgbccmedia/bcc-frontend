<template>
<div>
     <div id="myModal" class="modal">
          <!-- Modal content -->
          <div class="modal-content shadow">
          <span class="close text-right" @click="closeForm" title="Close Form">&times;</span>
          <div class="alert alert-primary text-dark" role="alert" v-show="registrationSuccessful && registering" id="registrationSuccessful">
            <h4 class="alert-heading top-text">Welcome on board!</h4>
            <p class="top-text">Your registration was successful</p>
            <hr>
            <p class="mb-0">Please <span @click="registering = !registering" class="text-link">Sign In</span></p>
          </div>
           <div class="alert alert-primary text-dark" role="alert" v-show="loginSuccessful && !registering" id="loginSuccessful">
            <h4 class="alert-heading top-text">Glad to have you back!</h4>
            <p class="top-text">Your log in was successful</p>
            <!--<hr>
             <p class="mb-0">Please <span @click="registering = !registering" class="text-link">Sign In</span></p> -->
          </div>
           <div class="alert alert-warning text-dark" role="alert" v-show="loginError && !registering" id="loginError">
            <h4 class="alert-heading top-text">Sorry, an error occured!</h4>
            <p class="top-text">Please check your details and try again</p>
          </div>
          <div class="alert alert-warning text-dark" role="alert" v-show="registrationError && registering">
            <h4 class="alert-heading top-text">Sorry, an error occured!</h4>
            <p class="top-text">Please check your details and try again</p>
          </div>
          <div class="alert alert-warning text-dark" role="alert" v-show="conflictError && registering" id="registrationError">
            <h4 class="alert-heading top-text">Sorry, User with that email already exists.</h4>
            <p class="top-text">Please check your details and try again</p>
          </div>
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
            <input type="password" class="form-control" id="passwordOne" placeholder="******" v-model="registerDetails.passwordOne" required @keyup="passwordCheck(registerDetails.passwordOne, registerDetails.passwordConfirm)">
          </div>
          <div class="form-group col-md-5">
            <label for="passwordTwo">Confirm Password</label>
            <input type="password" class="form-control" id="passwordTwo" required placeholder="******" v-model="registerDetails.passwordConfirm" @keyup="passwordCheck(registerDetails.passwordOne, registerDetails.passwordConfirm)">
            <small class="text-danger"  v-show="passwordMatch">Both passwords need to match</small>
          </div>
        </div>
        <div class="form-row  justify-content-center">
          <div class="form-group col-md-5">
            <label for="phoneNumber">Phone Number</label>
            <input type="char" class="form-control" id="phoneNumber" required placeholder="+234 012 345 6789" v-model="registerDetails.phoneNumber">
            <small class="text-light">Please provide dailing code</small>
          </div>
          <div class="form-group col-md-5">
            <label for="userMail">Email</label>
            <input type="email" :class="{'form-control': true,'border-danger': mailCheck}" id="userMail" placeholder="heyUser@mail.com" v-model="registerDetails.email" required @keyup="emailCheck(registerDetails.email)">
            <small class="text-danger" v-show="mailCheck">Please provide a valid email address</small>
          </div>
        </div>
        <div class="form-row justify-content-center">
          <div class="form-group col-md-8">
          <label for="inputAddress">Address</label>
          <textarea class="form-control" id="inputAddress" placeholder="1234 Main St" v-model="registerDetails.address"></textarea>
          </div>
        </div>
        <p class="alert alert-danger" v-show="allFields">All fields are required</p>
        <button type="submit" class="btn btn-primary" @click.prevent="confirmDetails" v-if="!loading">Register</button>
          <img src="../assets/loading.gif" v-else>
        <section class="pt-4 form-footer">
          <h5>Already a member? <br> Please <span @click="registering = !registering" class="text-link">Sign In</span></h5>
        </section>
      </form>
          </div>
          <div id="loginForm" v-else data-aos="flip-left"   data-aos-duration="1500">
            <form class="text-center">
              <div>
              <section class="form-head text-dark">
                <h3 class="lead pb-4">Hey there! <br>
                  Welcome back!
                </h3>
              </section>
              <div class="form-row justify-content-center">
              <div class="form-group col-md-8 col-lg-6">
                <label for="loginEmail">Email address</label>
                <input type="email" :class="{'form-control': true, 'border-danger': mailError}" id="loginEmail" aria-describedby="emailHelp"  @keyup="emailCheck(loginDetails.mail, 'login')" v-model="loginDetails.mail">
                <small v-show="mailError" class="text-danger">Please provide a valid mail</small>
              </div>
              </div>
              <div class="form-row justify-content-center" v-if="!forgotForm">
              <div class="form-group col-md-7 col-lg-5">
                <label for="loginPassword">Password</label>
                <input type="password" class="form-control" id="loginPassword" v-model="loginDetails.password">
              </div>
              </div>
              <p class="alert alert-danger" v-show="incompleteLoginFields">Both fields are required please</p>
              <button type="submit" class="btn btn-primary" @click.prevent="confirmLogin" v-if="!loginLoading"><span v-if="forgotForm">Reset Password</span><span v-else>Login</span></button>
               <img src="../assets/loading.gif" v-else>
              <section class="pt-4 form-footer">
                <h5 >Don't have an account? <br> Please <span @click="registering = !registering" class="text-link">Register here</span></h5>
                <h6 class="text-link" @click="forgotForm = !forgotForm"><span v-if="forgotForm">Back to Login</span><span v-else>Forgot Password?</span></h6>
              </section>
              </div>
            </form>
          </div>
          </div>
     </div>
</div>
</template>

<script>

import { EventBus } from '../main.js'
import authentication from '../assets/mixins/authenticateUser'
import axios from 'axios'

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
      forgotForm: false,
      registrationSuccessful: false,
      mailError: false,
      loginError: false,
      registrationError: false,
      conflictError: false,
      loading: false,
      allFields: false,
      mailCheck: false,
      passwordMatch: false,
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
      },
      incompleteLoginFields: false,
      loginSuccessful: false,
      loginLoading: false
    }
  },
  watch: {
  },
  methods: {
    closeForm () {
      let modal = document.querySelector('#myModal')
      modal.style.display = 'none'
    },
    confirmLogin () {
      if (this.forgotForm) {
        if (this.loginDetails.mail !== '') {
          this.passwordReset()
        }
      } else {
        if (this.loginDetails.mail === '' || this.loginDetails.password === '') {
          this.incompleteLoginFields = true
        } else {
          this.incompleteLoginFields = false
          if (!this.mailError) {
            this.loginUser()
          }
        }
      }
    },
    async storeInLocalStorage (userObject, accessToken, refreshToken) {
      localStorage.setItem('user', JSON.stringify(userObject))
      localStorage.setItem('accessToken', accessToken)
      localStorage.setItem('refreshToken', refreshToken)
      let arrayStuff = []
      arrayStuff[0] = await localStorage.getItem('user')
      arrayStuff[1] = await localStorage.getItem('accessToken')
      arrayStuff[2] = await localStorage.getItem('refreshToken')
      console.table(arrayStuff)
    },
    passwordReset () {
      // console.log('Reseting Password')
      this.loginLoading = true
      axios.post('https://bcc-backend.herokuapp.com/password/reset/', {
        'email': this.loginDetails.mail
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((res) => {
        console.log(res)
        if (res.status === 200) {
          this.loginLoading = false
          this.resetText = true
        //  setTimeout(() => {
          //  this.loginSuccessful = false
          // this.closeForm()
          // Or immediately redirect to the event register form
        //  }, 3500)
        }
      }).catch((err) => {
        this.loginLoading = false
        console.log(err)
      }).finally((val) => {
        this.loginDetails.mail = ''
        this.loginDetails.password = ''
      })
    },
    loginUser () {
      this.loginLoading = true
      axios.post('https://bcc-backend.herokuapp.com/login/', {
        'email': this.loginDetails.mail,
        'password': this.loginDetails.password
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((res) => {
        console.log(res)
        if (res.status === 200) {
          this.loginLoading = false
          this.loginSuccessful = true
          this.storeInLocalStorage(res.data.user, res.data.access_token, res.data.refresh_token)
          setTimeout(() => {
            this.loginSuccessful = false
            this.closeForm()
          // Or immediately redirect to the event register form
          }, 3500)
        } else if (res.status === 400) {
          this.loginError = true
          setTimeout(() => {
            this.loginError = false
          }, 3500)
          console.log('Not working')
        }
      }).catch((err) => {
        this.loginLoading = false
        this.loginError = true
        setTimeout(() => {
          this.loginError = false
        }, 3500)
        console.log(err)
      }).finally((val) => {
        this.loginDetails.mail = ''
        this.loginDetails.password = ''
      })
    },
    emailCheck (mail, loginMailError) {
      // eslint-disable-next-line no-useless-escape
      // let regex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
      if (mail.includes('@')) {
        if (loginMailError) {
          this.mailError = false
        } else {
          this.mailCheck = false
        }
      } else {
        if (loginMailError) {
          this.mailError = true
        } else {
          this.mailCheck = true
        }
      }
    },
    passwordCheck (passwordOne, passwordTwo) {
      if (passwordOne !== passwordTwo) {
        this.passwordMatch = true
      } else {
        this.passwordMatch = false
        this.registerDetails.password = this.registerDetails.passwordOne
      }
    },
    confirmDetails () {
      if (this.registerDetails.email === '' || this.registerDetails.address === '' || this.registerDetails.password === '' || this.registerDetails.phoneNumber === '' || this.registerDetails.firstName === '' || this.registerDetails.lastName === '') {
        this.allFields = true
      } else {
        this.allFields = false
        this.passwordCheck(this.registerDetails.passwordOne, this.registerDetails.passwordConfirm)
        this.emailCheck(this.registerDetails.email)
        if (!this.passwordMatch) {
          console.log("We're good to go")
          this.registerUser()
        }
      }
    },
    registerUser () {
      this.loading = true
      axios.post('https://bcc-backend.herokuapp.com/register/', {
        'email': this.registerDetails.email,
        'address': this.registerDetails.address,
        'password': this.registerDetails.password,
        'first_name': this.registerDetails.firstName,
        'last_name': this.registerDetails.lastName,
        'phone': this.registerDetails.phoneNumber
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((res) => {
        console.log(res)
        this.loading = false
        if (res.status === 201) {
          this.registrationSuccessful = true
          setTimeout(() => {
            this.registrationSuccessful = false
            this.registering = false
          }, 3500)
        } else if (res.status === 409) {
          this.conflictError = true
          setTimeout(() => {
            this.conflictError = false
          }, 3500)
        }
        console.log(res)
      }).catch((err) => {
        this.loading = false
        this.registrationError = true
        setTimeout(() => {
          this.registrationError = false
        }, 3500)
        console.log(err)
      }).finally((val) => {
        this.registerDetails.email = ''
        this.registerDetails.address = ''
        this.registerDetails.password = ''
        this.registerDetails.firstName = ''
        this.registerDetails.lastName = ''
        this.registerDetails.phoneNumber = ''
        this.registerDetails.passwordOne = ''
        this.registerDetails.passwordConfirm = ''
      })
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
  },
  computed: {
    // allFilled: function () {
    //   // if (this.registerDetails.email === '' || this.registerDetails.address === '' || this.registerDetails.passwordOne === '' || this.registerDetails.phoneNumber === '' || this.registerDetails.firstName === '' || this.registerDetails.lastName === '' || this.registerDetails.passwordConfirm === '') {
    //   //   return true
    //   // } else {
    //   //   return false
    //   // }
    // }
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
  display: none; /* Hidden by default */
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
.form-control{
  font-size: 0.9rem;
}
#loginSuccessful{
  z-index: 5;
  background-image: url('../assets/hey1.gif');
  background-size: 90px;
  background-position: top right;
  background-origin: padding-box;
  background-repeat: no-repeat;
}
#loginError{
   z-index: 5;
}
#registrationSuccessful{
  z-index: 5;
  background-image: url('../assets/animation_500.gif');
  background-size: 60px;
  background-position: top right;
  background-origin: padding-box;
  background-repeat: no-repeat;
}
#registrationSuccessful img, #loginSuccessful img{
  z-index: 2;
  position: absolute;
  max-width: 60px;
  margin-left: 50vw;
}
.top-text{
  z-index: 3;
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
