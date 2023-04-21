<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
</script>

<template>
  <NavBar />
  <div class="container mx-auto px-4">
    <RouterView />
  </div>
</template>