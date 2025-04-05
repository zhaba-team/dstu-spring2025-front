<script setup>
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

const products = [
  {
    id: '1000',
    color: 'red1',
  },
  {
    id: '1000',
    color: 'blue',
  },
  {
    id: '1000',
    color: 'green',
    fp: 'red',
  },
]

</script>

<template>
  <DataTable :value="products" tableStyle="min-width: 50rem">
    <Column field="color" header=""></Column>
    <Column field="red1" header="red1"></Column>
    <Column field="blue" header="blue"></Column>
    <Column field="orange" header="orange"></Column>
    <Column field="green" header="green"></Column>
    <Column field="purple" header="purple"></Column>
    <Column field="black" header="black"></Column>
  </DataTable>
</template>

<style scoped>

</style>
