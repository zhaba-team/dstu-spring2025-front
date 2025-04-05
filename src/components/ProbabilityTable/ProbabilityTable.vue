<script setup>
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

const probabilities = [
  {
    id: '1000',
    color: '#4287f5',
    first: 'Bamboo Watch',
    second: 'Product Description',
    third: 'bamboo-watch.jpg',
    fourth: 65,
    fifth: 'Accessories',
    sixth: '',
    topOne: 'INSTOCK',
    topTwo: 5
  },
  {
    id: '1000',
    color: '#f54242',
    first: 'Bamboo Watch',
    second: 'Product Description',
    third: 'bamboo-watch.jpg',
    fourth: 65,
    fifth: 'Accessories',
    sixth: '',
    topOne: 'INSTOCK',
    topTwo: 5
  },
  {
    id: '1000',
    color: '#f5a442',
    first: 'Bamboo Watch',
    second: 'Product Description',
    third: 'bamboo-watch.jpg',
    fourth: 65,
    fifth: 'Accessories',
    sixth: '',
    topOne: 'INSTOCK',
    topTwo: 5
  }];
</script>

<template>
  <DataTable :value="probabilities">
    <Column field="color" header="">
      <template #body="slotProps">
        <div :style="{ width: '20px', height: '20px', backgroundColor: slotProps.data.color }"></div>
      </template>
    </Column>
    <Column field="first" header="1"></Column>
    <Column field="second" header="2"></Column>
    <Column field="third" header="3"></Column>
    <Column field="fourth" header="4"></Column>
    <Column field="fifth" header="5"></Column>
    <Column field="sixth" header="6"></Column>
    <Column field="topOne" header="ТОП-1"></Column>
    <Column field="topTwo" header="ТОП-2"></Column>
  </DataTable>
</template>

<style scoped>

</style>
