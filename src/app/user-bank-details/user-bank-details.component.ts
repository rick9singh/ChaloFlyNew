import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BankUserDetailsService } from '../services/bank-user-details.service';
import { UserBankDetailsDilogueComponent } from './../dialogue/user-bank-details-dilogue/user-bank-details-dilogue.component';

@Component({
  selector: 'app-user-bank-details',
  templateUrl:'./user-bank-details.component.html',
  styleUrl: './user-bank-details.component.css'
})
export class UserBankDetailsComponent  implements OnInit {
  userBankDetails: any[] = [];


  constructor(private bankUserDetailsService: BankUserDetailsService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.userBankDetail()
  }

  userBankDetail(){
    this.bankUserDetailsService.getAllDetails()
      .subscribe(userBankDetails => {
        this.userBankDetails = userBankDetails.map((userBankDetails, index) => ({ ...userBankDetails, slNo: index + 1 }));
      }, error => {
        console.error('Error fetching Bank details:', error);
      });
  }

  toggleEditMode(userBankDetails: any,isEdit:boolean) {
    this.dialog.open(UserBankDetailsDilogueComponent, {
      width: '500px',
      data: {data:userBankDetails,isEdit:isEdit} // You can pass data to the dialog if needed
    }).afterClosed().subscribe(() => {
      // Reload Bank details after dialog closed (assuming dialog adds new commission)
      this.userBankDetail();
    });
    userBankDetails.editMode = !userBankDetails.editMode;
  }

  deleteBankDetails(userBankDetails: any) {
    this.bankUserDetailsService.deleteBankDetails(userBankDetails.id)
      .subscribe(() => {
        console.log('Bank details deleted successfully!');
        this.userBankDetail(); // Reload commissions after deletion
      }, error => {
        console.error('Error deleting Bank details:', error);
      });
  }

  saveCommissionChanges(bankDetails: any) {
   
  }

  searchOperators() {
    // Implement search functionality here
  }

  openAddCommissionDialog(isEdit:boolean) {
    this.dialog.open(UserBankDetailsDilogueComponent, {
      width: '500px',
      data: {data:{},isEdit:isEdit} // You can pass data to the dialog if needed
    }).afterClosed().subscribe(() => {
      // Reload Bank details after dialog closed (assuming dialog adds new commission)
      this.userBankDetail();
    });
  }

  toggleStatus(bankDetails: any) {
    // Implement logic to update status in the database
    this.bankUserDetailsService.updateBankDetails(bankDetails)
      .subscribe(() => {
        console.log('Status updated successfully!');
      }, error => {
        console.error('Error updating status:', error);
      });
  }
}
