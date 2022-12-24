export class personaModel{
    id: number;
    nombre: string;
    apellidoPaterno	:string;
    apellidoMaterno:	string;
    tipoDocumento:	string;
    numeroDocumento:	string;
    celular:	string;
    whatsApp:	string;
    correo:	string;
    fechaNacimiento: Date;
    constructor() {
        this.id = 0 ;
        this.nombre = "";
        this.apellidoPaterno = "";
        this.apellidoMaterno = "";
        this.tipoDocumento = "";
        this.numeroDocumento = "";
        this.celular = "";
        this.whatsApp = "";
        this.correo = "";
        this.fechaNacimiento = new Date();
    }
}
