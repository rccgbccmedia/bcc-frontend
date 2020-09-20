<template>
  <div id="app" >
    <router-view/>
    <footer class="w-100 bg-dark text-light">This is the Footer</footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
footer {
  position: absolute;
  bottom: 0;
}
</style>
