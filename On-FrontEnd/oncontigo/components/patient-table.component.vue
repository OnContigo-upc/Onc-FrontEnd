<script setup>
import {ref, onMounted} from 'vue';
import {useRoute} from 'vue-router';
import {patientsService} from '../services/patients.service.js';
import {selectedPatientsService} from '../services/selected-patients.service.js';

const patients = ref([]);
const route = useRoute();

const fetchPatients = async () => {
  const idDoctor = route.params.idDoctor;
  try {

    const response = await patientsService.getByIdDoctor(idDoctor);
    patients.value = response.data;
  } catch (error) {
    console.error('Error al cargar pacientes', error);
  }
};

const onPatientSelect = (patient) => {
  selectedPatientsService.selectPatient(patient);
};

onMounted(fetchPatients);

defineExpose({
  patients,
  onPatientSelect
});
</script>

<template>
  <div class="table-container">
    <pv-data-table :value="patients" dataKey="dni" class="p-datatable-responsive">
      <pv-column header="" class="select-column">
        <template #body="slotProps">
          <input type="checkbox" @change="onPatientSelect(slotProps.data)">
        </template>
      </pv-column>
      <pv-column header="Foto" class="photo-column">
        <template #body="slotProps">
          <img src="../../src/assets/images/userplaceholder.png" alt="Foto de Paciente"
               style="width: 40px; height: auto;">
        </template>
      </pv-column>
      <pv-column field="dni" header="DNI" class="dni-column"></pv-column>
      <pv-column field="name" header="Nombre completo" class="name-column"></pv-column>
      <pv-column field="lastAppointmet" header="Ult. Cita" class="appointment-column"></pv-column>
      <pv-column field="nextAppoinment" header="Prox. Cita" class="appointment-column"></pv-column>
      <pv-column header="Alarma" class="alarm-column">
        <template #body="slotProps">
          <pv-button type="button" class="alarm-button" rounded @click="confirm(slotProps.data)">
            <i class="pi pi-bell"></i>
          </pv-button>
        </template>
      </pv-column>
    </pv-data-table>
  </div>
</template>

<style>
.table-container {
  max-width: 80%;
  margin: 0 auto;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.p-datatable {
  border-radius: 6px;
  overflow: hidden;
}
.p-datatable-responsive{
  max-width: 100%;
}
.alarm-button {
  background-color: #4A547F;
  color: white;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s;
}

.pi-bell {
  font-size: 1.4rem;
}

.p-datatable .p-datatable-thead > tr > th {
  background-color: #4A547F;
  color: white;
  font-size: 1rem;
}

.p-datatable .p-column-title {
  font-weight: bold;
}

.p-datatable-tbody > tr > td {
  padding: 5px 10px;
}

.p-datatable-tbody > tr:nth-child(odd) > td {
  background-color: #95A8FF;
}

.p-datatable-tbody > tr:nth-child(even) > td {
  background-color: #D2DAFA;
}

@media screen and (max-width: 1280px) {
  .table-container {
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
  .p-datatable-responsive{
    max-width: 100%;
  }
}

@media screen and (max-width: 700px) {
  .photo-column {
    display: none;
  }
  .p-datatable-responsive{
    max-width: 100%;
  }
  .table-container {
    max-width: 100%;
  }
}

@media screen and (max-width: 650px) {
  .p-datatable .p-datatable-thead > tr > th,
  .p-datatable-tbody > tr > td {
    font-size: 0.8rem;
  }
}

@media screen and (max-width: 540px) {
  .alarm-button {
    min-width: 30px;
  }

  .pi-bell {
    font-size: 0.8rem;
  }

  .p-datatable .p-datatable-thead > tr > th,
  .p-datatable-tbody > tr > td {
    font-size: 0.5rem;
  }
}

@media screen and (max-width: 480px) {
  .alarm-button {
    min-width: 1rem;
  }

  .pi-bell {
    font-size: 0.4rem;
  }

  .p-datatable .p-datatable-thead > tr > th,
  .p-datatable-tbody > tr > td {
    font-size: 0.5rem;
  }

  .p-datatable-tbody > tr > td {
    font-size: 0.3rem;
    padding: 2px 10px;
  }
  .table-container {
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
