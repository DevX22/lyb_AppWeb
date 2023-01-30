import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaEditNewComponent } from './categoria-edit-new.component';

describe('CategoriaEditNewComponent', () => {
  let component: CategoriaEditNewComponent;
  let fixture: ComponentFixture<CategoriaEditNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriaEditNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriaEditNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
