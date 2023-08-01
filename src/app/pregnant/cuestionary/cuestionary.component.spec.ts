import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuestionaryComponent } from './cuestionary.component';

describe('CuestionaryComponent', () => {
  let component: CuestionaryComponent;
  let fixture: ComponentFixture<CuestionaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuestionaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuestionaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
