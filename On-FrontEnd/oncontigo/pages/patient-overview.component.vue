<script>
import PatientTable from '../components/patient-table.component.vue'
import PatientAction from '../components/patient-action.component.vue'
import {onMounted} from "vue";

export default {
  name: "App",
  components: {PatientTable,PatientAction},
  setup() {
    onMounted(() => {
      document.cookie = 'locale=en';
    });
  }
};
</script>

<template>
  <div class="container">
    <div class="table-section">
      <patient-table></patient-table>
    </div>
    <div class="action-section">
      <patient-action :action="agregarPaciente">Agregar Paciente</patient-action>
      <patient-action :action="verDetalles">Ver Detalles</patient-action>
      <patient-action :action="recetarMedicamento">Recetar Medicamento</patient-action>
      <patient-action :action="manejarTratamientos">Tratamientos y Procedimientos</patient-action>
      <patient-action :action="eliminarPaciente">Eliminar Paciente</patient-action>
    </div>
  </div>
</template>

<style>
.container {
  display: flex;
  flex-direction: row;
  height: 100vh;
}

.table-section {
  flex: 2;
  padding: 20px;
}

.action-section {
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
}

.patient-action {
  margin-bottom: 10px;
}
</style>