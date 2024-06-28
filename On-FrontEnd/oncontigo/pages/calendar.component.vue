<script setup>
import {onMounted, ref,computed} from "vue";
import CalendarAppointments from "../components/calendar-appointments.component.vue";
import CalendarDisplay from "../components/calendar-display.component.vue";
import {patientsService} from "../../public/services/patients.service.js";
const patients = ref([]);

const fetchPatients=async ()=>{
  try {
    const response = await new patientsService().getAll();
    patients.value.push(...response.data);
  } catch (error) {
    console.error('Error pacientes', error);
  }
}

onMounted(fetchPatients,);
</script>

<!--Esta es una page del calendario-->
<template>
  <section class="calendar-container">

    <calendar-appointments :appointments="patients"></calendar-appointments>

    <div class="calendar-display">
      <calendar-display></calendar-display>
    </div>
  </section>


</template>

<style scoped>
.calendar-container{
  display:grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  width: 100vw;
  overflow-y: scroll;
}
@media (max-width: 768px) {
  .calendar-container {
    grid-template-columns: 1fr;
  }
}
.calendar-display{
  display:flex;
  align-items:center;
  justify-content:center;
  background-image: url("../src/assets/images/background-calendar.png");
  background-repeat: no-repeat;
  background-size: cover;
  flex-grow: 1;
}
</style>