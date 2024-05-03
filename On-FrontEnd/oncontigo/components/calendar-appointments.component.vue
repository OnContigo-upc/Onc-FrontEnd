<script setup>
import CardInfo from "./card-info.component.vue";
import {defineProps, ref} from "vue";
const cardInfo = ref([]);
const props = defineProps({
  appointments: {
    type: Array,
    required: false,
    default:[],
  },
})
</script>

<template>
  <div class="calendar-info">
    <div class="calendar-title">
      <h1>Calendario</h1>
    </div>

    <div  class="cards-container">
      <template v-for="(patient, index) in appointments" :key="index">
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
}
.cards-container{
  background-color: #4A547F;
  flex-grow: 1;
}

.calendar-title h1{
  margin: 0;
  color: #000000;
  font-size: 48px;
}
</style>