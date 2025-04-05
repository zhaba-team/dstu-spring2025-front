<script setup>
import {RouterView} from "vue-router";
import Header from "./components/Header/Header.vue";
</script>

<template>
  <Header />
  <div class="flex flex-col items-center w-full h-full pt-[40px]">
    <RouterView />
  </div>
</template>

<style scoped>
</style>
