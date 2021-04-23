import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Observable, of as observableOf } from 'rxjs';
import * as featureActions from '../actions/employee.actions';
import { EmployeeService } from '../../services/employee.service';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class EmployeeEffects {
    constructor(private employeeService: EmployeeService, private actions$: Actions,
        private router: Router) { }

    // Load
    @Effect()
    loadRequestEffect$: Observable<any> = this.actions$.pipe(
        ofType<featureActions.LoadRequestAction>(featureActions.EmployeeActionTypes.LOAD_REQUEST),
        switchMap(() =>
            this.employeeService
                .getAllEmployees()
                .pipe(
                    map(
                        items =>
                            new featureActions.LoadSuccessAction({
                                items
                            })
                    ),
                    catchError(error =>
                        observableOf(new featureActions.LoadFailureAction({ error }))
                    )
                )
        )
    );

    @Effect() addRequestEffect$: Observable<any> = this.actions$.pipe(
        ofType<featureActions.AddRequestAction>(featureActions.EmployeeActionTypes.ADD_REQUEST),
        switchMap(action => this.employeeService.createEmployee(action.payload.item)
            .pipe(
                map(() => new featureActions.LoadRequestAction())
            )
        )
    );

    // Edit
    @Effect() editRequestEffect$: Observable<any> = this.actions$.pipe(
        ofType<featureActions.EditRequestAction>(featureActions.EmployeeActionTypes.EDIT_REQUEST),
        switchMap(action => this.employeeService.updateEmployee(action.payload.item.id, action.payload.item).pipe(
            map(res => new featureActions.LoadRequestAction())
        ),
        )
    );

    // Delete
    @Effect() deleteRequestEffect$: Observable<any> = this.actions$.pipe(
        ofType<featureActions.DeleteRequestAction>(featureActions.EmployeeActionTypes.DELETE_REQUEST),
        switchMap(action => this.employeeService.deleteEmployee(action.payload.item).pipe(
            map(res => new featureActions.LoadRequestAction())
        ),
        )
    );

}
