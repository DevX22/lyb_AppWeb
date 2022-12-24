import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomCarruselComponent } from './custom-carrusel.component';

describe('CustomCarruselComponent', () => {
  let component: CustomCarruselComponent;
  let fixture: ComponentFixture<CustomCarruselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomCarruselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomCarruselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
