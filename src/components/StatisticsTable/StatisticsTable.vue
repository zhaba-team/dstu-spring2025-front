<script setup>
import Shirt from "../icons/Shirt.vue";

const places = [
  {
    id: '1',
    name: 'first',
    number: 1,
    racers: [
      {
        id: 1,
        color: '#f54242'
      },
      {
        id: 2,
        color: '#57f542'
      },
      {
        id: 3,
        color: '#f5ce42',
      },
      {
        id: 4,
        color: '#4245f5',
      },
      {
        id: 5,
        color: '#ec42f5',
      },
      {
        id: 6,
        color: '#42adf5',
      }
    ]
  },
  {
    id: '2',
    name: 'second',
    number: 2,
    racers: [
      {
        id: 1,
        color: '#f54242'
      },
      {
        id: 2,
        color: '#57f542'
      },
      {
        id: 3,
        color: '#f5ce42',
      },
      {
        id: 4,
        color: '#4245f5',
      },
      {
        id: 5,
        color: '#ec42f5',
      },
      {
        id: 6,
        color: '#42adf5',
      }
    ]
  },
  {
    id: '3',
    name: 'third',
    number: 3,
    racers: [
      {
        id: 1,
        color: '#f54242'
      },
      {
        id: 2,
        color: '#57f542'
      },
      {
        id: 3,
        color: '#f5ce42',
      },
      {
        id: 4,
        color: '#4245f5',
      },
      {
        id: 5,
        color: '#ec42f5',
      },
      {
        id: 6,
        color: '#42adf5',
      },
    ]
  }
];
</script>

<template>
  <div class="table-wrapper">
    <h1>Статистика</h1>
    <table class="table">
      <tbody>
      <tr v-for="(row, rowIndex) in places" :key="rowIndex">
        <td>{{ row.number }}</td>
        <td v-for="(racer, colIndex) in row.racers" :key="colIndex">
          <div class="racer-color">
            <shirt :color="racer.color"/>
          </div>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.table-wrapper {
  padding: 0;
  width: 100%;
}

.table {
  width: 100%;
  border-collapse: unset;
  border-radius: 12px;
  border: 1px solid #4b5563;
  height: 100%;
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
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
