<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    Subdomain <input v-model="subdomain"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  inject: ['authRepository'],
  components: {
    HelloWorld
  },
  data() {
    return {
      s_subdomain: ''
    }
  },
  computed: {
    subdomain: {
      get() {
        return this.s_subdomain
      },
      set(value) {
        this.s_subdomain = value.toLowerCase()
      }
    }
  },
  mounted() {
    this.authRepository.register('hello')
    // this.authRepository.register('eve.holt@reqres.in','pistol')
  }
}
</script>
