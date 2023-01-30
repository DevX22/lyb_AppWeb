export class TipoDocumentoModel {
  id: number;
  maxCaracteres: number;
  tipoDocumento: string;

  constructor() {
    this.id = 0;
    this.maxCaracteres = 0;
    this.tipoDocumento = '';
  }
}
