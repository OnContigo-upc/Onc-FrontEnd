<script setup>
import { ref } from 'vue';
import { selectedPatientsService } from '../services/selected-patients.service.js';

const displayDialog = ref(true);
const selectedPatients = selectedPatientsService.getSelectedPatients();

const hideDialog = () => {
  displayDialog.value = false;
};
</script>

<template>
  <pv-dialog header="Medicamentos" v-model:visible="displayDialog" :modal="true" :closable="false">
    <div v-for="patient in selectedPatients" :key="patient.id">
      <p>Nombre completo: {{ patient.name }}</p>
      <p>DNI: {{ patient.drugs}}</p>
    </div>
    <pv-button @click="hideDialog">Close</pv-button>
  </pv-dialog>
</template>

<style scoped>
/* Estilos adicionales si es necesario */
</style>
