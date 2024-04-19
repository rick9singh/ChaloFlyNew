import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-operator-dialog',
  templateUrl: './operator-dialog.component.html',
  styleUrls: ['./operator-dialog.component.css']
})
export class OperatorDialogComponent implements OnInit {
  formData: any = {
    sourceType: '',
    operatorName: '',
    operatorCode: ''
  };

  constructor(public dialogRef: MatDialogRef<OperatorDialogComponent>) { }

  ngOnInit(): void {
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }
}
