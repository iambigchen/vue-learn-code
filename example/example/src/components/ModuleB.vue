<template>
  <div>
    <h1>moduleB{{count}}</h1>
    <button @click="change">moduleB click</button>
    <h1>moduleA{{countA}}</h1>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  methods: {
    change () {
      debugger
      this.$store.dispatch('increment')
    }
  },
  computed: {
    ...mapGetters({
      countA: 'getAState',
      count: 'getBState'
    })
    // countA () {
    //   return this.$store.state.a.countA
    // },
    // count () {
    //   return this.$store.state.b.countB
    // }
  }
}
</script>

<style>

</style>
