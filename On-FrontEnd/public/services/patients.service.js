import http from "../../shared/http-common.js";

class PatientsService {
    getAll() {
        return http.get(`/patients`);
    }

    getById(id) {
        return http.get(`/patients/${id}`);
    }

    getByIdDoctor(idDoctor) {
        return http.get(`/patients?idDoctor=${idDoctor}`);
    }

    create(patientData) {
        return http.post(`/patients`, patientData);
    }

    updatePatient(id, patientData) {
        return http.put(`/patients/${id}`, patientData);
    }

    deletePatient(id) {
        return http.delete(`/patients/${id}`);
    }
}

export const patientsService = new PatientsService();
