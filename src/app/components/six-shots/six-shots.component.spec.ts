import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SixShotsComponent } from './six-shots.component';

describe('SixShotsComponent', () => {
  let component: SixShotsComponent;
  let fixture: ComponentFixture<SixShotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SixShotsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SixShotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
