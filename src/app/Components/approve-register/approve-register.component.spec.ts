import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveRegisterComponent } from './approve-register.component';

describe('ApproveRegisterComponent', () => {
  let component: ApproveRegisterComponent;
  let fixture: ComponentFixture<ApproveRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApproveRegisterComponent]
    });
    fixture = TestBed.createComponent(ApproveRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
