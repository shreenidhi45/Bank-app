import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewqueryUpdateComponent } from './newquery-update.component';

describe('NewqueryUpdateComponent', () => {
  let component: NewqueryUpdateComponent;
  let fixture: ComponentFixture<NewqueryUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewqueryUpdateComponent]
    });
    fixture = TestBed.createComponent(NewqueryUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
