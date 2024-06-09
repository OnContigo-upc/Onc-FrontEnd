<script>
import PatientTable from '../components/patient-table.component.vue'
import PatientAction from '../components/patient-action.component.vue'
import ModalAddPatient from "../components/modal-add-patient.component.vue";
import ModalAllPatient from "../components/modal-alarm-patient.component.vue";
import ModalDeletePatient from "../components/modal-delete-patient.component.vue";
import ModalPatient from "../components/modal-patient.component.vue";
import ModalDoctor from "../components/modal-doctor.component.vue";
import ModalMedicamento from "../components/modal-medicamento.component.vue";
import { onMounted } from "vue";

export default {
  name: "patient-overview",
  components: {
    PatientTable,
    PatientAction,
    ModalAddPatient,
    ModalAllPatient,
    ModalDeletePatient,
    ModalDoctor,
    ModalPatient,
    ModalMedicamento
  },
  props: {
    showModalD: Boolean,
    showModalP: Boolean,
    showModalDeleteP: Boolean,
    showModalAddP: Boolean,
    showModalAlarmP: Boolean,
    showModalMedicamentoP: Boolean,
  },
  data() {
    return {
      showModalD: false,
      showModalP: false,
      showModalDeleteP: false,
      showModalAddP: false,
      showModalAlarmP: false,
      showModalMedicamentoP: false
    };
  },
  setup() {
    onMounted(() => {
      document.cookie = 'locale=en';
    });
  },
  methods: {
    showModalDoctor() {
      this.showModalD = !this.showModalD;
    },
    showModalPatient() {
      this.showModalP = !this.showModalP;
    },
    showModalDeletePatient() {
      this.showModalDeleteP = !this.showModalDeleteP;
    },
    showModalAddPatient() {
      this.showModalAddP = !this.showModalAddP;
    },
    showModalAlarmPatient() {
      this.showModalAlarmP = !this.showModalAlarmP;
    },
    showModalMedicamentoPatient() {
      this.showModalMedicamentoP = !this.showModalMedicamentoP;
    }
  }
};
</script>

<template>
  <div class="container">
    <div class="table-section">
      <patient-table></patient-table>
    </div>
    <div class="action-section">
      <patient-action @click="showModalAddPatient">Agregar Paciente</patient-action>
      <patient-action @click="showModalPatient">Ver Detalles</patient-action>
      <patient-action @click="showModalMedicamentoPatient">Recetar Medicamento</patient-action>
      <patient-action @click="showModalAddPatient">Tratamientos y Procedimientos</patient-action>
      <patient-action @click="showModalDeletePatient">Eliminar Paciente</patient-action>
    </div>

    <modal-add-patient v-if="showModalAddP" @close="showModalAddP = false"></modal-add-patient>
    <modal-delete-patient v-if="showModalDeleteP" @close="showModalDeleteP = false"></modal-delete-patient>
    <modal-patient v-if="showModalP" @close="showModalP = false"></modal-patient>
    <modal-medicamento v-if="showModalMedicamentoP" @close="showModalMedicamentoP = false"></modal-medicamento>
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
  gap: 10px;
  align-items: center;
}

@media screen and (max-width: 1280px) {
  .container {
    flex-direction: column;
  }

  .action-section {
    order: -1;
    flex-direction: row;
    justify-content: center;
  }
}

@media screen and (max-width: 540px) {
  .container {
    flex-direction: column;
  }

  .action-section {
    order: -1;
    flex-direction: column;
    justify-content: center;
  }
}
</style>
