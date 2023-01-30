import { Component, OnInit, TemplateRef } from '@angular/core';
import { CategoriaModel } from 'src/app/share/model/categoria.model';
import { CategoriaService } from '../../service/categoria.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import Swal from 'sweetalert2';
import { refresh } from 'aos';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss'],
})
export class CategoriaComponent implements OnInit {
  categorias: CategoriaModel[] = [];
  modalRef?: BsModalRef;
  accionModal: string = '';
  categoriaSelect: CategoriaModel = new CategoriaModel();

  constructor(
    private modalService: BsModalService,
    private _categoriaService: CategoriaService
  ) {}

  ngOnInit(): void {
    this.list();
  }

  list() {
    this._categoriaService.getAll().subscribe((data: CategoriaModel[]) => {
      this.categorias = data;
    });
  }

  create(temp: TemplateRef<any>) {
    this.categoriaSelect = new CategoriaModel();
    this.accionModal = 'Nueva Categoria';
    this.openModal(temp);
  }

  edit(obj: CategoriaModel, temp: TemplateRef<any>) {
    this.categoriaSelect = obj;
    this.accionModal = 'Editar categoria';
    this.openModal(temp);
  }

  delete(obj: CategoriaModel) {
    this.categoriaSelect = obj;
    Swal.fire({
      title:
        '¿Está seguro que desea eliminar la categoria: ' + obj.categoria + '?',
      text: '¡No podrás revertir esto!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminar',
    }).then((result) => {
      if (result.isConfirmed) {
        // this._materialService.delete(this.selectMaterial).subscribe(
        //   (data:ResponseModel)=>{
        //     this.getAllMaterial();
        //   }
        // );
        // alert_success("Eliminado exitosamente");
        // this.modalService.hide();
      } else {
        this.modalService.hide();
      }
    });
  }

  resModalEmiter(res: boolean) {
    if (res) {
      this.list();
    }
    this.modalService.hide();
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(
      template,
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
