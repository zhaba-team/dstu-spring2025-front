<script setup>
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

const products = [
  {
    id: '1000',
    color: 'red1',
    chanceWithPurple: "75%",
    chanceWithOrange: "10%",
    chanceWithGreen: "75%",
    chanceWithRed: "---",
    chanceWithBlue: "25%",
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
  <h1>Таблица
    вероятности
    занятия 1го и 2го
    мест</h1>
  <DataTable :value="products" tableStyle="min-width: 60rem">
    <Column field="color" header=""></Column>
    <Column field="chanceWithRed" header="red"></Column>
    <Column field="chanceWithBlue" header="blue"></Column>
    <Column field="chanceWithOrange" header="orange"></Column>
    <Column field="chanceWithGreen" header="green"></Column>
    <Column field="chanceWithPurple" header="purple"></Column>
    <Column field="black" header="black"></Column>
  </DataTable>
</template>

<style scoped>


</style>
