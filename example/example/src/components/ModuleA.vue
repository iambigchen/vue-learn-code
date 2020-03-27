<template>
  <div>
    <h1>moduleA{{count}}</h1>
    <button @click="change">moduleA click</button>
  </div>
</template>

<script>
export default {
  methods: {
    change () {
      debugger
      this.$store.commit('incrementA')
    }
  },
  computed: {
    count () {
      debugger
      return this.$store.state.a.countA
    }
  }
}
</script>

<style>

</style>
