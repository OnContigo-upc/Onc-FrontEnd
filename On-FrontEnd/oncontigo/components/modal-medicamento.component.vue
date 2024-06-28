<script setup>
import { ref, onMounted } from 'vue';
import { selectedPatientsService } from '../services/selected-patients.service.js';
import { MedicinesService } from '../services/medicines.service.js';
import { patientsService } from '../../public/services/patients.service.js'; // Importa la instancia del servicio de pacientes

const displayDialog = ref(true);
const selectedPatients = ref(selectedPatientsService.getSelectedPatients().value);
const medicines = ref([]);
const selectedMedicine = ref(null); // Almacena el medicamento seleccionado para editar
const editDialogVisible = ref(false); // Controla la visibilidad del diálogo de edición

const editMedicineName = ref('');
const editMedicineDescription = ref('');

const newMedicineName = ref('');
const newMedicineDescription = ref('');

const hideDialog = () => {
  displayDialog.value = false;
};

const hideEditDialog = () => {
  editDialogVisible.value = false;
};

// Obtener las medicinas
const fetchMedicines = async () => {
  try {
    const response = await MedicinesService.getAllMedicines();
    medicines.value = response.data;
  } catch (error) {
    console.error("Error fetching medicines:", error);
  }
};

const getMedicineDetails = (medicinesId) => {
  return medicines.value.filter(medicine => medicinesId.includes(medicine.id));
};

// Llamar a fetchMedicines cuando el componente se monte
onMounted(() => {
  fetchMedicines();
});

// Obtener el siguiente ID
const getNextMedicineId = () => {
  const ids = medicines.value.map(medicine => parseInt(medicine.id));
  const maxId = Math.max(...ids);
  return (maxId + 1).toString();
};

const addNewMedicine = async () => {
  const newMedicine = {
    id: getNextMedicineId(),
    medicineName: newMedicineName.value,
    medicineDescription: newMedicineDescription.value,
  };

  try {
    const response = await MedicinesService.createMedicine(newMedicine);
    medicines.value.push(response.data);

    // Recuperar el id del paciente seleccionado
    const selectedPatient = selectedPatientsService.getSelectedPatients().value[0]; // Asumiendo que solo se selecciona un paciente a la vez
    if (selectedPatient) {
      console.log("Selected Patient ID:", selectedPatient.id);
      //imprimir los medicamentos de paciente seleccionado
      console.log("Selected Patient Medicines:", selectedPatient.medicinesId);

      // Añadir el nuevo medicamento al paciente seleccionado (actualizar la lista de medicamentos)
      selectedPatient.medicinesId.push(newMedicine.id);
      console.log("Updated Patient Medicines:", selectedPatient.medicinesId);

      // Actualizar el paciente en el servidor
      await patientsService.updatePatient(selectedPatient.id, selectedPatient);
      console.log(`Paciente ${selectedPatient.id} actualizado con nueva medicina ID ${newMedicine.id}`);
    } else {
      console.error("No patient selected");
    }

    // Limpiar los campos después de añadir
    newMedicineName.value = '';
    newMedicineDescription.value = '';
  } catch (error) {
    console.error("Error adding new medicine:", error);
  }
};

const editMedicine = () => {
  if (selectedMedicine.value) {
    editMedicineName.value = selectedMedicine.value.medicineName;
    editMedicineDescription.value = selectedMedicine.value.medicineDescription;
    editDialogVisible.value = true;
  } else {
    console.error("No medicine selected for editing");
  }
};

const updateMedicine = async () => {
  const updatedMedicine = {
    medicineName: editMedicineName.value,
    medicineDescription: editMedicineDescription.value,
  };

  try {
    const response = await MedicinesService.updateMedicine(selectedMedicine.value.id, updatedMedicine);
    const index = medicines.value.findIndex(medicine => medicine.id === selectedMedicine.value.id);
    if (index !== -1) {
      medicines.value[index] = { ...medicines.value[index], ...updatedMedicine };
    }

    console.log(`Medicamento ${selectedMedicine.value.id} actualizado`);
    hideEditDialog();
  } catch (error) {
    console.error("Error updating medicine:", error);
  }
};

const deleteMedicine = async () => {
  if (!selectedMedicine.value) {
    console.error("No medicine selected for deletion");
    return;
  }

  try {
    await MedicinesService.deleteMedicine(selectedMedicine.value.id);

    // Eliminar el medicamento del array de medicinas
    medicines.value = medicines.value.filter(medicine => medicine.id !== selectedMedicine.value.id);

    // Recuperar el id del paciente seleccionado
    const selectedPatient = selectedPatientsService.getSelectedPatients().value[0]; // Asumiendo que solo se selecciona un paciente a la vez
    if (selectedPatient) {
      console.log("Selected Patient ID:", selectedPatient.id);

      // Eliminar el ID del medicamento del paciente seleccionado
      selectedPatient.medicinesId = selectedPatient.medicinesId.filter(id => id !== selectedMedicine.value.id);
      console.log("Updated Patient Medicines:", selectedPatient.medicinesId);

      // Actualizar el paciente en el servidor
      await patientsService.updatePatient(selectedPatient.id, selectedPatient);
      console.log(`Paciente ${selectedPatient.id} actualizado después de eliminar la medicina ID ${selectedMedicine.value.id}`);
    } else {
      console.error("No patient selected");
    }

    // Limpiar la selección de medicina
    selectedMedicine.value = null;

  } catch (error) {
    console.error("Error deleting medicine:", error);
  }
};
</script>

<template>
  <pv-dialog v-model:visible="displayDialog" :modal="true" :closable="false" class="modalD-container">
    <template #header class="modalD" >
      <div class="modal-header center" style="margin: 0 auto;" >
        <label class="modalD-title">Medicamentos</label>
      </div>
    </template>
    <div class="container-medicine">
    <div class="table-section">
    <div v-for="patient in selectedPatients" :key="patient.id">
      <p>Nombre completo: {{ patient.name }}</p>
      <pv-data-table :value="getMedicineDetails(patient.medicinesId)"  dataKey="id" class="p-datatable-responsive">
        <pv-column header="" class="select-column">
          <template #body="slotProps">
            <input type="radio" v-model="selectedMedicine" :value="slotProps.data" name="medicineSelection" />
          </template>
        </pv-column>
        <pv-column field="medicineName" header="Medicamento" class="medicine-column"></pv-column>
        <pv-column field="medicineDescription" header="Instrucciones" class="description-column"></pv-column>
      </pv-data-table>
      <div  class="flex-auto vertical-space ">
      <pv-button class="btn-act" @click="editMedicine">Editar</pv-button>
      <pv-button @click="deleteMedicine">Eliminar</pv-button>
      </div>
    </div>
    </div>
    <div class="action-section">
    <div>
      <div>
      <p>Nuevo Medicamento</p>
      <div class="text-bold text-left vertical-space">Medicamento:</div>
      <input v-model="newMedicineName" class="flex-auto vertical-space input-medicine" autocomplete="off" />
      <div class="text-bold text-left vertical-space">Intrucciones:</div>
      <input v-model="newMedicineDescription"  class="flex-auto vertical-space input-medicine" autocomplete="off" />
      </div>
      <div  class="flex-auto vertical-space btn-act">
        <pv-button class="btn-act"  @click="addNewMedicine">Añadir</pv-button>
        <pv-button @click="hideDialog">Cancelar</pv-button>
      </div>

    </div>
    </div>
    </div>
  </pv-dialog>

  <pv-dialog v-model:visible="editDialogVisible" :modal="true" :closable="true">
    <template #header class="modalD" >
      <div class="modal-header center" style="margin: 0 auto;" >
        <label class="modalD-title">Medicamentos</label>
      </div>
    </template>
    <div v-if="selectedMedicine">
      <div class="text-bold text-left vertical-space">Medicamento:</div>
      <input v-model="editMedicineName" class="flex-auto vertical-space input-medicine" autocomplete="off" />
      <div class="text-bold text-left vertical-space">Intrucciones:</div>
      <input v-model="editMedicineDescription" class="flex-auto vertical-space input-medicine" autocomplete="off" />
      <div  class="flex-auto vertical-space btn-act">

      <pv-button class="btn-act" @click="updateMedicine">Actualizar</pv-button>
      <pv-button @click="hideEditDialog">Close</pv-button>

    </div>
    </div>
  </pv-dialog>
</template>

<style scoped>
.container-medicine {
  display: flex;
  flex-direction: row;
  height: 50vh;
}
.input-medicine{
  width: 250px;
  height: 32px;
  background: #fcfcfc;
  border: 1px solid #aaa;
  border-radius: 5px;
  box-shadow: 0 0 3px #ccc, 0 10px 15px #ebebeb inset;
  text-indent: 5px;
}
.vertical-space{
  margin-top:10px;
}
.btn-act{
  margin-right:5px !important;
}
.modal-header h3 {
  margin-top: 0;
  color: #42b983;
  margin: 0 auto;

}
.modalD-title{
  font-family: League Spartan;
  font-size: 25px;
  font-weight:bold;
  line-height: 10px;
  text-align: center;
}
.modalD-container {
  width: 70%;
  margin: 0px auto;
  padding: 20px 30px;
  border-radius: 15px !important;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}
</style>
