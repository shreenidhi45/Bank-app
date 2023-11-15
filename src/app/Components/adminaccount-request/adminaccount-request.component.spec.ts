import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminaccountRequestComponent } from './adminaccount-request.component';

describe('AdminaccountRequestComponent', () => {
  let component: AdminaccountRequestComponent;
  let fixture: ComponentFixture<AdminaccountRequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminaccountRequestComponent]
    });
    fixture = TestBed.createComponent(AdminaccountRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
