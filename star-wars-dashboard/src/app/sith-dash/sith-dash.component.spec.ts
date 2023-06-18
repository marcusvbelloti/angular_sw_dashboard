import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SithDashComponent } from './sith-dash.component';

describe('SithDashComponent', () => {
  let component: SithDashComponent;
  let fixture: ComponentFixture<SithDashComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SithDashComponent]
    });
    fixture = TestBed.createComponent(SithDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
