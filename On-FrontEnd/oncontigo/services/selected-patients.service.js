// src/services/selectedPatientsService.js
import { ref } from 'vue';

class SelectedPatientsService {
    constructor() {
        this.selectedPatients = ref([]);
    }

    selectPatient(patient) {
        const index = this.selectedPatients.value.findIndex(p => p.id === patient.id);
        if (index > -1) {
            this.selectedPatients.value.splice(index, 1);
        } else {
            this.selectedPatients.value.push(patient);
        }
    }

    getSelectedPatients() {
        return this.selectedPatients;
    }
}

export const selectedPatientsService = new SelectedPatientsService();
