export class Patient {
    constructor(
                    id = '',
                    name = '',
                    dni = '',
                    email = '',
                    nextAppoinment = '',
                    lastAppointmet = '',
                    idDoctor = ''
                ) {
        this.id = id;
        this.name = name;
        this.dni = dni;
        this.email = email;
        this.nextAppoinment = nextAppoinment;
        this.lastAppointmet = lastAppointmet;
        this.idDoctor = idDoctor;
    }
}