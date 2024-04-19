import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRevokeBalanceComponent } from './add-revoke-balance.component';

describe('AddRevokeBalanceComponent', () => {
  let component: AddRevokeBalanceComponent;
  let fixture: ComponentFixture<AddRevokeBalanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddRevokeBalanceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddRevokeBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
