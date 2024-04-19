import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusTicketDetailsComponent } from './bus-ticket-details.component';

describe('BusTicketDetailsComponent', () => {
  let component: BusTicketDetailsComponent;
  let fixture: ComponentFixture<BusTicketDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BusTicketDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BusTicketDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
