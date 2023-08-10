import { Component, Input, OnInit } from '@angular/core';
import { employeesDetails } from '../services/EmployeesList.service';
import { Employees } from '../Models/AddedEmployeeDetails.modal';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css'],
  providers: []
})
export class EmployeesListComponent implements OnInit{
  constructor(private empList:employeesDetails)  {}
  
  empsList:Employees[] = [];

  ngOnInit() {
    console.log(this.empList.getEmployees()) 
  }

}
