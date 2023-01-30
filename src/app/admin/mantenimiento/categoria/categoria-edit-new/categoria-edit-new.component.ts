import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ɵinitDomAdapter } from '@angular/platform-browser';
import { FaLayersComponent } from '@fortawesome/angular-fontawesome';
import { CategoriaService } from 'src/app/admin/service/categoria.service';
import { CategoriaModel } from 'src/app/share/model/categoria.model';
import {
  alert_error,
  alert_success,
  alert_warning,
} from 'src/app/share/utils/alert.funcions';

@Component({
  selector: 'app-categoria-edit-new',
  templateUrl: './categoria-edit-new.component.html',
  styleUrls: ['./categoria-edit-new.component.scss'],
})
export class CategoriaEditNewComponent implements OnInit {
  @Input() categoria: CategoriaModel = new CategoriaModel();
  @Output() closeModalEmitter = new EventEmitter<boolean>();

  formCategoria: FormGroup;
  categoriaSave: CategoriaModel = new CategoriaModel();
  submitted = true;

  constructor(
    private _categoriaService: CategoriaService,
    private fb: FormBuilder
  ) {
    this.formCategoria = this.fb.group({
      id: [{ value: this.categoria.id, disabled: true }, [Validators.required]],
      categoria: [
        this.categoria.categoria,
        [Validators.required, Validators.pattern('[a-zA-Zá-ú]+$')],
      ],
    });
  }

  get f() {
    return this.formCategoria.controls;
  }

  ngOnInit(): void {
    if (this.categoria.id != 0) {
      this.formCategoria.patchValue(this.categoria);
    }
  }

  save() {
    this.categoriaSave = this.formCategoria.getRawValue();
    if (this.categoria.id != 0) {
      this.update(this.categoriaSave);
    } else {
      if (this.categoria.id == 0) {
        this.create(this.categoriaSave);
      }
    }
  }

  create(obj: CategoriaModel) {
    obj.id = 0;
    this._categoriaService.Create(obj).subscribe(
      (status: boolean) => {
        if (status) {
          alert_success('Registro Creado');
          this.closeModal(true);
        } else {
          alert_warning('Tenemos problemas para crear el registro');
          this.closeModal(false);
        }
      },
      (err) => {
        alert_error('Error del servidor', 'No pudimos procesar su solicitud');
        this.closeModal(false);
      }
    );
  }

  update(obj: CategoriaModel) {
    this._categoriaService.update(obj).subscribe(
      (status: boolean) => {
        if (status) {
          alert_success('Cambios Guardados');
          this.closeModal(true);
        } else {
          alert_warning('Tenemos problemas para guardar los cambios');
        }
      },
      (err) => {
        alert_error('Error del servidor', 'No pudimos procesar su solicitud');
        this.closeModal(false);
      }
    );
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
