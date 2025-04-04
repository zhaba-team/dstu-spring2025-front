<script setup>
import {Button, InputText, useToast} from "primevue";
import FloatLabel from "primevue/floatlabel";
import {ref} from "vue";
import useRegistrationStore from "../store/useRegistrationStore.js";
import useProfileStore from "../store/useProfileStore.js";
import router from "../router.js";
import Toast from "primevue/toast";

const registration = useRegistrationStore();
const profile = useProfileStore();
const toast = useToast();

const codeHasBeenSent = ref(false);

const verifiedCode = ref('');

function requestCode() {
  profile.requestCode().then((resp) => {
    codeHasBeenSent.value = true;
  }).catch((error) => {
    console.log(error);

    toast.add({
      severity: 'error',
      summary: 'Ошибка',
      detail: error.response.data.message || 'Не удалось отправить код',
      life: 3000
    });
  }).finally(() => {
    codeHasBeenSent.value = true;
  });
}

function sendCode() {
  profile.sendCode(verifiedCode.value)
      .then((response) => {
        registration.setUser(response);

        router.push({
          name: "Main",
        });
      })
      .catch((error) => {
        console.log(error);

        toast.add({
          severity: 'error',
          summary: 'Ошибка',
          detail: error.response.data.message || 'Не удалось отправить код',
          life: 3000,
        });
      });
}

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
        Подтверждение почты
      </h1>

      <Button v-if="!codeHasBeenSent" @click="requestCode">Выслать код</Button>

      <div v-if="codeHasBeenSent">
        <div class="flex flex-col gap-4">
          <FloatLabel variant="on">
            <InputText class="input" id="verifiedCode" v-model="verifiedCode"/>
            <label for="verifiedCode">Введите код подтверждения</label>
          </FloatLabel>
          <Button @click="sendCode">Подтвердить</Button>
        </div>
      </div>

      <Button @click="onMain">На главную</Button>
    </div>
  </div>

  <Toast />
</template>

<style scoped>
</style>
