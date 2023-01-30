import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoEditNewComponent } from './producto-edit-new.component';

describe('ProductoEditNewComponent', () => {
  let component: ProductoEditNewComponent;
  let fixture: ComponentFixture<ProductoEditNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductoEditNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductoEditNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
