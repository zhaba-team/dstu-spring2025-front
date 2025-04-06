<script setup>
import router from "../router.js";
import Button from "primevue/button";

function onMain() {
  router.push({
    name: "Main",
  });
}
</script>

<template>
  <div class="not-found">
    <div>
      Убедитесь, что адрес введен правильно.
    </div>
    <Button label="На главную страницу" severity="secondary" @click="onMain" />
  </div>
</template>

<style scoped>
.not-found {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
}
</style>
