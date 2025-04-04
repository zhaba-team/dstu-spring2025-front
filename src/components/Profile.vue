<script setup>
import {Button, InputText, FileUpload} from "primevue";
import FloatLabel from "primevue/floatlabel";
import {onMounted, ref} from "vue";
import useRegistrationStore from "../store/useRegistrationStore.js";
import useProfileStore from "../store/useProfileStore.js";
import router from "../router.js";

const registration = useRegistrationStore();
const profile = useProfileStore()
const profileData = registration.user.data;
const image = ref('');

const user = ref({
  avatar: '',
  name: '',
  email: '',
})

function previewSelectImage(e) {
  const file = e.files[0];

  if (file) {
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.addEventListener('load', () => {
      if (typeof reader.result === "string") {
        image.value = reader.result;
        user.value.avatar = file;
      }
    });
  }
}

function edit(ev) {
  ev.preventDefault();

  profile.editProfile(profileData.id, user.value).then((response) => {
    registration.setUser(response);

    router.push({
      name: "Main",
    });
  });
}

onMounted(() => {
  profile.getProfile(profileData.id).then((response) => {
    user.value.name = response.name;
    user.value.email = response.email;
    image.value = response.avatar;
  });
})

function onMain() {
  router.push({
    name: "Main",
  });
}
</script>

<template>
  <div class="flex flex-col justify-center px-5 py-5 rounded-xl w-full max-w-[350px] border-2">
    <div class="gap-4 flex flex-col">
      <h1 class="text-2xl">
        Профиль
      </h1>
      <div class="flex flex-col gap-4">
        <div v-if="image" class="image-wrapper">
          <img :src="image" alt="." class="img-thumbnail current-icon mb-2">
        </div>
        <FileUpload
            class="mb-3"
            mode="basic"
            accept="image/*"
            :maxFileSize="10000000"
            @select="previewSelectImage"
            chooseLabel="Загрузить аватар"
            :auto="true"
        />
        <FloatLabel variant="on">
          <InputText class="input" id="name" v-model="user.name"/>
          <label for="name">Имя</label>
        </FloatLabel>
        <FloatLabel variant="on">
          <InputText class="input" id="email" v-model="user.email"/>
          <label for="email">Почта</label>
        </FloatLabel>
      </div>
      <Button @click="edit">Сохранить</Button>
      <Button @click="onMain">На главную</Button>
    </div>
  </div>
</template>

<style scoped>
.image-wrapper {
  height: 250px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}
</style>
