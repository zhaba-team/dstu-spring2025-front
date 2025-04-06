<script setup>
import {onMounted, ref} from "vue";
import Button from "primevue/button";
import Dialog from 'primevue/dialog';
import axiosClient from "../../axios/axiosClient.js";

const visible = ref(false);

const characteristics = ref({});

const getData = async () => {
  const { data } = await axiosClient.get('/characteristics');
  console.log(data);
  characteristics.value = data;
};

onMounted(async () => {
  await getData();
});

</script>

<template>
  <header class="header">
    <h1 class="title">
      <img src="../../assets/logo.svg" alt="logo" />
    </h1>
    <Button label="Характеристики" severity="secondary" @click="visible = true" />
    <Dialog v-model:visible="visible" modal header="Характеристики" :style="{ width: '80rem', backgroundColor: '#1C1C1C' }">
      <div class="flex flex-wrap justify-between gap-y-5">
        <div v-for="item of characteristics" class="border-[#4b5563] border p-5 w-[400px] rounded-lg flex flex-col items-center gap-8">
          <svg width="40" height="40" viewBox="0 0 95 95" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.91666 35.625H19.7917V89.0625C19.7917 89.5874 20.0002 90.0908 20.3713 90.462C20.7425 90.8332 21.2459 91.0417 21.7708 91.0417H73.2292C73.7541 91.0417 74.2575 90.8332 74.6286 90.462C74.9998 90.0908 75.2083 89.5874 75.2083 89.0625V35.625H87.0833C87.5706 35.625 88.0407 35.4453 88.4037 35.1203C88.7667 34.7953 88.997 34.3478 89.0506 33.8635L91.0298 16.051C91.0798 15.6011 90.9741 15.1477 90.7303 14.7663C90.4865 14.3848 90.1193 14.0986 89.6899 13.9551L60.0024 4.05927C59.629 3.93521 59.2271 3.92505 58.8478 4.03007C58.4686 4.1351 58.1292 4.35057 57.8728 4.64907C52.727 10.9527 42.275 10.9488 37.1292 4.64907C36.8726 4.35079 36.5332 4.13547 36.154 4.03046C35.7749 3.92545 35.373 3.93548 34.9996 4.05927L5.31208 13.9551C4.88235 14.0982 4.5147 14.3843 4.27049 14.7658C4.02628 15.1472 3.92029 15.6009 3.9702 16.051L5.94937 33.8635C6.00297 34.3478 6.23332 34.7953 6.59631 35.1203C6.9593 35.4453 7.42943 35.625 7.91666 35.625Z" :fill="item.color" />
          </svg>
          <div class="flex flex-col gap-5">
            <span>Максимальная скорость: {{item.max_speed}}</span>
            <span>Среднее время реакции на старте (с): {{item.reaction_time}}</span>
            <span>Ускорение (м/с², начальная фаза забега): {{item.boost}}</span>
            <span>Коэффициент потери скорости (на финальной стадии): {{item.speed_loss}}</span>
            <span>Стабильность: {{item.stability_from}} - {{item.stability_to}}</span>
          </div>
        </div>
      </div>
    </Dialog>
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
