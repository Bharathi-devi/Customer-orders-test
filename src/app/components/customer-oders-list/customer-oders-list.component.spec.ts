import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerOdersListComponent } from './customer-oders-list.component';

describe('CustomerOdersListComponent', () => {
  let component: CustomerOdersListComponent;
  let fixture: ComponentFixture<CustomerOdersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerOdersListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerOdersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
