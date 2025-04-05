<script setup>
import PairTable from "./PairTable/PairTable.vue";
import ProbabilityTable from "./ProbabilityTable/ProbabilityTable.vue";
import StatisticsTable from "./StatisticsTable/StatisticsTable.vue";
import RaceVisualization from "./RaceVisualization/RaceVisualization.vue";

Echo.channel('onlineRace')
    .listen('OnlineRace', (e) => {
      console.log(e);
    });

</script>

<template>
  <div class="dashboard">
    <div class="flex justify-between gap-6">
      <StatisticsTable />
      <ProbabilityTable />
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
