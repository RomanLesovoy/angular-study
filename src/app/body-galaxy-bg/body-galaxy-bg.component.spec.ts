import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyGalaxyBgComponent } from './body-galaxy-bg.component';

describe('BodyGalaxyBgComponent', () => {
  let component: BodyGalaxyBgComponent;
  let fixture: ComponentFixture<BodyGalaxyBgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BodyGalaxyBgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyGalaxyBgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
