import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProveedorModel } from 'src/app/admin/model/proveedor.model';
import { ProveedorService } from 'src/app/admin/service/proveedor.service';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-proveedor-search',
  templateUrl: './proveedorSearch.component.html',
  styleUrls: ['./proveedorSearch.component.scss'],
  imports: [FormsModule, CommonModule],
})
export class SearchProveedorComponent implements OnInit {
  @Input() idProducto: number = 0;
  @Output() closeModalEmitterSecon = new EventEmitter<proveedor>();

  proveedores: ProveedorModel[] = [];
  proveedor: proveedor = new proveedor();
  proveedoresFiltrados: ProveedorModel[] = [];
  nombreProveedor: string = '';

  constructor(private proveedorService: ProveedorService) {}

  ngOnInit(): void {
    this.getall();
  }

  getall() {
    this.proveedorService.getAll().subscribe(
      (data: ProveedorModel[]) => {
        this.proveedores = data;
      },
      (err) => {}
    );
  }

  filtrarPorNombre() {
    if (this.nombreProveedor != '') {
      this.proveedoresFiltrados = this.proveedores.filter((proveedor) =>
        proveedor.nombreComercial
          .toLowerCase()
          .includes(this.nombreProveedor.toLowerCase())
      );
      console.log(this.proveedoresFiltrados);
    }
  }

  closeModal(res: proveedor) {
    this.closeModalEmitterSecon.emit(res);
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
