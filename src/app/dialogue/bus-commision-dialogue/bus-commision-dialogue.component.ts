import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { BusCommissionService } from '../../services/bus-commission.service';

@Component({
  selector: 'app-bus-commision-dialogue',
  templateUrl: './bus-commision-dialogue.component.html',
  styleUrl: './bus-commision-dialogue.component.css'
})
export class BusCommisionDialogueComponent implements OnInit {

  formData: any = {
    category: '',
    operatorName: '',
    markuptype: '',
    markupnumber:'',
    commisiontype:'', 
    commision:'',
    status:true
  };

  constructor(public dialogRef: MatDialogRef<BusCommisionDialogueComponent>,private busService:BusCommissionService) { 
    
  }

  ngOnInit(): void {
    
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }
  
saveData(){
this.busService.addCommission(this.formData).subscribe((res)=>{
console.log("Added Successfully");
},err=>{
  console.log("errr",err)
})}

}
