import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { CategoriesComponent } from './categories/categories.component';
import { OperatorsComponent } from './comp/operators/operators.component';
import { LoginPageComponent } from './comp/login-page/login-page.component';
import { PrivacyPolicyComponent } from './footer/privacy-policy/privacy-policy.component';
import { TCComponent } from './footer/t-c/t-c.component';
import { AboutUsComponent } from './footer/about-us/about-us.component';
import { BusCommissionComponent } from './bus-commission/bus-commission.component';
import path from 'path';
import { UserBankDetailsComponent } from './user-bank-details/user-bank-details.component';
import { AddRevokeBalanceComponent } from './add-revoke-balance/add-revoke-balance.component';
import { ChangePasswordComponent } from './comp/change-password/change-password.component';
import { BusTicketDetailsComponent } from './bus-ticket-details/bus-ticket-details.component';
import { BusBetweenCitiesComponentComponent } from './comp/bus-between-cities.component/bus-between-cities.component.component';
import { UpdatePrpfileComponent } from './update-prpfile/update-prpfile.component';

const routes: Routes = [ { path: '', redirectTo: '/register', pathMatch: 'full' }, // Redirect to /register by default
{ path: 'register', component: RegistrationComponent },
{path:'categories', component:CategoriesComponent},
{path:'operators', component: OperatorsComponent},
{path: 'login', component: LoginPageComponent},
{path:'privacy-policy', component: PrivacyPolicyComponent},
{path:'terms-condition', component: TCComponent},
{path:'about-us', component: AboutUsComponent},
{path: 'bus-commision', component : BusCommissionComponent},
{path: 'bank-details', component: UserBankDetailsComponent},
{path:'agent-balance', component: AddRevokeBalanceComponent},
{path: 'change-password', component: ChangePasswordComponent},
{path:'bus-ticket-details', component: BusTicketDetailsComponent},
{path:'bus-between', component: BusBetweenCitiesComponentComponent},
{path: 'profile-update', component: UpdatePrpfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
