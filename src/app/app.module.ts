import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddEmployeesComponent } from './add-employees/add-employees.component';

import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { employeesDetails } from './services/EmployeesList.service';
import { FormsModule } from '@angular/forms';

const Routers:Routes =[
  {path:"", redirectTo:"/Employees", pathMatch:'full'},
  {path:"Employees",component:AddEmployeesComponent,},
  {path:"EmployeesList",component:EmployeesListComponent}]

@NgModule({
  declarations: [
    AppComponent,
    AddEmployeesComponent,
    EmployeesListComponent
  ],
  imports: [RouterModule.forRoot(Routers),
    BrowserModule,ReactiveFormsModule,FormsModule
  ],
  providers: [employeesDetails],
  bootstrap: [AppComponent]
})
export class AppModule { }
