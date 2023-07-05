import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatapassInputComponent } from './datapass-input.component';

describe('DatapassInputComponent', () => {
  let component: DatapassInputComponent;
  let fixture: ComponentFixture<DatapassInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatapassInputComponent]
    });
    fixture = TestBed.createComponent(DatapassInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
