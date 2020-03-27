<template>
  <div id="App">
    {{message}}
    <button @click="changeMsg">按钮</button>
    <!-- <Hello /> -->
  </div>
</template>

<script>
// import Hello from './components/HelloWorld.vue'
export default {
  name: 'App',
  data () {
    return {
      message: 1
    }
  },
  mounted () {
    console.log(1233333)
    // setTimeout(() => {
    //   this.message = 'Hello World!'
    // }, 1000)
  },
  methods: {
    changeMsg () {
      console.log(1234)
      this.message = 'Hello World!'
    }
  },
  components: {
    // Hello
  }
}
</script>
