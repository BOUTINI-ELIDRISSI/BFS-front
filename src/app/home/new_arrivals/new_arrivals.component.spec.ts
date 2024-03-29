import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewArrivalsComponent } from './new_arrivals.component';

describe('SecondSectionComponent', () => {
  let component: NewArrivalsComponent;
  let fixture: ComponentFixture<NewArrivalsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewArrivalsComponent]
    });
    fixture = TestBed.createComponent(NewArrivalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
