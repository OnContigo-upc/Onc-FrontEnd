<script>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';  // Importa useRoute
import { PatientsService } from '../services/patients.service.js';
import ModalAlarm from '../components/modal-alarm-patient.component.vue'
export default {
  name: 'PatientTableComponent',
  setup() {
    const patients = ref([]);
    const route = useRoute();
    const fetchPatients = async () => {
      const idDoctor = route.params.idDoctor;
      try {
        const service = new PatientsService();
        const response = await service.getByIdDoctor(idDoctor);
        patients.value = response.data;
      } catch (error) {
        console.error('Error al cargar pacientes', error);
      }
    };

    onMounted(fetchPatients);

    return {
      patients
    };
  },
  methods: {
    confirm(patient) {
      alert(`Alarma activada para ${patient.name}`);
    }
  }
};
</script>

<template>
  <div>
    <pv-data-table :value="patients" dataKey="dni">
      <pv-column header="Foto">
        <template #body="slotProps">
          <img  src="../../src/assets/images/userplaceholder.png" alt="Foto de Paciente" style="width: 40px; height: auto;">
        </template>
      </pv-column>
      <pv-column field="dni" header="DNI"></pv-column>
      <pv-column field="name" header="Nombre completo"></pv-column>
      <pv-column field="lastAppointmet" header="Ult. Cita"></pv-column>
      <pv-column field="nextAppoinment" header="Prox. Cita"></pv-column>
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