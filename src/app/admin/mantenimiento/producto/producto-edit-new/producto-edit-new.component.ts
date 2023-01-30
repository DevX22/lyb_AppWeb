import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductoDtoGpl } from 'src/app/admin/dto/productoQpl.dto';
import { ProductoService } from 'src/app/admin/service/producto.service';

@Component({
  selector: 'app-producto-edit-new',
  templateUrl: './producto-edit-new.component.html',
  styleUrls: ['./producto-edit-new.component.scss'],
})
export class ProductoEditNewComponent {
  @Input() producto: ProductoDtoGpl = new ProductoDtoGpl();
  @Output() closeModalEmitter = new EventEmitter<boolean>();
  submitted = true;
  productoSave: ProductoDtoGpl = new ProductoDtoGpl();
  productoForm: FormGroup;
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
      colorProducto: this.fb.array([]),
      imgProducto: this.fb.array([]),
    });
  }
  get f() {
    return this.productoForm.controls;
  }
  get Pcolor(): FormArray {
    return this.productoForm.get('colorProducto') as FormArray;
  }
  get Pimg(): FormArray {
    return this.productoForm.get('imgProducto') as FormArray;
  }
}
