import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { RequestProductoModel } from 'src/app/share/model/requestProducto.model';
import { ProductoGqlService } from 'src/app/share/service/productoGql.service';
import { ProductoDtoGpl } from '../../dto/productoQpl.dto';
import { CarouselConfig } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss'],
  providers: [
    {
      provide: CarouselConfig,
      useValue: {
        interval: 5000,
        noPause: true,
        showIndicators: false,
      },
    },
  ],
})
export class ProductoComponent implements OnInit {
  productos: ProductoDtoGpl[] = [];
  idSelect: number = 0;
  filter: RequestProductoModel = new RequestProductoModel();
  modalRef?: BsModalRef;
  accionModal: string = '';

  constructor(
    private gplService: ProductoGqlService,
    private serviceModal: BsModalService
  ) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.gplService.getAllGql(this.filter).subscribe(
      ({ data }) => {
        this.productos = data.productos;
      },
      (err) => {}
    );
  }

  create(temp: TemplateRef<any>) {
    this.idSelect = 0;
    this.accionModal = 'Nuevo producto';
    this.openModal(temp);
  }
  edit(id: number, temp: TemplateRef<any>) {
    this.idSelect = id;
    this.accionModal = 'Editar producto';
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
