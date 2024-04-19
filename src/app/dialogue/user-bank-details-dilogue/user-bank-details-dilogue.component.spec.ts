import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBankDetailsDilogueComponent } from './user-bank-details-dilogue.component';

describe('UserBankDetailsDilogueComponent', () => {
  let component: UserBankDetailsDilogueComponent;
  let fixture: ComponentFixture<UserBankDetailsDilogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserBankDetailsDilogueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserBankDetailsDilogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
