import { Component, OnInit } from '@angular/core';
import { employeeState } from 'src/app/store';
import { Store } from '@ngrx/store';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeActionTypes } from 'src/app/store/actions/employee.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {

  addEmployeeForm: FormGroup;

  employeeObject = {
    employee_name: '',
    employee_salary: '',
    employee_age: ''
  };

  constructor(private store$: Store<employeeState.AppState>, private formBuilder: FormBuilder, private router: Router) {

    this.addEmployeeForm = this.formBuilder.group({
      'employee_name': [this.employeeObject.employee_name],
      'employee_salary': [this.employeeObject.employee_salary],
      'employee_age': [this.employeeObject.employee_age]
    });
  }

  ngOnInit() {
  }

  addEmployee() {
    const employee = {
      name: this.addEmployeeForm.get('employee_name').value,
      salary: this.addEmployeeForm.get('employee_salary').value,
      age: this.addEmployeeForm.get('employee_age').value

    };
    this.store$.dispatch({
      type: EmployeeActionTypes.ADD_REQUEST,
      payload: { item: employee }
    });
    this.router.navigateByUrl('/');
  }

}
