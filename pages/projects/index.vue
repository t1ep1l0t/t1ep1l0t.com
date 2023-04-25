<template>
  <h1>projects</h1>
  <nuxt-link to="/">home</nuxt-link>
  <ul>
    <li v-for="project of 5" :key="project">
      <nuxt-link :to="`/projects/${project}`">{{ project }}</nuxt-link>
    </li>
  </ul>
</template>

<script lang="ts">
  export default {

  }
</script>

<style scoped>

</style>