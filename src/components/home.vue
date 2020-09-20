<template>
<div>
     <navComponent></navComponent>
     <h3 class="display-3">You Are Home</h3>
</div>
</template>

<script>
import navComponent from '../views/theNav'
export default {
  name: 'Home',
  components: {navComponent},
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
