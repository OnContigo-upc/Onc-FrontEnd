<script setup>
import CardInfo from "./card-info.component.vue";
import {defineProps, ref,computed} from "vue";


const cardInfo = ref([]);
const props = defineProps({
  appointments: {
    type: Array,
    required: false,
    default:[],
  },

})
const firstFiveAppointments = computed(() => {
  return props.appointments.slice(0, 4); // Toma los primeros 5 elementos
});

</script>

<template>
  <div class="calendar-info">
    <div class="calendar-title">
      <h1>Calendario</h1>
    </div>

    <div class="cards-container">
      <template v-for="(patient, index) in firstFiveAppointments" :key="index">
        <card-info :name="patient.name" :date="patient.nextAppoinment"></card-info>
      </template>
    </div>
  </div>
</template>

<style scoped>
.calendar-info{
  display:flex;
  flex-direction: column
}

.calendar-title{
  display:flex;
  align-items:center;
  justify-content:center;
  height:129px;
  background-color: #95A8FF;

  @media (max-width: 768px) {
    width: 100vw;
  }
}
.cards-container{
  background-color: #4A547F;
  flex-grow: 1;
  @media (max-width: 768px) {
    width: 100vw;
  }
}

.calendar-title h1{
  margin: 0;
  color: #000000;
  font-size: 48px;
}
</style>