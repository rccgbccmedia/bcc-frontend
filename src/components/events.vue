<template>
<div>
     <navComponent></navComponent>
     <div class="jumbotron mb-4" data-aos="zoom-in"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1500">
  <div class="container text-right">
    <h1 class="display-4">Our Programs</h1>
    <p class="lead ml-4 pl-4">Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.  </p>
  </div>
</div>
<div class="my-4">
  <events></events>
</div>
</div>
</template>

<script>
import navComponent from '../views/theNav'
import events from '../views/eventsView'

export default {
  name: 'Events',
  components: {navComponent, events},
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
