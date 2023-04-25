<template>
  <div>
    <nuxt-link to="/">home</nuxt-link>
    <h1>project {{ $route.params.id }}</h1>
  </div>
</template>

<script>
export default {
  name: "_id"
}
</script>

<style scoped>

</style>