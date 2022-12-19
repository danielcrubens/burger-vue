<template>
  <div>
    <Banner />
    <Popup />
  </div>
</template>

<script>
import Banner from '../components/Banner.vue'
import Popup from '../components/Popup.vue'
export default {
  name: 'Home',
  components: {
    Banner,
    Popup
  },

}
</script>

