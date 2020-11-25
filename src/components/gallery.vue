<template>
<div id='theBody'>
     <div class="row justify-content-center top-btns">
        <button type="button" v-bind:class="{btn:true, active: pics, col: true}" @click="pics = true">Pictures <svg id="Capa_1" enable-background="new 0 0 512 512" height="30" :fill="picColor" viewBox="0 0 512 512" width="30" xmlns="http://www.w3.org/2000/svg"><g id="XMLID_1184_"><g id="XMLID_176_"><path id="XMLID_178_"  d="m318.006 211.841c-16.814 0-33.145 3.261-48.537 9.69-5.096 2.129-7.501 7.986-5.373 13.082 2.129 5.097 7.986 7.499 13.082 5.373 12.938-5.405 26.674-8.145 40.828-8.145 58.449 0 106 47.552 106 106s-47.551 106-106 106-106-47.552-106-106c0-14.132 2.732-27.85 8.121-40.77 2.126-5.098-.283-10.953-5.38-13.079-5.094-2.123-10.953.283-13.079 5.38-6.411 15.373-9.662 31.68-9.662 48.469 0 69.477 56.523 126 126 126s126-56.523 126-126-56.523-126-126-126z"/><path id="XMLID_711_" d="m318.006 419.841c45.215 0 82-36.785 82-82s-36.785-82-82-82-82 36.785-82 82 36.786 82 82 82zm0-144c34.187 0 62 27.814 62 62s-27.813 62-62 62-62-27.813-62-62 27.813-62 62-62z"/><path id="XMLID_714_" d="m461.284 163.841h-30.42l-34.915-59.087c-1.799-3.045-5.073-4.913-8.609-4.913h-138.667c-3.537 0-6.81 1.868-8.609 4.913l-34.915 59.087h-57.149v-12c0-19.851-16.149-36-36-36s-36 16.149-36 36v12h-25.284c-27.965 0-50.716 22.751-50.716 50.717v246.566c0 27.966 22.751 50.717 50.716 50.717h410.567c27.965 0 50.716-22.751 50.716-50.717v-246.566c.001-27.966-22.751-50.717-50.715-50.717zm-206.905-44h127.254l26 44h-179.254zm-158.379 32c0-8.822 7.178-16 16-16s16 7.178 16 16v12h-32zm396 309.283c0 16.938-13.779 30.717-30.716 30.717h-410.568c-16.937 0-30.716-13.78-30.716-30.717v-246.566c0-16.938 13.779-30.717 30.716-30.717h410.567c16.937 0 30.716 13.779 30.716 30.717v246.566z"/><path id="XMLID_717_" d="m318.006 318.341c10.753 0 19.5 8.748 19.5 19.5 0 5.523 4.477 10 10 10s10-4.477 10-10c0-21.78-17.72-39.5-39.5-39.5-5.523 0-10 4.478-10 10s4.477 10 10 10z"/><path id="XMLID_718_" d="m318.006 73.532c5.523 0 10-4.478 10-10v-53.373c0-5.522-4.477-10-10-10s-10 4.477-10 10v53.373c0 5.523 4.477 10 10 10z"/><path id="XMLID_719_" d="m365.591 73.532c2.559 0 5.119-.977 7.071-2.929l36.691-36.691c3.905-3.905 3.905-10.237-.001-14.143-3.905-3.904-10.237-3.904-14.142 0l-36.69 36.692c-3.905 3.905-3.905 10.237 0 14.143 1.953 1.952 4.512 2.928 7.071 2.928z"/><path id="XMLID_720_" d="m263.35 70.604c1.953 1.952 4.512 2.929 7.071 2.929s5.119-.977 7.071-2.929c3.905-3.905 3.906-10.237.001-14.143l-36.691-36.691c-3.905-3.903-10.237-3.904-14.142 0-3.905 3.905-3.906 10.237-.001 14.143z"/><path id="XMLID_730_" d="m138 245.841h-52c-5.523 0-10 4.478-10 10 0 5.523 4.477 10 10 10h52c5.523 0 10-4.477 10-10s-4.477-10-10-10z"/><path id="XMLID_731_" d="m235.96 265.84c2.63 0 5.21-1.07 7.07-2.93s2.93-4.431 2.93-7.07c0-2.63-1.07-5.21-2.93-7.07-1.86-1.859-4.44-2.93-7.07-2.93s-5.21 1.07-7.07 2.93c-1.87 1.86-2.93 4.441-2.93 7.07 0 2.63 1.06 5.21 2.93 7.07 1.86 1.86 4.43 2.93 7.07 2.93z"/></g></g></svg> </button>
        <button type="button" v-bind:class="{btn:true, active: !pics, col: true}" @click="pics = false">Sermons
          <span>
<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width='30px' :fill="vidColor" height='30px' viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
<g>
<g>
<path d="M258.53,71.003l-0.724-0.002c-0.01,0-0.018,0-0.028,0c-5.51,0-9.985,4.459-10,9.973c0,0.008,0,0.016,0,0.024
c-0.002,5.512,4.458,9.988,9.973,10.003l0.725,0.002c0.009,0,0.018,0,0.027,0c5.51,0,9.985-4.459,10-9.973
c0-0.008,0-0.016,0-0.024C268.505,75.494,264.045,71.018,258.53,71.003z"/>
</g>
</g>
<g>
<g>
<path d="M501.391,133.108c-6.566-24.965-25.935-44.626-50.542-51.31c-25.375-6.911-96.12-9.456-151-10.373
c-5.49-0.075-10.074,4.31-10.166,9.832c-0.092,5.522,4.31,10.074,9.832,10.166c75.96,1.27,127.838,4.705,146.085,9.674
c17.73,4.816,31.697,19.031,36.45,37.104c9.83,37.283,9.95,116.997,9.95,117.797c0,0.801-0.12,80.515-9.951,117.804
c-4.752,18.067-18.719,32.282-36.455,37.1c-36.648,9.98-188.069,10.097-189.594,10.097c-1.525,0-152.946-0.118-189.6-10.099
c-17.73-4.816-31.697-19.031-36.45-37.104C20.12,336.513,20,256.799,20,255.999c0-0.801,0.12-80.515,9.951-117.803
c4.752-18.067,18.719-32.282,36.455-37.1c18.647-5.078,72.059-8.537,150.399-9.742c5.522-0.084,9.929-4.63,9.845-10.152
c-0.085-5.522-4.645-9.893-10.153-9.845c-56.569,0.869-129.439,3.387-155.34,10.44c-24.613,6.685-43.982,26.347-50.546,51.306
C0.121,172.891,0,252.624,0,255.999s0.121,83.108,10.609,122.89c6.566,24.965,25.935,44.626,50.542,51.31
c39.208,10.677,188.513,10.8,194.849,10.8s155.641-0.123,194.843-10.798c24.613-6.685,43.982-26.347,50.546-51.306
C511.879,339.107,512,259.374,512,255.999S511.879,172.891,501.391,133.108z"/>
</g>
</g>
<g>
<g>
<path d="M58,229.521c-5.523,0-10,4.477-10,10v81.5c0,5.523,4.477,10,10,10s10-4.477,10-10v-81.5
C68,233.998,63.523,229.521,58,229.521z"/>
</g>
</g>
<g>
<g>
<path d="M58,184.021c-5.523,0-10,4.477-10,10v0.118c0,5.523,4.477,10,10,10s10-4.477,10-10v-0.118
C68,188.498,63.523,184.021,58,184.021z"/>
</g>
</g>
<g>
<g>
<path d="M337.106,248.873l-124-72c-3.094-1.797-6.911-1.804-10.011-0.019c-3.1,1.785-5.011,5.09-5.011,8.667v144
c0,3.578,1.911,6.882,5.011,8.667c1.544,0.889,3.266,1.333,4.989,1.333c1.735,0,3.47-0.45,5.022-1.352l124-72
c3.083-1.79,4.979-5.084,4.979-8.648C342.085,253.957,340.188,250.663,337.106,248.873z M218.084,312.151v-109.26l94.085,54.63
L218.084,312.151z"/>
</g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>
</span>
</button>
     </div>
     <div v-if="pics" class="picSection">
       <div class="row">
         <div class="col-sm-12 col-md-8 imgShow border-right">
           <div class="row justify-content-center">
             <img :src='selectedImageSrc' class="shadow rounded mt-4 mb-4" data-aos="slide-left"  data-aos-duration="1500">
           </div>
         </div>
         <div class="col imgScroller border-left">
           <div class="row row-cols-sm-1 row-cols-lg-3 mobileScroller">
            <div v-for="(image, index) in galleryImages" :key="index" class=" p-sm-4">
              <img :src='formatImageLink(image.url)' :class="{selected: image.selected}" @click="imageClicked(image)">
            </div>
           </div>
         </div>
       </div>
     </div>
     <div class="videosTab container-fluid justify-content-center pt-4" v-else>
       <div class="row row-cols-sm-1 row-cols-lg-2  justify-content-center">
                  <div v-for="video in theVideos" :key="video.id" class="justify-content-center p-sm-4">
         <iframe class="col-sm-12" height="300px" :src="formatVideoLink(video.url)" allow="fullscreen" allowfullscreen>
</iframe>
       </div>
       </div>
     </div>
     <!-- Mobile Section -->
</div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Gallery',
  components: {},
  data () {
    return {
      pics: false,
      pic: 'prayerOne',
      theVideos: [],
      selectedImageSrc: '1B7j0_Qm5aOZUYvE8a4rVx4Yr8cbAzHW6',
      galleryImages: [
      ]
    }
  },
  methods: {
    imageClicked (image) {
      this.selectedImageSrc = this.formatImageLink(image.url)
      this.galleryImages.map(el => {
        if (el.id === image.id) {
          el.selected = true
        } else {
          el.selected = false
        }
      })
    },
    formatVideoLink (oldLink) {
      let rems = oldLink.split('=')
      let val = rems[1].split('&')
      return `https://www.youtube.com/embed/${val[0]}`
    },
    formatImageLink (oldLink) {
      let rems = oldLink.split('/')
      return `https://drive.google.com/uc?id=${rems[5]}`
    },
    fetchVideos () {
      axios.get('https://bcc-backend.herokuapp.com/videos/all/').then((val) => {
        console.log(val)
        if (val.status === 200) {
          this.theVideos = val.data
        }
      }).catch((err) => {
        console.log(err)
      })
    },
    fetchImages () {
      axios.get('https://bcc-backend.herokuapp.com/images/all/').then((val) => {
        console.log(val)
        if (val.status === 200) {
          this.galleryImages = val.data
          this.galleryImages.map(img => {
            img.selected = false
          })
          this.imageClicked(this.galleryImages[0])
        }
      }).catch((err) => {
        console.log(err)
      })
    }
  },
  beforeMount () {
    this.fetchVideos()
    this.fetchImages()
  },
  computed: {
    picColor: function () {
      let color = '#1010b8'
      if (this.pics) {
        color = '#1010b8'
      } else {
        color = '#000'
      }
      return color
    },
    // selectedImageSrc: function () {
    //   return `static/img/prayerTwo.jpg`
    // },
    vidColor: function () {
      let color = '#000'
      if (this.pics) {
        color = '#000'
      } else {
        color = '#1010b8'
      }
      return color
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#theBody{
  overflow-x: hidden;
}
.top-btns{
  position: -webkit-sticky;
  position: sticky;
  top: 0;
}
.picSection{
  background:  linear-gradient(to right, #efeff1, #bcbcf5, #c3c3e6, #b5b5f0fd);
}
.top-btns button.active, .videosTab, .picSection{
     background:  linear-gradient(to right, #efeff1, #bcbcf5, #c3c3e6, #b5b5f0fd);
}
.imgShow{
  justify-items: flex-end;
}
.imgScroller{
  max-height: 80vh;
  overflow-y: scroll;
  scroll-behavior: smooth;
  overflow-x: hidden;
}
img.selected{
  border: 4px solid #4b4bbd;
}
.imgShow img{
  max-width: 60vw;
  max-height: 80vh;
}
.imgScroller img{
  max-width: 135px;
  transition: all 0.5s ease-in;
  border-radius: 6px;
}
.imgScroller img:hover{
  transform: scale(1.2);
}
.active{
  color: #1010b8;
}
@media only screen and (max-width: 810px){
  div.imgShow{
    border: 0 !important;
    margin-left: 9rem;
  }
 div.imgScroller{
    position: absolute;
    opacity: 0.6;
    scroll-snap-type: proximity;
    right: 0 !important;
    border: 0 !important;
  }
  div.imgScroller:active{
    opacity: 1;
  }
}
@media only screen and (max-width: 500px){
  div.imgScroller img{
    max-width: 65px;
    padding-right: 10px;
  }
  div.imgShow{
    margin-top: 6.3rem;
    margin-left: 0.5rem;
  }
  .imgShow img{
  max-width: 80vw;
  max-height: 80vh;
}
  img.selected{
  border: 2px solid #4b4bbd;
}
  div.mobileScroller {
    padding-left: 5px;
    padding-right: 5px;
    margin-top: 4px;
    max-height: 77px;
   overflow:scroll;
    white-space: nowrap;
    scroll-margin: 5px;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
  }
}
</style>
