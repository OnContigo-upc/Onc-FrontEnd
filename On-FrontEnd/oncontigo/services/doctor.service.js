import http from "../../shared/http-common.js";

export class PatientsService{
    getAllDoctors(){
        return http.get(`/doctors`);
    }

    getByIdDoctor(idDoctor){
        return http.get(`/doctors/${idDoctor}`);
    }
}