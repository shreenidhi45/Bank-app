import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueriesSolnComponent } from './queries-soln.component';

describe('QueriesSolnComponent', () => {
  let component: QueriesSolnComponent;
  let fixture: ComponentFixture<QueriesSolnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QueriesSolnComponent]
    });
    fixture = TestBed.createComponent(QueriesSolnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
