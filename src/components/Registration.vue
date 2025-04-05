<script setup>
import {onMounted, ref} from "vue";
import {Button, InputText, Select} from "primevue";
import FloatLabel from 'primevue/floatlabel';
import {RouterLink} from "vue-router";
import useRegistrationStore from "../store/useRegistrationStore.js";
import router from "../router.js";


const user = ref({
  name: "",
  email: "",
  role: "",
  password: "",
})

const registration = useRegistrationStore();

function register(ev) {
  ev.preventDefault();

  registration.register(user.value).then(() => {
    router.push({
      name: "Main",
    });
  });
}

const roles = ref([]);

onMounted(async () => {
  roles.value = await registration.getRoles();
})

const orderId = 1


Echo.channel(`onlineRace`)
    .listen('OnlineRace', (e) => {
      console.log(e);
    });
</script>

<template>
  <div class="flex flex-col justify-center px-5 py-5 rounded-xl w-full max-w-[350px] border-2">
    <div class="gap-4 flex flex-col">
      <h1 class="text-2xl">
        Регистрация
      </h1>
      <div class="flex flex-col gap-4">
        <FloatLabel variant="on">
          <InputText class="input" id="name" v-model="user.name"/>
          <label for="name">Имя</label>
        </FloatLabel>
        <FloatLabel variant="on">
          <InputText class="input" id="email" v-model="user.email"/>
          <label for="email">Почта</label>
        </FloatLabel>
        <FloatLabel variant="on">
          <InputText type="password" class="input" id="password" v-model="user.password"/>
          <label for="password">Пароль</label>
        </FloatLabel>
        <Select
            v-model="user.role"
            :options="roles"
            option-label="name"
            option-value="id"
            placeholder="Выберите роль"
        />
      </div>
      <Button @click="register">Отправить</Button>
      <span>
        Уже есть аккаунт? <RouterLink to="/login">Логин</RouterLink>
      </span>
    </div>
  </div>
</template>

<style scoped>

</style>
