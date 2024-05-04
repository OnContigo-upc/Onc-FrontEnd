import http from "../../shared/http-common.js";

export class PatientsService{
    getAll(){
        return http.get(`/patients`);
    }

    getById(id){
        return http.get(`/patients/${id}`);
    }
    getByIdDoctor(idDoctor){
        return http.get(`/patients?idDoctor=${idDoctor}`);
    }
}