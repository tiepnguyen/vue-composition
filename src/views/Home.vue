<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld :msg="msg" />
  </div>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'
import HelloWorld from '@/components/HelloWorld.vue'
import { welcome } from '@/composables/greeting'

export default createComponent({
  name: 'home',
  components: { HelloWorld },
  setup() {
    return {
      smg: welcome('Vue.js App')
    }
  }
})
</script>
