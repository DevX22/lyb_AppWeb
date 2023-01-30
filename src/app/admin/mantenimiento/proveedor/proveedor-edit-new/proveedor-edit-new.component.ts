import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProveedorModel } from 'src/app/admin/model/proveedor.model';
import { TipoDocumentoModel } from 'src/app/admin/model/tipoDoc.model';
import { ProveedorService } from 'src/app/admin/service/proveedor.service';
import { TipoDocumentoService } from 'src/app/admin/service/tipo-documento.service';
import { alert_error, alert_success } from 'src/app/share/utils/alert.funcions';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { esLocale } from 'ngx-bootstrap/locale';

defineLocale('es', esLocale);

@Component({
  selector: 'app-proveedor-edit-new',
  templateUrl: './proveedor-edit-new.component.html',
  styleUrls: ['./proveedor-edit-new.component.scss'],
})
export class ProveedorEditNewComponent {
  @Input() proveedor: ProveedorModel = new ProveedorModel();
  @Output() closeModalEmiter = new EventEmitter<boolean>();

  proveedorForm: FormGroup;
  proveedorSave: ProveedorModel = new ProveedorModel();
  submitted = true;
  tiposDocumento: TipoDocumentoModel[] = [];

  constructor(
    private serviceProveedor: ProveedorService,
    private serviceTipoDoc: TipoDocumentoService,
    private fb: FormBuilder,
    private localeService: BsLocaleService
  ) {
    this.proveedorForm = this.fb.group({
      id: [{ value: 0 }, [Validators.required]],
      razonSocial: [
        null,
        [Validators.required, Validators.pattern('[a-zá-úA-Z Á-Ú.]+$')],
      ],
      nombreComercial: [null, Validators.required],
      ruc: [
        null,
        [
          Validators.required,
          Validators.pattern('[0-9]+$'),
          Validators.maxLength(11),
        ],
      ],
      direccion: [null, Validators.required],
      celular: [
        null,
        [
          Validators.required,
          Validators.pattern('[0-9]+$'),
          Validators.maxLength(9),
        ],
      ],
      whatsapp: ['', [Validators.pattern('[0-9]+$'), Validators.maxLength(9)]],
      fijo: ['', [Validators.maxLength(6), Validators.pattern('[0-9]+$')]],
      correo: ['', Validators.email],
      id_representante: [0, Validators.required],
      representante: [''],
      representate: this.fb.group({
        id: [{ value: 0, disabled: true }, Validators.required],
        nombre: [
          '',
          [Validators.required, Validators.pattern('[a-z A-Zá-úÁ-Ú]+$')],
        ],
        apellidoPaterno: [
          '',
          [Validators.required, Validators.pattern('[a-z A-Zá-úÁ-Ú]+$')],
        ],
        apellidoMaterno: ['', Validators.pattern('[a-z A-Zá-úÁ-Ú]+$')],
        tipoDocumento: ['', Validators.required],
        numeroDocumento: [
          '',
          [
            Validators.required,
            Validators.pattern('[0-9]+$'),
            Validators.maxLength(12),
          ],
        ],
        celular: [
          '',
          [
            Validators.required,
            Validators.pattern('[0-9]+$'),
            Validators.maxLength(9),
          ],
        ],
        whatsapp: [
          '',
          [Validators.pattern('[0-9]+$'), Validators.maxLength(9)],
        ],
        fijo: ['', [Validators.maxLength(6), Validators.pattern('[0-9]+$')]],
        correo: ['', Validators.email],
        fechaNacimiento: [''],
      }),
    });
  }

  get f() {
    return this.proveedorForm.controls;
  }

  get r() {
    return this.representanteForm.controls;
  }

  get representanteForm(): FormGroup {
    return this.proveedorForm.get('representate') as FormGroup;
  }

  ngOnInit(): void {
    this.localeService.use('es');
    this.getAll();
    if (this.proveedor.id != 0) {
      this.proveedorForm.patchValue(this.proveedor);
    }
  }

  getAll() {
    this.serviceTipoDoc.getAll().subscribe((data: TipoDocumentoModel[]) => {
      this.tiposDocumento = data;
    });
  }

  save() {
    this.proveedorSave = this.proveedorForm.getRawValue();
    if (this.proveedor.id != 0) {
      this.update(this.proveedorSave);
    } else {
      if (this.proveedor.id == 0) {
        this.create(this.proveedorSave);
      }
    }
  }
  create(obj: ProveedorModel) {
    obj.id = 0;
    obj.id_representante = 0;
    obj.representate.id = 0;
    this.serviceProveedor.create(obj).subscribe(
      (status: boolean) => {
        alert_success('Registro Creado');
        this.closeModal(true);
      },
      (err) => {
        alert_error('Error del servidor', 'No pudimos procesar su solicitud');
        this.closeModal(false);
      }
    );
  }

  update(obj: ProveedorModel) {
    this.serviceProveedor.update(obj).subscribe(
      (status: boolean) => {
        alert_success('Cambios Guardado');
        this.closeModal(true);
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
        this.closeModalEmiter.emit(res);
      }, 2500);
    } else {
      this.closeModalEmiter.emit(res);
    }
  }

  onButtonSave() {
    // proveedor
    for (let i = 1; i < 9; i++) {
      if (this.f[i].errors) {
        return false;
      }
    }
    // resposable
    for (let i = 1; i < 11; i++) {
      if (this.r[i].errors) {
        return false;
      }
    }
    return true;
  }
}
