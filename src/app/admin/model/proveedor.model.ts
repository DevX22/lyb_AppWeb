import { core } from '@angular/compiler';
import { personaModel } from 'src/app/models/persona.model';

export class ProveedorModel {
  id: number;
  razonSocial: string;
  nombreComercial: string;
  ruc: string;
  direccion: string;
  celular: string;
  whatsApp: string;
  fijo: string;
  correo: string;
  id_representante: number;
  representante: string; //modificar por nameRepresentante
  representate: personaModel; //modificar por representante
  constructor() {
    this.id = 0;
    this.razonSocial = '';
    this.nombreComercial = '';
    this.ruc = '';
    this.direccion = '';
    this.celular = '';
    this.whatsApp = '';
    this.fijo = '';
    this.correo = '';
    this.id_representante = 0;
    this.representante = '';
    this.representate = new personaModel();
  }
}
