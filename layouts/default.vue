<template>
  <div class="layout">
    <navbar />
    <div class="container">
      <div class="page">
        <nuxt-page />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "default"
}
</script>

<style scoped lang="scss">
.layout {
  min-height: 100vh;
  position: relative;
}
</style>