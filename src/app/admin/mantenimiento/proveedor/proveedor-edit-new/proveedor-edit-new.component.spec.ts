import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProveedorEditNewComponent } from './proveedor-edit-new.component';

describe('ProveedorEditNewComponent', () => {
  let component: ProveedorEditNewComponent;
  let fixture: ComponentFixture<ProveedorEditNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProveedorEditNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProveedorEditNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
