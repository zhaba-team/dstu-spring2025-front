<script setup>
import PairTable from "./PairTable/PairTable.vue";
import ProbabilityTable from "./ProbabilityTable/ProbabilityTable.vue";
import StatisticsTable from "./StatisticsTable/StatisticsTable.vue";
import RaceVisualization from "./RaceVisualization/RaceVisualization.vue";
import axiosClient from "../axios/axiosClient.js";
import {onMounted, ref} from "vue";

const statisticData = ref({});
const colors = ref([{
  id: '1',
  shirtColor: 'none',
  columnKey: 'color'
}]);
const raceInfo = ref(null);
const tablesInfo = ref(null);

const getData = async () => {
  const { data } = await axiosClient.get('/statistics');
  console.log(data);
  statisticData.value = data;
};

const getChars = async () => {
  const { data } = await axiosClient.get('/characteristics');
   let tmp = data.map((item) => {
    return {
      id: item.number,
      shirtColor: item.color,
      columnKey: item.number
    }
  })
  colors.value = colors.value.concat(tmp)
};

onMounted(async () => {
  await getData();
  await getChars();
});

Echo.channel('onlineRace')
    .listen('OnlineRace', (e) => {
      raceInfo.value = e.raceInformation;
    });

Echo.channel('updateStatistic')
    .listen('UpdateStatistic', (e) => {
      console.log(e)
      tablesInfo.value = e.updatedStatistic;
    });
</script>

<template>
  <div class="dashboard">
    <div class="flex justify-between gap-6">
      <StatisticsTable :liveData="tablesInfo?.places_order" :data="statisticData.places_order" />
      <ProbabilityTable :liveData="tablesInfo?.single_probabilities" :data="statisticData.single_probabilities" />
    </div>
    <div class="flex justify-between gap-6">
      <PairTable :liveData="tablesInfo?.pair_probabilities" :data="statisticData.pair_probabilities" :colors="colors" />
      <RaceVisualization :data="raceInfo" />
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
