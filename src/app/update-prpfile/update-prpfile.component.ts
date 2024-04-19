import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-prpfile',
  templateUrl: './update-prpfile.component.html',
  styleUrl: './update-prpfile.component.css'
})
export class UpdatePrpfileComponent {

  formData: any = {};

  constructor() { }

  submitForm() {
    console.log('Form submitted:', this.formData);
    // Reset form data
    this.formData = {};
  }
}