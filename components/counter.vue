<template>
  <h1>Counter: {{ this.$store.state.counter }}</h1>
</template>

<script>
export default {
  name: "counter",
  mounted() {
    console.log(this.$store)
  }
}
</script>

<style scoped>

</style>