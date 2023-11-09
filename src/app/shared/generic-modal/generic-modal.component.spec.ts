import { ComponentFixture, TestBed } from '@angular/core/testing';
import { genericmodalComponent } from './generic-modal-modal.component';



describe('InitalModalComponent', () => {
  let component: genericmodalComponent;
  let fixture: ComponentFixture<genericmodalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [genericmodalComponent]
    });
    fixture = TestBed.createComponent(genericmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
