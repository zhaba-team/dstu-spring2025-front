<script setup>
import {Avatar, Button, Popover} from "primevue";
import useRegistrationStore from "../../store/useRegistrationStore.js";
import {ref} from "vue";
import router from "../../router.js";
import {storeToRefs} from "pinia";

const registration = useRegistrationStore();

const { user } = storeToRefs(registration);
const popup = ref();

const toggle = (event) => {
  popup.value.toggle(event);
}

function logout(ev) {
  ev.preventDefault();

  registration.logout().then(() => {
    router.push({
      name: "Login",
    });
  });
}

function profileEdit() {
  router.push({
    name: "Profile",
  });
}

function emailVerified() {
  router.push({
    name: "EmailVerified",
  });
}
</script>

<template>
  <header class="header">
    <h1 class="title">Template</h1>
    <div class="avatar-wrapper">
      <h2 class="font-semibold">{{ user.data.name }}</h2>
      <button type="button" @click="toggle">
        <img v-if="user.data.avatar" :src="user.data.avatar" class="w-[48px] h-[48px] rounded-[6px]" alt=".">
        <Avatar v-else class="mr-2" size="large" style="background-color: #ece9fc; color: #2a1261"/>
      </button>
      <Popover ref="popup">
        <div class="flex flex-col gap-2">
          <Button @click="profileEdit">Редактировать профиль</Button>
          <Button v-if="!user.data.emailVerified" @click="emailVerified">Подтвердить почту</Button>
          <Button @click="logout">Выйти</Button>
        </div>
      </Popover>
    </div>
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
