import http from "../../shared/http-common.js";

export class MedicinesService {
    static getAllMedicines() {
        return http.get('/medicines');
    }

    static getMedicineById(medicineId) {
        return http.get(`/medicines/${medicineId}`);
    }

    static createMedicine(medicineData) {
        return http.post('/medicines', medicineData);
    }

    static updateMedicine(medicineId, medicineData) {
        return http.put(`/medicines/${medicineId}`, medicineData);
    }

    static deleteMedicine(medicineId) {
        return http.delete(`/medicines/${medicineId}`);
    }
}
