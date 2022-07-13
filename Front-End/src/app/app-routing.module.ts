import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SimulationComponent } from './simulation/simulation.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { PayDuesComponent } from './pay-dues/pay-dues.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { RegisterClientComponent } from './register-client/register-client.component';
import { SimulationsComponent } from './simulations/simulations.component';

const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'simulation', component: SimulationComponent},
  {path: 'pay-dues', component: PayDuesComponent},
  {path: 'configuration', component: ConfigurationComponent},
  {path: 'manage-users', component: ManageUsersComponent},
  {path: 'register-client', component: RegisterClientComponent},
  {path: 'simulations', component: SimulationsComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
