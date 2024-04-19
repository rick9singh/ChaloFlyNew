import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AgentBalanceService } from '../services/agent-balance.service';

/**
 * Add Revoke Balance Component
 */

@Component({
  selector: 'app-add-revoke-balance',
  templateUrl: './add-revoke-balance.component.html',
  styleUrl: './add-revoke-balance.component.css'
})
export class AddRevokeBalanceComponent {
  formData: any = {};

  constructor(private agentBalanceService: AgentBalanceService) {}

  submitForm(form: any): void {
    if (form.valid) {
      // Call service to handle form data
      this.agentBalanceService.addAgentBalance(this.formData)
        .subscribe(response => {
          console.log('Agent balance added successfully:', response);
          // Reset form after successful submission
          form.resetForm();
        }, error => {
          console.error('Error adding agent balance:', error);
        });
    }
  }
}
