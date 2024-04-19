import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusCommisionDialogueComponent } from './bus-commision-dialogue.component';

describe('BusCommisionDialogueComponent', () => {
  let component: BusCommisionDialogueComponent;
  let fixture: ComponentFixture<BusCommisionDialogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BusCommisionDialogueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BusCommisionDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
