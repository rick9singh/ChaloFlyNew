import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePrpfileComponent } from './update-prpfile.component';

describe('UpdatePrpfileComponent', () => {
  let component: UpdatePrpfileComponent;
  let fixture: ComponentFixture<UpdatePrpfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdatePrpfileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdatePrpfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
