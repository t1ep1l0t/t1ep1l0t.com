<template>
  <h1>home</h1>
</template>

<script setup>
useHead({
  title: 'Home',
  meta: [
    {name: 'description', content: 'Home desc'}
  ],
})
</script>

<script>
import {mapMutations, mapState} from "vuex";

export default {
  computed: {
    ...mapState({
      counter: state => state.counter
    })
  },
  methods: {
    ...mapMutations({
      set_counter: commit => commit('set_counter')
    })
  }
}
</script>