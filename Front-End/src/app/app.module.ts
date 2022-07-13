import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { MenuComponent } from './menu/menu.component'

//External modules
import { NotifierModule } from 'angular-notifier';
import { SimulationComponent } from './simulation/simulation.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { TokenInterceptor } from './interceptor/token.interceptor';
import { PayDuesComponent } from './pay-dues/pay-dues.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { RegisterClientComponent } from './register-client/register-client.component';
import { SimulationsComponent } from './simulations/simulations.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    LoginComponent,
    RegisterComponent,
    MenuComponent,
    SimulationComponent,
    ConfigurationComponent,
    PayDuesComponent,
    ManageUsersComponent,
    RegisterClientComponent,
    SimulationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NotifierModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
