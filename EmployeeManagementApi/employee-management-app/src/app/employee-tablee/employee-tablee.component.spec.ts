import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeTableeComponent } from './employee-tablee.component';

describe('EmployeeTableeComponent', () => {
  let component: EmployeeTableeComponent;
  let fixture: ComponentFixture<EmployeeTableeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeTableeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeTableeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
