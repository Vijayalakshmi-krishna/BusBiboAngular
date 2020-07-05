import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component'
import { HttpClientModule } from '@angular/common/http';
import { BusOperatorComponent } from './bus-operator/bus-operator.component';
import { BookticketComponent } from './bookticket/bookticket.component';
import { ViewticketComponent } from './viewticket/viewticket.component';
import { EditbusComponent } from './editbus/editbus.component';
import { ListbusesComponent } from './listbuses/listbuses.component';
import { PrintticketComponent } from './printticket/printticket.component';
import { EdituserComponent } from './edituser/edituser.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    RegisterComponent,
    HomeComponent,
    BusOperatorComponent,
    BookticketComponent,
    ViewticketComponent,
    EditbusComponent,
    ListbusesComponent,
    PrintticketComponent,
    EdituserComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
