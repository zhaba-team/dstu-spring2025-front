<script setup>
import {RouterView} from "vue-router";
import Header from "./components/Header/Header.vue";
</script>

<template>
  <Header />
  <div class="flex flex-col items-center justify-center h-full">
    <RouterView />
  </div>
</template>

<style scoped>
</style>
