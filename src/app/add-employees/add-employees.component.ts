import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { Employees } from '../Models/AddedEmployeeDetails.modal';
import { employeesDetails } from '../services/EmployeesList.service';

@Component({
  selector: 'app-add-employees',
  templateUrl: './add-employees.component.html',
  styleUrls: ['./add-employees.component.css']
})
export class AddEmployeesComponent implements OnInit{
  empList:Employees[];
  gender:any =["Male","Female"]

  constructor(private emps:employeesDetails)  {}

  employeeDetails:FormGroup;
  ngOnInit() {
    this.employeeDetails = new FormGroup({
      "Name" : new FormControl(null,Validators.required),
      "Id" : new FormControl(null,[Validators.required]),
      "Email" : new FormControl(null,[Validators.required,Validators.email]),
      "DOB" : new FormControl(null,Validators.required),
      "Gender" : new FormControl('Male')
    })

    this.empList= this.emps.getEmployees()
  }

  formReset() {
    this.employeeDetails.reset()
  }

  ShowEmpDetails() {
    console.log(this.employeeDetails);
    this.emps.onAddEmp(this.employeeDetails.value);
    this.empList= this.emps.getEmployees();
    console.log(this.emps.getEmployees(),"newlyadded");
    this.employeeDetails.reset();
  }

  
 
}
