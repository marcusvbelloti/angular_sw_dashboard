import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwUniverseAnalyticsComponent } from './sw-universe-analytics.component';

describe('SwUniverseAnalyticsComponent', () => {
  let component: SwUniverseAnalyticsComponent;
  let fixture: ComponentFixture<SwUniverseAnalyticsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SwUniverseAnalyticsComponent]
    });
    fixture = TestBed.createComponent(SwUniverseAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
