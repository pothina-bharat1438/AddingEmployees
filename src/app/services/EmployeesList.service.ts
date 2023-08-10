
import { EventEmitter, Output } from '@angular/core';
import {Employees} from  '../Models/AddedEmployeeDetails.modal';

export class employeesDetails {
   private EmployeeDetails:Employees[] = [new Employees('Emp1',1,'one@gmail.com',new Date('01-01-2001'),'Male')]
   
    getEmployees() {
      return  this.EmployeeDetails.slice()
    }

    onAddEmp(emp:Employees) {
        this.EmployeeDetails.push(emp);
        this.getEmployees()
    }
}