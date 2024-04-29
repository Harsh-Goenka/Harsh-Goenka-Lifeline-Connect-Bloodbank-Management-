import { Routes } from '@angular/router';
import {  HomeComponent } from './home/home.component'
import { LoginComponent } from './login/login.component';

import { SignupComponent } from './signup/signup.component';
import { DonorRegistrationComponent } from './donor-registration/donor-registration.component';
import { FindDonorsComponent } from './find-donors/find-donors.component';
export const routes: Routes = [
  {path:'', component :HomeComponent},

  {path:"login",component:LoginComponent},
  {path:"signup",component:SignupComponent},
  {path:"donor_registration",component:DonorRegistrationComponent},
  {path:"find_donors",component:FindDonorsComponent},

];
