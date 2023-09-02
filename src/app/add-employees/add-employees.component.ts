import {  AfterViewInit, OnInit, ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { Employees } from '../Models/AddedEmployeeDetails.modal';
import { employeesDetails } from '../services/EmployeesList.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-employees',
  templateUrl: './add-employees.component.html',
  styleUrls: ['./add-employees.component.css']
})
export class AddEmployeesComponent implements OnInit,AfterViewInit{
  @ViewChild('EmpForm') empFor:NgForm;
  empList:Employees[];
  gender:any =["Male","Female"]
  defaultGender:any=this.gender[0]
  switchToTemplateDriven:boolean = false;
  employeeDetails:FormGroup;

  constructor(private emps:employeesDetails)  {}

 

  ngOnInit() {
    if(!this.switchToTemplateDriven) {
      this.employeeDetails = new FormGroup({
        "Name" : new FormControl(null,Validators.required),
        "Id" : new FormControl(null,[Validators.required]),
        "Email" : new FormControl(null,[Validators.required,Validators.email]),
        "DOB" : new FormControl(null,Validators.required),
        "Gender" : new FormControl('Male')
      })
      
    }
    this.empList= this.emps.getEmployees()
  }

  ngAfterViewInit() {
    if(!this.switchToTemplateDriven) {
          console.log(this.employeeDetails,"Reactive Form Connected")
    }
    else {
    console.log(this.empFor, "Template Driven Form Connected")
    }
    
  }

  switchToTemplate() {
   this.switchToTemplateDriven = !this.switchToTemplateDriven;
   
  } 


  formReset() {
    if(!this.switchToTemplateDriven) {
      this.employeeDetails.reset()
    }
    else{
      this.empFor.reset() 
    }
  }

  ShowEmpDetails() {
    
    if(!this.switchToTemplateDriven) {
      console.log(this.employeeDetails.value, "addingEmployees through Reactive form");
      this.emps.onAddEmp(this.employeeDetails.value);
      this.employeeDetails.reset();
    }
    else {
      let data = {Name: this.empFor.value.Name, Id: this.empFor.value.Id, Email: this.empFor.value.Email, DOB: this.empFor.value.DOB, Gender: this.empFor.value.Gender};
      console.log(data,"addingEmployees through template driven");
      this.emps.onAddEmp(data);
      this.empFor.reset()
    }
    this.empList= this.emps.getEmployees();

    
  }

  
 
}
