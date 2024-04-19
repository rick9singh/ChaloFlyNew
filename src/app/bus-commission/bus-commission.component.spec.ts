import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusCommissionComponent } from './bus-commission.component';

describe('BusCommissionComponent', () => {
  let component: BusCommissionComponent;
  let fixture: ComponentFixture<BusCommissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BusCommissionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BusCommissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
