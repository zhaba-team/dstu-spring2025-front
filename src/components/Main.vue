<script setup>
import PairTable from "./PairTable/PairTable.vue";
import ProbabilityTable from "./ProbabilityTable/ProbabilityTable.vue";
</script>

<template>
  <div class="dashboard">
    <ProbabilityTable />
    <PairTable />
  </div>
</template>

<style scoped>
.dashboard {
  display: flex;
  flex-direction: column;
  gap: 40px;
}
</style>
