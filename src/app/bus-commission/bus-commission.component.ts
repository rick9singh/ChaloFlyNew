import { Component, OnInit } from '@angular/core';
import { BusCommissionService } from '../services/bus-commission.service';
import { MatDialog } from '@angular/material/dialog';
import { BusCommisionDialogueComponent } from '../dialogue/bus-commision-dialogue/bus-commision-dialogue.component';

@Component({
  selector: 'app-bus-commission',
  templateUrl: './bus-commission.component.html',
  styleUrls: ['./bus-commission.component.css']
})
export class BusCommissionComponent implements OnInit {
  commissions: any[] = [];
  searchQuery: string = '';

  constructor(private busCommissionService: BusCommissionService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadCommissions();
  }

  loadCommissions() {
    this.busCommissionService.getAllCommissions()
      .subscribe(commissions => {
        this.commissions = commissions.map((commission, index) => ({ ...commission, slNo: index + 1 }));
      }, error => {
        console.error('Error fetching commissions:', error);
      });
  }

  toggleEditMode(commission: any) {
    commission.editMode = !commission.editMode;
  }

  deleteCommission(commission: any) {
    this.busCommissionService.deleteCommission(commission.id)
      .subscribe(() => {
        console.log('Commission deleted successfully!');
        this.loadCommissions(); // Reload commissions after deletion
      }, error => {
        console.error('Error deleting commission:', error);
      });
  }

  saveCommissionChanges(commission: any) {
    this.busCommissionService.updateCommission(commission)
      .subscribe(() => {
        console.log('Commission updated successfully!');
        commission.editMode = false;
      }, error => {
        console.error('Error updating commission:', error);
      });
  }

  searchOperators() {
    // Implement search functionality here
  }

  openAddCommissionDialog() {
    this.dialog.open(BusCommisionDialogueComponent, {
      width: '500px',
      data: {} // You can pass data to the dialog if needed
    }).afterClosed().subscribe(() => {
      // Reload commissions after dialog closed (assuming dialog adds new commission)
      this.loadCommissions();
    });
  }

  toggleStatus(commission: any) {
    // Implement logic to update status in the database
    this.busCommissionService.updateCommission(commission)
      .subscribe(() => {
        console.log('Status updated successfully!');
      }, error => {
        console.error('Error updating status:', error);
      });
  }
}
