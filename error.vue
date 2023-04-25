<template>
  <section class="error">
    error {{ error.statusCode }}
  </section>
</template>

<script setup>
  defineProps(['error'])
</script>

<style scoped>
.error {
  color: red;
}
</style>