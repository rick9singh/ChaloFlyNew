import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorDialogComponent } from './operator-dialog.component';

describe('OperatorDialogComponent', () => {
  let component: OperatorDialogComponent;
  let fixture: ComponentFixture<OperatorDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OperatorDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OperatorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
