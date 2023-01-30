import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ProveedorModel } from '../../model/proveedor.model';
import { ProveedorService } from '../../service/proveedor.service';

@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.component.html',
  styleUrls: ['./proveedor.component.scss'],
})
export class ProveedorComponent implements OnInit {
  proveedores: ProveedorModel[] = [];
  proveedorSelect: ProveedorModel = new ProveedorModel();
  modalRef?: BsModalRef;
  accionModal: string = '';

  constructor(
    private serviceProveedor: ProveedorService,
    private serviceModal: BsModalService
  ) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.serviceProveedor.getAll().subscribe(
      (data: ProveedorModel[]) => {
        this.proveedores = data;
      },
      (errr) => {}
    );
  }

  create(temp: TemplateRef<any>) {
    this.proveedorSelect = new ProveedorModel();
    this.accionModal = 'Nuevo proveedor';
    this.openModal(temp);
  }

  edit(obj: ProveedorModel, temp: TemplateRef<any>) {
    this.proveedorSelect = obj;
    this.accionModal = 'Editar proveedor';
    this.openModal(temp);
  }

  resModalEmiter(res: boolean) {
    if (res) {
      this.getAll();
    }
    this.serviceModal.hide();
  }

  openModal(temp: TemplateRef<any>) {
    this.modalRef = this.serviceModal.show(
      temp,
      Object.assign(
        {},
        {
          class: 'gray modal-lg modal-dialog-centered',
          ignoreBackdropClick: true,
          keyboard: true,
        }
      )
    );
  }
}
