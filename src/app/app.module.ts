import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { MatTableModule } from '@angular/material/table';
import { CategoryService } from './services/category.service';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './comp/navbar/navbar.component';
import { CategoriesComponent } from './categories/categories.component';
import { OperatorsComponent } from './comp/operators/operators.component';
import { CategoryDialogComponent } from './category-dialog/category-dialog.component';
import { OperatorDialogComponent } from './operator-dialog/operator-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { LoginPageComponent } from './comp/login-page/login-page.component';
import { AboutUsComponent } from './footer/about-us/about-us.component';
import { TCComponent } from './footer/t-c/t-c.component';
import { PrivacyPolicyComponent } from './footer/privacy-policy/privacy-policy.component';
import { ContactUsComponent } from './footer/contact-us/contact-us.component';
import { BusCommissionComponent } from './bus-commission/bus-commission.component';
import { BusCommisionDialogueComponent } from './dialogue/bus-commision-dialogue/bus-commision-dialogue.component';
import { UserBankDetailsComponent } from './user-bank-details/user-bank-details.component';
import { UserBankDetailsDilogueComponent } from './dialogue/user-bank-details-dilogue/user-bank-details-dilogue.component';
import { AddRevokeBalanceComponent } from './add-revoke-balance/add-revoke-balance.component';
import { ChangePasswordComponent } from './comp/change-password/change-password.component';
import { BusTicketDetailsComponent } from './bus-ticket-details/bus-ticket-details.component';
import { BusBetweenCitiesComponentComponent } from './comp/bus-between-cities.component/bus-between-cities.component.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { UpdatePrpfileComponent } from './update-prpfile/update-prpfile.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    NavbarComponent,
    CategoriesComponent,
    OperatorsComponent,
    CategoryDialogComponent,
    OperatorDialogComponent,
    LoginPageComponent,
    AboutUsComponent,
    TCComponent,
    PrivacyPolicyComponent,
    ContactUsComponent,
    BusCommissionComponent,
    BusCommisionDialogueComponent,
    UserBankDetailsComponent,
    UserBankDetailsDilogueComponent,
    AddRevokeBalanceComponent,
    ChangePasswordComponent,
    BusTicketDetailsComponent,
    BusBetweenCitiesComponentComponent,
    NavBarComponent,
    UpdatePrpfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    HttpClientModule,
    MatTableModule,
    NgMultiSelectDropDownModule.forRoot(),
    MatDialogModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration(),CategoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
