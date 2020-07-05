import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { BookticketComponent } from './bookticket/bookticket.component';
import { BusOperatorComponent } from './bus-operator/bus-operator.component';
import { EditbusComponent } from './editbus/editbus.component';
import { ListbusesComponent } from './listbuses/listbuses.component';
import { ViewticketComponent } from './viewticket/viewticket.component';
import { PrintticketComponent } from './printticket/printticket.component';
import { EdituserComponent } from './edituser/edituser.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [

  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },

  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'home/bookticket',
    component: BookticketComponent
  },
  {
    path: 'addbus',
    component: BusOperatorComponent
  },
  {
    path:"editbus",
    component:EditbusComponent
  },
  {
    path:"listbus",
    component:ListbusesComponent
  },
  {
    path:"viewticket",
    component:ViewticketComponent
  },
  {
    path:"printticket",
    component:PrintticketComponent
  },
  {
    path:'edituser',
    component:EdituserComponent
  },
  {
    path:'admin',
    component:AdminComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
