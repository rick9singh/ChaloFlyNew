import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
 

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  formData: any = {
    name: '',
    email: '',
    state: '',
    pincode: '',
    country: '',
    city:'',
    address:'',
    role: '', // Initialize role as empty string
    phoneNumber: '',
    password: '',
    distributor:'',
    bus: false,
    flight: false
  };

  showTransportOptions: boolean = false;

  dropdownSettings: any;



  distributors: any[] = []; // Array to store distributors

  ngOnInit() {
    // Fetch distributors from JSON Server when the component initializes
    this.fetchDistributors();
  }

  fetchDistributors() {
    this.http.get<any[]>('http://localhost:3000/distributors')
      .subscribe(distributors => {
        this.distributors = distributors;
      }, error => {
        console.error('Failed to fetch distributors:', error);
      });
  }

  onRoleChange() {
    if (this.formData.role !== 'agent') {
      // Clear distributor selection if the role is not agent
      this.formData.distributor = '';
    }
  }




  indiaStates: string[] = [];

  constructor(private http: HttpClient) {}

  onCountryChange() {
    if (this.formData.country === 'India') {
      this.fetchIndiaStates(); // Fetch states if country is India
    } else {
      this.formData.state = ''; // Reset state if country is not India
    }
  }

  toggleTransportOptions() {
    this.showTransportOptions = !this.showTransportOptions;
  }


  fetchIndiaStates() {
    this.http.get<string[]>('http://localhost:3000/indiaStates')
      .subscribe(states => {
        this.indiaStates = states;
      }, error => {
        console.error('Failed to fetch India states:', error);
      });
  }


  register(data:any) {
    let endpoint: string;
    
    // Determine the endpoint based on the selected role
    switch (this.formData.role) {
      case 'admin':
        endpoint = 'admins';
        break;
      case 'user':
        endpoint = 'users';
        break;
      case 'agent':
        endpoint = 'agents';
        break;
      case 'distributor':
        endpoint = 'distributors';
        break;
      case 'tech-team':
        endpoint = 'tech-team'; // Ensure endpoint matches JSON Server db.json section name
        break;
      case 'accounts':
        endpoint = 'accounts';
        break;
      case 'marketing-team':
        endpoint = 'marketing-team'; // Ensure endpoint matches JSON Server db.json section name
        break;
      default:
        console.error('Invalid role:', this.formData.role);
        return; // Exit the method if the role is invalid
    }
  
    // Make the HTTP POST request to the correct endpoint
    this.http.post(`http://localhost:3000/${endpoint}`, this.formData)
      .subscribe(() => {
        console.log('Registered successfully!');
        this.formData = { // Reset form data after successful registration
          name: '',
          email: '',
          state: '',
          pincode: '',
          country: '',
          role: '',
          phoneNumber: '',
          password: ''
        };
      }, error => {
        console.error('Registration failed:', error);
      });
  }
}  
