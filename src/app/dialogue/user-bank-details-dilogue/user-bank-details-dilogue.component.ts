import { Component, Inject, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BankUserDetailsService } from '../../services/bank-user-details.service';
@Component({
  selector: 'app-user-bank-details-dilogue',
  templateUrl: './user-bank-details-dilogue.component.html',
  styleUrl: './user-bank-details-dilogue.component.css'
})
export class UserBankDetailsDilogueComponent {
  formData:any={
    bankName:'',
    branch:'',
    accNo:'',
    accountName:'',
    address:'',
    ifsc:'',


  }
  isEdit: boolean=false;
  
  constructor(public dialogRef: MatDialogRef<UserBankDetailsDilogueComponent>,private bankDetailService: BankUserDetailsService, @Inject(MAT_DIALOG_DATA) private data:any) { 
    if(data.isEdit){
      this.formData=data.data
      this.isEdit=data.isEdit
      }
  }

  ngOnInit(): void {
    
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }
  
saveData(){
  if(!this.data.isEdit){
    this.bankDetailService.addBankDetails(this.formData).subscribe((res)=>{
      console.log("Added Successfully");
      },err=>{
        console.log("errr",err)
      })
  }
else{
  this.bankDetailService.updateBankDetails(this.formData)
  .subscribe(() => {
    console.log('Bank details updated successfully!');
    this.formData.editMode = false;
  }, (error:any) => {
    console.error('Error updating Bank details:', error);
  });
}

}
}