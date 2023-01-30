import { core } from '@angular/compiler';

export class PersonaModel {
  id: number;
  nombre: string;
  apellidoPaterno: string;
  apellidoMaterno: string;
  tipoDocumento: string;
  numeroDocumento: string;
  celular: string;
  whatsApp: string;
  correo: string;
  fechaNacimiento: Date;
  constructor() {
    this.id = 0;
    this.nombre = '';
    this.apellidoMaterno = '';
    this.apellidoPaterno = '';
    this.tipoDocumento = '';
    this.numeroDocumento = '';
    this.celular = '';
    this.whatsApp = '';
    this.correo = '';
    this.fechaNacimiento = new Date();
  }
}
