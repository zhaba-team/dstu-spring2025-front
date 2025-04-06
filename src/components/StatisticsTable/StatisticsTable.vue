<script setup>
import Shirt from "../icons/Shirt.vue";
import {ref} from "vue";
// import Line from "../Diagrams/Line.vue";
import ToggleSwitch from 'primevue/toggleswitch';

const firstView = ref(true);

function toggleView() {
  firstView.value = !firstView.value
}

const props = defineProps({
  data: Array,
  liveData: Array
})

const data = props.liveData ? props.liveData : props.data
</script>

<template>
  <div class="table-wrapper">
    <div class="w-full flex justify-between">
      <h1>Статистика</h1>
      <ToggleSwitch @click="toggleView"/>
    </div>
    <div class="table-container">
      <table class="table" v-if="firstView">
        <tbody>
        <tr v-for="(row, rowIndex) in data" :key="rowIndex">
          <td>{{ row.place }}</td>
          <td v-for="(racer, colIndex) in row.members" :key="colIndex">
            <div class="racer-color">
              <shirt :color="racer.color"/>
            </div>
          </td>
        </tr>
        </tbody>
      </table>
      <Line :places="data" v-else/>
    </div>
  </div>
</template>


<style scoped>
.table-wrapper {
  padding: 0;
  width: 100%;
}

.table-container {
  width: 565px;
  height: 100%;
  overflow-x: auto;
  border-radius: 12px;
  border: 1px solid #4b5563;
}

.table {
  width: 100%;
  border-collapse: unset;
  height: 100%;
  white-space: nowrap;
  background: #252525;
}

.table th,
.table td {
  padding: 15px;
  text-align: center;
}

.table tr {
  border-bottom: 1px solid #494949;
}

.table tr:last-child {
  border-bottom: none;
}

.table th {
  font-weight: bold;
  background-color: #27272a;
}

.racer-color {
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
