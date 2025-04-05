<script setup>
import {Avatar, Button, Popover} from "primevue";
import useRegistrationStore from "../../store/useRegistrationStore.js";
import {ref} from "vue";
import router from "../../router.js";
import {storeToRefs} from "pinia";

</script>

<template>
  <header class="header">
    <h1 class="title">
      <img src="../../assets/logo.svg" alt="logo" />
    </h1>
  </header>
</template>

<style scoped>
.header {
  @apply w-full flex justify-between items-center;
}

.title {
  @apply text-2xl;
}

.nav-list {
  @apply flex gap-8;
}

.avatar-wrapper {
  @apply flex items-center gap-5;
}

.nav-item {
  @apply text-black hover:text-indigo-500 hover:underline;
}
</style>
