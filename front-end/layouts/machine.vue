<template>
  <div class="container">
    <nav-bar> </nav-bar>
  </div>
</template>

<script>
import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(VueMaterial)

import NavBar from '@/components/Nav'

export default {
    components: {
        NavBar
    }
}
</script>


