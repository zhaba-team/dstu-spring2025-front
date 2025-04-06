<script setup>
import PairTable from "./PairTable/PairTable.vue";
import ProbabilityTable from "./ProbabilityTable/ProbabilityTable.vue";
import StatisticsTable from "./StatisticsTable/StatisticsTable.vue";
import RaceVisualization from "./RaceVisualization/RaceVisualization.vue";
import axiosClient from "../axios/axiosClient.js";
import {onMounted, ref} from "vue";

Echo.channel('onlineRace')
    .listen('OnlineRace', (e) => {
      console.log(e);
    });

const statisticData = ref({});

const getData = async () => {
  const {data} = await axiosClient.get('/statistics')
  console.log(data)
  statisticData.value = data;
}

onMounted(async () => {
  await getData();
})

</script>

<template>
  <div class="dashboard">
    <div class="flex justify-between gap-6">
      <StatisticsTable />
      <ProbabilityTable :data="statisticData.single_probabilities" />
    </div>
    <div class="flex justify-between gap-6">
      <PairTable />
      <RaceVisualization />
    </div>
  </div>
</template>

<style scoped>
.dashboard {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 30px;
}
</style>
