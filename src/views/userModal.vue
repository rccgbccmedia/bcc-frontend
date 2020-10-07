<template>
<div>
     <div id="myModal" class="modal">
          <!-- Modal content -->
          <div class="modal-content">
          <span class="close" @click="closeForm">&times;</span>
          <p>Some text in the Modal..</p>
          </div>
     </div>
</div>
</template>

<script>
import { eventBus } from '../main'
export default {
  name: 'Modal',
  components: {},
  data () {
    return {
    }
  },
  methods: {
    closeForm () {
      let modal = document.querySelector('#myModal')
      modal.style.display = 'none'
    }
  },
  mounted () {
    let modal = document.getElementById('myModal')

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      // eslint-disable-next-line eqeqeq
      if (event.target == modal) {
        modal.style.display = 'none'
      }
    }
    // Listening for when the register modal is called
    eventBus.$on('openModal', (eventData) => {
      alert('Modal Opening')
      modal.style.display = 'block'
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

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
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}

/* The Close Button */
.close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
</style>
