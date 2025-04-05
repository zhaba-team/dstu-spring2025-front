<script setup>
import { ProgressBar } from "primevue";
import { onBeforeUnmount, onMounted, ref } from "vue";
import confetti from "canvas-confetti";

const progressBars = ref([
  { id: 1, color: '#f44336', value: ref(0) },
  { id: 2, color: '#3AC7FF', value: ref(0) },
  { id: 3, color: '#ffbe00', value: ref(0) },
  { id: 4, color: '#9249b5', value: ref(0) },
  { id: 5, color: '#66ff34', value: ref(0) },
  { id: 6, color: '#3e3ed8', value: ref(0) },
]);

const winnerDeclared = ref(false);
const intervals = ref([]);

const startProgress = () => {
  progressBars.value.forEach((bar) => {
    const interval = setInterval(() => {
      let newValue = bar.value + Math.floor(Math.random() * 10) + 1;
      if (newValue >= 100) {
        newValue = 100;
        clearInterval(interval);

        if (!winnerDeclared.value) {
          winnerDeclared.value = true;
          launchConfetti();
        }
      }
      bar.value = newValue;
    }, 1000);
    intervals.value.push(interval);
  });
};

const launchConfetti = () => {
  confetti({
    particleCount: 400,
    spread: 100,
    origin: { y: 0.6 },
  });
};

const endProgress = () => {
  intervals.value.forEach((int) => clearInterval(int));
  intervals.value = [];
};

onMounted(() => {
  startProgress();
});

onBeforeUnmount(() => {
  endProgress();
});

function getStyle(color) {
  return {
    '--progressbar-bg': color,
  };
}
</script>

<template>
  <div class="flex flex-col w-full text-left justify-between gap-5">
    <h1>Визуализация забега</h1>
    <div class="raceBlock">
      <div class="flex gap-5 items-center" v-for="item in progressBars">
        <svg width="40" height="40" viewBox="0 0 95 95" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.91666 35.625H19.7917V89.0625C19.7917 89.5874 20.0002 90.0908 20.3713 90.462C20.7425 90.8332 21.2459 91.0417 21.7708 91.0417H73.2292C73.7541 91.0417 74.2575 90.8332 74.6286 90.462C74.9998 90.0908 75.2083 89.5874 75.2083 89.0625V35.625H87.0833C87.5706 35.625 88.0407 35.4453 88.4037 35.1203C88.7667 34.7953 88.997 34.3478 89.0506 33.8635L91.0298 16.051C91.0798 15.6011 90.9741 15.1477 90.7303 14.7663C90.4865 14.3848 90.1193 14.0986 89.6899 13.9551L60.0024 4.05927C59.629 3.93521 59.2271 3.92505 58.8478 4.03007C58.4686 4.1351 58.1292 4.35057 57.8728 4.64907C52.727 10.9527 42.275 10.9488 37.1292 4.64907C36.8726 4.35079 36.5332 4.13547 36.154 4.03046C35.7749 3.92545 35.373 3.93548 34.9996 4.05927L5.31208 13.9551C4.88235 14.0982 4.5147 14.3843 4.27049 14.7658C4.02628 15.1472 3.92029 15.6009 3.9702 16.051L5.94937 33.8635C6.00297 34.3478 6.23332 34.7953 6.59631 35.1203C6.9593 35.4453 7.42943 35.625 7.91666 35.625Z" :fill="item.color"/>
        </svg>
        <ProgressBar :style="getStyle(item.color )" :value="item.value"></ProgressBar>
      </div>
    </div>
  </div>
</template>


<style scoped>

.raceBlock {
  @apply border-gray-600 border p-5 rounded-xl flex flex-col justify-between gap-6 w-full h-full
}

:deep(.p-progressbar .p-progressbar-value) {
  background-color: var(--progressbar-bg) !important;
}

:deep(.p-progressbar) {
  width: 100% !important;
}

:deep(.p-progressbar .p-progressbar-value .p-progressbar-label) {
  color: #ffffff !important;
  text-shadow: 0 -1px 20px black, -1px 1px 20px black, 0 2px 20px black, 1px 1px 20px black;
}
</style>
