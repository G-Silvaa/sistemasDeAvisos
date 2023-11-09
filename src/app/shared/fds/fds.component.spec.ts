import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FdsComponent } from './fds.component';

describe('FdsComponent', () => {
  let component: FdsComponent;
  let fixture: ComponentFixture<FdsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FdsComponent]
    });
    fixture = TestBed.createComponent(FdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
