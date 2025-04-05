<script setup>
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

const probabilities = [
  {
    id: '1000',
    color: '#4287f5',
    first: 0.5,
    second: 0.2,
    third: 0.8,
    fourth: 65,
    fifth: 0.1,
    sixth: 0.9,
    topTwo: 0.7,
    topThree: 5
  },
  {
    id: '1000',
    color: '#f54242',
    first: 0.2,
    second: 0.2,
    third: 0.8,
    fourth: 65,
    fifth: 0.1,
    sixth: 0.9,
    topTwo: 0.7,
    topThree: 5
  },
  {
    id: '1000',
    color: '#f5a442',
    first: 0.2,
    second: 0.2,
    third: 0.8,
    fourth: 65,
    fifth: 0.1,
    sixth: 0.9,
    topTwo: 0.7,
    topThree: 5
  }];
</script>

<template>
  <div class="table-wrapper">
    <h1>
      Таблица
      вероятности
    </h1>
    <DataTable :value="probabilities" tableStyle="min-width: 45rem; text-align: center; border: 1px solid #4b5563; border-radius: 12px; overflow: hidden;"
    >
      <Column field="color" header="">
        <template #body="slotProps">
          <svg width="35" height="35" viewBox="0 0 95 95" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.91666 35.625H19.7917V89.0625C19.7917 89.5874 20.0002 90.0908 20.3713 90.462C20.7425 90.8332 21.2459 91.0417 21.7708 91.0417H73.2292C73.7541 91.0417 74.2575 90.8332 74.6286 90.462C74.9998 90.0908 75.2083 89.5874 75.2083 89.0625V35.625H87.0833C87.5706 35.625 88.0407 35.4453 88.4037 35.1203C88.7667 34.7953 88.997 34.3478 89.0506 33.8635L91.0298 16.051C91.0798 15.6011 90.9741 15.1477 90.7303 14.7663C90.4865 14.3848 90.1193 14.0986 89.6899 13.9551L60.0024 4.05927C59.629 3.93521 59.2271 3.92505 58.8478 4.03007C58.4686 4.1351 58.1292 4.35057 57.8728 4.64907C52.727 10.9527 42.275 10.9488 37.1292 4.64907C36.8726 4.35079 36.5332 4.13547 36.154 4.03046C35.7749 3.92545 35.373 3.93548 34.9996 4.05927L5.31208 13.9551C4.88235 14.0982 4.5147 14.3843 4.27049 14.7658C4.02628 15.1472 3.92029 15.6009 3.9702 16.051L5.94937 33.8635C6.00297 34.3478 6.23332 34.7953 6.59631 35.1203C6.9593 35.4453 7.42943 35.625 7.91666 35.625Z" :fill="slotProps.data.color"/>
          </svg>
        </template>
      </Column>
      <Column field="first" header="1"></Column>
      <Column field="second" header="2"></Column>
      <Column field="third" header="3"></Column>
      <Column field="fourth" header="4"></Column>
      <Column field="fifth" header="5"></Column>
      <Column field="sixth" header="6"></Column>
      <Column field="topTwo" header="ТОП-2"></Column>
      <Column field="topThree" header="ТОП-3"></Column>
    </DataTable>
  </div>
</template>

<style scoped>

</style>
