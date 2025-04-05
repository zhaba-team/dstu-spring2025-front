<script setup>
import PairTable from "./PairTable/PairTable.vue";
import ProbabilityTable from "./ProbabilityTable/ProbabilityTable.vue";
import StatisticsTable from "./StatisticsTable/StatisticsTable.vue";

Echo.channel('onlineRace')
    .listen('OnlineRace', (e) => {
      console.log(e);
    });

</script>

<template>
  <div class="dashboard">
    <ProbabilityTable />
    <PairTable />
    <StatisticsTable />
  </div>
</template>

<style scoped>
.dashboard {
  display: flex;
  flex-direction: column;
  gap: 40px;
}
</style>
