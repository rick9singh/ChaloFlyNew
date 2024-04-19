import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusBetweenCitiesComponentComponent } from './bus-between-cities.component.component';

describe('BusBetweenCitiesComponentComponent', () => {
  let component: BusBetweenCitiesComponentComponent;
  let fixture: ComponentFixture<BusBetweenCitiesComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BusBetweenCitiesComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BusBetweenCitiesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
