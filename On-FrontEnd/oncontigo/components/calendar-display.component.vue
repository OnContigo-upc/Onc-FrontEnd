<script setup>
import ButtonCalendar from "./button-calendar.component.vue";
import { ref } from 'vue';
const rows = 11;
const columns = 6;
const boolGrid = ref(Array.from({ length: rows }, () => Array(columns).fill(false)));
const days = ['Lun','Mar','Mie','Jue','Vie','Sab']
const hours = ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'];
const handleToggle = (rowIndex, colIndex) => {
  boolGrid.value[rowIndex][colIndex] = !boolGrid.value[rowIndex][colIndex];
};
</script>

<template>
  <div class="table-container">
    <table class="table-calendar">

      <tr>
        <th class="hour"></th>
        <th v-for="(day, index) in days" :key="index">{{ day }}</th>
      </tr>

      <tr v-for="(hour, rowIndex) in hours" :key="rowIndex">
        <td class="hour">{{ hour }}</td>


        <td v-for="(day, colIndex) in days" :key="colIndex">
          <button-calendar :date="day" :time="hour" :booked="boolGrid[rowIndex][colIndex]" @toggle-booked="handleToggle(rowIndex,colIndex)"></button-calendar>
        </td>
      </tr>
    </table>
  </div>
</template>


<style scoped>
.table-container{
  margin: 30px;
  display: flex;
  align-items:center;
  background-color: rgba(210, 218, 250, 0.75);
  border-radius:15px;
  padding:40px;
}
.table-calendar {
  border-collapse: collapse;
  width: 100%;
  overflow: hidden;
  border-radius: 5px;
}
th, td {
  border: 5px solid #666D96;
  padding:0px;
  text-align: center;

}
th {
  border-style: none none solid none;
}
.hour{
  border:0px;
  padding-right:30px;
}
</style>