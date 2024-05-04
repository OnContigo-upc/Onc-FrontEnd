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
        <th class="hour-first"></th>
        <th class="day" v-for="(day, index) in days" :key="index">{{ day }}</th>
      </tr>

      <tr v-for="(hour, rowIndex) in hours" :key="rowIndex">
        <td class="hour">{{ hour }}</td>


        <td class="appointment" v-for="(day, colIndex) in days" :key="colIndex">
          <button-calendar :date="day" :time="hour" :booked="boolGrid[rowIndex][colIndex]" @toggle-booked="handleToggle(rowIndex,colIndex)"></button-calendar>
        </td>
      </tr>
    </table>
  </div>
</template>


<style scoped>
.table-container {
  max-width: 904px;
  max-height: 800px;
  margin: 30px;
  padding: 20px;
  border-radius: 15px;
  background-color: rgba(210, 218, 250, 0.75);
  overflow-y: auto;
  overflow-x: auto;
  @media (max-width: 768px) {
    max-width: 300px;
    max-height: 200px;
  }
}

.table-calendar {
  border-collapse: collapse;
  width: 100%;
  text-align: center;
}

th,
td {
  border: 2px solid #666D96;
  padding: 8px;
}

.appointment{
  padding:0;
}

.hour {
  padding-right: 20px;
  border-left:rgba(210, 218, 250, 0.75);
  border-top:rgba(210, 218, 250, 0.75);
  border-bottom:rgba(210, 218, 250, 0.75);
}
.day{
  border-left:rgba(210, 218, 250, 0.75);
  border-top:rgba(210, 218, 250, 0.75);
  border-right:rgba(210, 218, 250, 0.75);
}

.hour-first{
  border: rgba(210, 218, 250, 0.75);
}
@media (max-width: 768px) {
  .table-calendar {
    font-size: 0.85em;
  }

  th,
  td {
    padding: 4px; /* Less padding for smaller screens */
  }
}
</style>