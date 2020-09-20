<template>
<div>
     <nav class="navbar navbar-expand-lg navbar-dark text-light bg-dark">
  <a class="navbar-brand" href="#">
       <img src="../assets/church-logo.png">
  </a>
      <p class="d-xs-none d-lg-block">THE REDEEMED <br> CHRISTIAN CHURCH OF GOD</p>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item">
          <router-link to="/" class="nav-link">Home</router-link>
      </li>
      <li class="nav-item">
          <router-link to="About"  class="nav-link">About Us</router-link>
      </li>
      <li class="nav-item">
           <router-link to="/gallery"  class="nav-link">Gallery</router-link>
      </li>
    </ul>
  </div>
</nav>
</div>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.router-link-exact-active{
     color: #fff !important;
     font-weight: bolder;
}
li.nav-item:hover{
     border-bottom: 3px solid #fff !important;
}
.navbar-brand > img {
     max-width: 90px;
}
.navbar > p{
     font-weight: 500;
     font-family: "Berlin Sans FB";
     letter-spacing: 1px;
}
</style>
