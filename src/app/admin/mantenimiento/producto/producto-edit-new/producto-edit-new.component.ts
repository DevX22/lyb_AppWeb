import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { ProductoDtoGpl } from 'src/app/admin/dto/productoQpl.dto';
import { ProductoModel } from 'src/app/admin/model/producto.model';
import { ProveedorModel } from 'src/app/admin/model/proveedor.model';
import { ProductoService } from 'src/app/admin/service/producto.service';

@Component({
  selector: 'app-producto-edit-new',
  templateUrl: './producto-edit-new.component.html',
  styleUrls: ['./producto-edit-new.component.scss'],
})
export class ProductoEditNewComponent implements OnInit {
  @Input() idProducto: number = 0;
  @Output() closeModalEmitter = new EventEmitter<boolean>();
  submitted = true;
  productoSave: ProductoDtoGpl = new ProductoDtoGpl();
  producto: ProductoModel = new ProductoModel();
  productoForm: FormGroup;
  @ViewChild('childModalProveedor', { static: false })
  childModalProveedor?: ModalDirective;
  proveedorSelect: ProveedorModel = new ProveedorModel();

  constructor(
    private serviceProducto: ProductoService,
    private fb: FormBuilder
  ) {
    this.productoForm = this.fb.group({
      id: [{ value: 0 }, Validators.required],
      producto: [
        '',
        [Validators.required, Validators.pattern('[a-zá-úa-u A-ZÁ-ÚA-U]+$')],
      ],
      descripcion: [''],
      id_proveedor: [{ value: 0 }],
      proveedor: [''],
      id_categoria: [{ value: 0 }],
      categoria: [''],
      id_tipoMedida: [{ value: 0 }],
      tipoMedida: [''],
      medida: [''],
      alto: [''],
      ancho: [''],
      profundidad: [''],
      precioCompra: [{ value: 0 }],
      precioVenta: [{ value: 0 }],
      stock: [{ value: 0 }],
      estado: [true],
    });
  }
  get f() {
    return this.productoForm.controls;
  }

  ngOnInit(): void {
    if (this.idProducto != 0) {
      this.getProducto();
    }
  }

  getProducto() {
    this.serviceProducto.getById(this.idProducto).subscribe(
      (data: ProductoModel) => {
        console.log(data);
      },
      (err) => {}
    );
  }

  getColores() {}

  resModalSecon(res: proveedor) {
    if (res) {
      console.log(res);
    }
    this.childModalProveedor?.hide();
  }

  searchProveedor() {
    this.childModalProveedor?.show();
  }

  closeModal(res: boolean) {
    if (res) {
      setTimeout(() => {
        this.closeModalEmitter.emit(res);
      }, 2500);
    } else {
      this.closeModalEmitter.emit(res);
    }
  }
}

class proveedor {
  id: number;
  nombre: string;
  constructor() {
    this.id = 0;
    this.nombre = '';
  }
}
