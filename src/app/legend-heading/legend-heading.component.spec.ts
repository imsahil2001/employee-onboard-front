import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegendHeadingComponent } from './legend-heading.component';

describe('LegendHeadingComponent', () => {
  let component: LegendHeadingComponent;
  let fixture: ComponentFixture<LegendHeadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegendHeadingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LegendHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
