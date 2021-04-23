import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models';
import { SelectItem } from 'primeng/api';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import {
  employeeState,
  EmployeeActions,
  EmployeeSelectors
} from '../../store';
import { AppState } from 'src/app/store/app.states';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  employees$: Observable<Employee[]>;

  constructor(public router: Router, private store$: Store<AppState>) { }

  ngOnInit() {

    this.employees$ = this.store$.select(EmployeeSelectors.selectAllEmployeeItems);

    this.employees$.subscribe(() => console.log('Employees changed'));

    this.store$.dispatch(new EmployeeActions.LoadRequestAction());

  }
}
