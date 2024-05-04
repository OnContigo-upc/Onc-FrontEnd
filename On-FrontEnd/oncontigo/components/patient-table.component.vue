<script>
import {PatientsService} from "../services/patients.service.js";
import {onMounted, ref} from "vue";

const patients = ref([]);

const fetchPatients = async () => {
  try {
    const response = await new PatientsService().getByIdDoctor(1); // Filtrar por idDoctor igual a 1
    patients.value.push(...response.data);
    console.log(response.data);
  } catch (error) {
    console.error('Error pacientes', error);
  }
}
onMounted(fetchPatients);


</script>

<template>
  <div>
    <pv-data-table :value="patients" dataKey="dni">
      <pv-column header="Foto">
        <template #body="slotProps">
          <img :src="slotProps.data.photoUrl" alt="Foto de Paciente" style="width: 40px; height: auto;">
        </template>
      </pv-column>
      <pv-column field="dni" header="DNI"></pv-column>
      <pv-column field="name" header="Nombre completo"></pv-column>
      <pv-column field="lastAppointment" header="Ult. Cita"></pv-column>
      <pv-column field="nextAppointment" header="Prox. Cita"></pv-column>
      <pv-column  header="Alarma" >
        <template #body="slotProps">
          <pv-button type="button" class="alarm-button"  rounded  @click="confirm(slotProps.data)">
            <i class="pi pi-bell"></i>
          </pv-button>
        </template>
      </pv-column >
    </pv-data-table>
  </div>
</template>

<style>
  .p-datatable {
    border-radius: 6px;
    overflow: hidden;
  }

  .alarm-button {
    border: none;
    background-color:#4A547F;
    color: white;
    width: 30px;
    height: 60px;
    border-radius:100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background-color 0.3s;
    padding: 0;
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
</style>