import http from "../../shared/http-common.js";

export class DoctorService{
    getAllDoctors(){
        return http.get(`/doctors`);
    }

    getByIdDoctor(idDoctor){
        return http.get(`/doctors/${idDoctor}`);
    }
}