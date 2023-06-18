import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JediDashComponent } from './jedi-dash.component';

describe('JediDashComponent', () => {
  let component: JediDashComponent;
  let fixture: ComponentFixture<JediDashComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JediDashComponent]
    });
    fixture = TestBed.createComponent(JediDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
