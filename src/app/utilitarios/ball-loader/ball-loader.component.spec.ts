import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BallLoaderComponent } from './ball-loader.component';

describe('BallLoaderComponent', () => {
  let component: BallLoaderComponent;
  let fixture: ComponentFixture<BallLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BallLoaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BallLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
