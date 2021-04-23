import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Employee } from '../../models';
import { EmployeeActionTypes } from '../../store/actions/employee.actions';
import { Message } from 'primeng/api';
import { AppState } from 'src/app/store/app.states';
import { LogOut } from '../../store/actions/auth.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  @Input() employees: Employee[];
  @Input() loading: boolean;
  @Input() error: any;

  cols: any[];

  // Delete dialog
  display = false;
  id: number;
  msgs: Message[] = [];

  // Edit employee form
  displayEditForm = false;
  editEmployeeForm: FormGroup;

  employeeObject = {
    employee_name: '',
    employee_salary: '',
    employee_age: ''
  };

  constructor(private store$: Store<AppState>, private formBuilder: FormBuilder, private router: Router) {

    this.cols = [
      { field: 'id', header: 'ID', width: '10%' },
      { field: 'employee_name', header: 'Name', width: '20%' },
      { field: 'employee_salary', header: 'Salary', width: '20%' },
      { field: 'employee_age', header: 'Age', width: '20%' }
    ];

    this.editEmployeeForm = this.formBuilder.group({
      'employee_name': [this.employeeObject.employee_name],
      'employee_salary': [this.employeeObject.employee_salary],
      'employee_age': [this.employeeObject.employee_age]
    });

  }

  ngOnInit() {
  }

  deleteEmployee(id: number) {
    id = this.id;
    this.store$.dispatch({
      type: EmployeeActionTypes.DELETE_REQUEST,
      payload: { item: id }
    });
    this.display = false;
    this.msgs = [{ severity: 'info', summary: 'Information', detail: 'Employee with id ' + this.id + ' was successfully deleted.' }];
  }

  showDeleteDialog(id: number) {
    this.id = id;
    this.display = true;
  }

  logOut(): void {
    this.store$.dispatch(new LogOut);
  }

  showEditEmployeeForm(id: number, name: string, salary: number, age: number) {
    this.id = id;
    this.editEmployeeForm.controls['employee_name'].setValue(name);
    this.editEmployeeForm.controls['employee_salary'].setValue(salary);
    this.editEmployeeForm.controls['employee_age'].setValue(age);
    this.displayEditForm = true;
  }

  editEmployee(id: number) {
    id = this.id;
    const employee = {
      id: id,
      name: this.editEmployeeForm.get('employee_name').value,
      salary: this.editEmployeeForm.get('employee_salary').value,
      age: this.editEmployeeForm.get('employee_age').value
    };
    this.store$.dispatch({
      type: EmployeeActionTypes.EDIT_REQUEST,
      payload: { item: employee }
    });
    this.displayEditForm = false;
  }

  addEmployee() {
    this.router.navigateByUrl('add');
  }

}
