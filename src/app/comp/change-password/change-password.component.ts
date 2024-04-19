import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ChangePasswordService } from '../../service/change-password.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {
  passwordForm: FormGroup;
  error: string = '';
  oldPassword: string = ''; // Define oldPassword property
  newPassword: string = ''; // Define newPassword property
  confirmNewPassword: string = ''; // Define confirmNewPassword property

  constructor(
    private fb: FormBuilder,
    private changePasswordService: ChangePasswordService
  ) {
    this.passwordForm = this.fb.group({
      oldPassword: ['', Validators.required],
      newPassword: ['', Validators.required],
      confirmNewPassword: ['', Validators.required]
    }, { validator: this.matchingPasswords('newPassword', 'confirmNewPassword') });
  }

  matchingPasswords(passwordKey: string, confirmPasswordKey: string) {
    return (group: FormGroup) => {
      const passwordControl = group.controls[passwordKey];
      const confirmPasswordControl = group.controls[confirmPasswordKey];
      if (passwordControl.value !== confirmPasswordControl.value) {
        return confirmPasswordControl.setErrors({ notEquivalent: true });
      }
    };
  }

  changePassword(): void {
    if (this.passwordForm.valid) {
      const oldPassword = this.oldPassword; // Use oldPassword property
      const newPassword = this.newPassword; // Use newPassword property
      this.changePasswordService.changePassword(oldPassword, newPassword)
        .subscribe(
          response => {
            console.log('Password changed successfully:', response);
            // Reset form fields or show success message
            this.passwordForm.reset();
            this.error = '';
          },
          error => {
            console.error('Error changing password:', error);
            this.error = 'Error changing password. Please try again.';
          }
        );
    } else {
      // Form is invalid, handle accordingly
      this.error = 'Please fill out all fields correctly.';
    }
  }
}
