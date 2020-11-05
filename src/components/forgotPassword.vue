<template>
<div id='theBody'>
    <div class="jumbotron mx-auto" data-aos="zoom-out"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1500">
  <div class="container text-left">
    <div class="alert alert-primary text-dark" role="alert" v-show="resetSuccessful" id="resetSuccessful">
            <h4 class="alert-heading top-text">Password successfully reset!</h4>
            <hr>
            <p class="mb-0">Please proceed to <span @click="sendToSignIn" class="text-link">Sign In</span></p>
      </div>
      <div class="alert alert-warning text-dark" role="alert" v-show="errorMsg" id="registrationError">
            <h4 class="alert-heading top-text">Sorry, an error occured.</h4>
            <p class="top-text">Please try again</p>
        </div>
    <form class="text-center">
      <section class="form-head text-dark">
                <h3 class="pb-4">Hello! <br>
                  Please create a new password!
                </h3>
        </section>
      <div class="row justify-content-center my-auto">
          <div class="form-group col-md-5 text-center">
            <label for="passwordOne">Input new password</label>
            <input type="password" class="form-control" id="passwordOne" placeholder="******" v-model="registerDetails.passwordOne" required @keyup="passwordCheck(registerDetails.passwordOne, registerDetails.passwordConfirm)">
          </div>
          <br>
          <div class="form-group col-md-5">
            <label for="passwordTwo">Confirm New Password</label>
            <input type="password" class="form-control" id="passwordTwo" required placeholder="******" v-model="registerDetails.passwordConfirm" @keyup="passwordCheck(registerDetails.passwordOne, registerDetails.passwordConfirm)">
            <small class="text-danger"  v-show="passwordMatch">Both passwords need to match</small>
          </div>
        </div>
          <button type="submit" class="btn btn-sm btn-primary mt-4" @click.prevent="resetPassword" v-if="!serverRequest">Reset Password</button>
           <img class="mt-4" src="../assets/loading.gif" v-else>
    </form>
  </div>
</div>
</div>
</template>

<script>
// import axios from 'axios'
export default {
  name: 'Forgot',
  components: {},
  data () {
    return {
      passwordMatch: false,
      serverRequest: false,
      resetSuccessful: false,
      registerDetails: {
        passwordOne: '',
        passwordConfirm: ''
      },
      errorMsg: false
    }
  },
  methods: {
    passwordCheck (passwordOne, passwordTwo) {
      if (passwordOne !== passwordTwo) {
        this.passwordMatch = true
      } else {
        this.passwordMatch = false
      }
    },
    sendToSignIn () {
      this.$router.push('Events')
    }
    // resetPassword (){
    // }
  },
  computed: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.jumbotron{
  margin: 0rem 7rem;
  background-image:  url('../assets/church-logo.png'), linear-gradient(to right, #e5e5f5, #bcbcf5, #8282f8);
  background-blend-mode: soft-light, normal;
  background-position-y: center;
  background-size: 20%, 100%;
  background-repeat: no-repeat;
}
#resetSuccessful{
  z-index: 5;
  background-image: url('../assets/animation_500.gif');
  background-size: 60px;
  background-position: top right;
  background-origin: padding-box;
  background-repeat: no-repeat;
}
#resetSuccessful img, #loginSuccessful img{
  z-index: 2;
  position: absolute;
  max-width: 50px;
  margin-left: 50vw;
}

.text-link{
  color: #ffffff;
  transition: all 0.5s ease-in;
}
</style>
