import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OperatorDialogComponent } from '../../operator-dialog/operator-dialog.component'; 
import { OperatorService } from '../../services/operator.service';




@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.css']
})
export class OperatorsComponent implements OnInit {
  operators: any[] = [];
  filteredOperators: any[] = [];
  searchQuery: string = '';

  constructor(private operatorService: OperatorService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadOperators();
  }

  loadOperators() {
    this.operatorService.getOperators()
      .subscribe(operators => {
        this.operators = operators;
        this.filterOperators();
      }, error => {
        console.error('Error fetching operators:', error);
      });
  }

  toggleEditMode(operator: any) {
    operator.editMode = !operator.editMode;
    
  }

  saveOperatorChanges(operator: any) {
    this.operatorService.updateOperator(operator)
      .subscribe(() => {
        console.log('Operator updated successfully!');
        operator.editMode = false;
      }, error => {
        console.error('Error updating operator:', error);
      });
  }

  deleteOperator(operator: any) {
    this.operatorService.deleteOperator(operator.slNo)
      .subscribe(() => {
        console.log('Operator deleted successfully!');
        this.loadOperators(); // Refresh operators after deletion
      }, error => {
        console.error('Error deleting operator:', error);
      });
  }

  searchOperators() {
    this.filterOperators();
  }

  openAddOperatorDialog(): void {
    const dialogRef = this.dialog.open(OperatorDialogComponent, {
      width: '250px',
      data: { }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.operatorService.addOperator(result)
          .subscribe(() => {
            console.log('Operator added successfully!');
            this.loadOperators(); // Refresh operators after addition
          }, error => {
            console.error('Error adding operator:', error);
          });
      }
    });
  }

  private filterOperators() {
    if (this.searchQuery.trim() !== '') {
      this.filteredOperators = this.operators.filter(operator =>
        operator.operatorName.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    } else {
      this.filteredOperators = this.operators;
    }
  }
}
