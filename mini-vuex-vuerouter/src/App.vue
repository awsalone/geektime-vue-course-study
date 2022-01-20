<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { useStore } from './store/gvuex'
import { computed } from 'vue'

const store = useStore()
store.commit('testCommit')
console.log(store)

</script>

<template>
11
</template>

<style>

</style>
