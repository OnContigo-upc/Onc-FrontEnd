<script setup>
import { ref, onMounted } from 'vue';
import { selectedPatientsService } from '../services/selected-patients.service.js';
import { MedicinesService } from '../services/medicines.service.js';
import { patientsService } from '../services/patients.service.js'; // Importa la instancia del servicio de pacientes

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
  <pv-dialog header="Medicamentos" v-model:visible="displayDialog" :modal="true" :closable="false">
    <div v-for="patient in selectedPatients" :key="patient.id">
      <p>Nombre completo: {{ patient.name }}</p>
      <div v-for="medicine in getMedicineDetails(patient.medicinesId)" :key="medicine.id">
        <input type="radio" v-model="selectedMedicine" :value="medicine" name="medicineSelection" />
        <p>Nombre de la medicina: {{ medicine.medicineName }}</p>
        <p>Descripción: {{ medicine.medicineDescription }}</p>
      </div>
    </div>
    <div>
      <input v-model="newMedicineName" placeholder="Medicine Name" />
      <input v-model="newMedicineDescription" placeholder="Medicine Description" />
      <pv-button @click="addNewMedicine">Añadir</pv-button>
      <pv-button @click="editMedicine">Editar</pv-button>
      <pv-button @click="deleteMedicine">Eliminar</pv-button>
    </div>
    <pv-button @click="hideDialog">Close</pv-button>
  </pv-dialog>

  <pv-dialog header="Editar Medicamento" v-model:visible="editDialogVisible" :modal="true" :closable="true">
    <div v-if="selectedMedicine">
      <input v-model="editMedicineName" placeholder="Medicine Name" />
      <input v-model="editMedicineDescription" placeholder="Medicine Description" />
      <pv-button @click="updateMedicine">Actualizar</pv-button>
    </div>
    <pv-button @click="hideEditDialog">Close</pv-button>
  </pv-dialog>
</template>

<style scoped>
</style>
