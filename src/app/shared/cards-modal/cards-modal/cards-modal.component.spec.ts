import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsModalComponent } from './cards-modal.component';

describe('CardsModalComponent', () => {
  let component: CardsModalComponent;
  let fixture: ComponentFixture<CardsModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardsModalComponent]
    });
    fixture = TestBed.createComponent(CardsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
