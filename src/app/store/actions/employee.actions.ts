import { Action } from '@ngrx/store';
import { Employee, Employees } from '../../models';
import { State } from '../reducers/employee.reducer';

export enum EmployeeActionTypes {
    LOAD_REQUEST = '[Employee] Load Request',
    LOAD_FAILURE = '[Employee] Load Failure',
    LOAD_SUCCESS = '[Employee] Load Success',
    ADD_REQUEST = '[Employee] Add Request',
    ADD_FAILURE = '[Employee] Add Failure',
    ADD_SUCCESS = '[Employee] Add Success',
    EDIT_REQUEST = '[Employee] Edit Request',
    EDIT_FAILURE = '[Employee] Edit Failure',
    EDIT_SUCCESS = '[Employee] Edit Success',
    DELETE_REQUEST = '[Employee] Delete Request',
    DELETE_FAILURE = '[Employee] Delete Failure',
    DELETE_SUCCESS = '[Employee] Delete Success',
}

// GET Employees
export class LoadRequestAction implements Action {
    readonly type = EmployeeActionTypes.LOAD_REQUEST;
}

export class LoadFailureAction implements Action {
    readonly type = EmployeeActionTypes.LOAD_FAILURE;
    constructor(public payload: { error: string }) { }
}

export class LoadSuccessAction implements Action {
    readonly type = EmployeeActionTypes.LOAD_SUCCESS;
    // constructor(public payload: { items: Employee[] }) { }
    constructor(public payload: { items: Employees }) { }
}


// Add
export class AddRequestAction implements Action {
    readonly type = EmployeeActionTypes.ADD_REQUEST;
    constructor(public payload: { item: Employee }) { }
}

export class AddFailureAction implements Action {
    readonly type = EmployeeActionTypes.ADD_FAILURE;
    constructor(public payload: { error: string }) { }
}

export class AddSuccessAction implements Action {
    readonly type = EmployeeActionTypes.ADD_SUCCESS;
    constructor(public payload: { item: Employee }) { }
}

// Edit
export class EditRequestAction implements Action {
    readonly type = EmployeeActionTypes.EDIT_REQUEST;
    constructor(public payload: { item: Employee }) { }
}

export class EditFailureAction implements Action {
    readonly type = EmployeeActionTypes.EDIT_FAILURE;
    constructor(public payload: { error: string }) { }
}

export class EditSuccessAction implements Action {
    readonly type = EmployeeActionTypes.EDIT_SUCCESS;
    constructor(public payload: { item: Employee }) { }
}

// Delete
export class DeleteRequestAction implements Action {
    readonly type = EmployeeActionTypes.DELETE_REQUEST;
    constructor(public payload: { item: number }) { }
}

export class DeleteFailureAction implements Action {
    readonly type = EmployeeActionTypes.DELETE_FAILURE;
    constructor(public payload: { error: string }) { }
}

export class DeleteSuccessAction implements Action {
    readonly type = EmployeeActionTypes.DELETE_SUCCESS;
    constructor(public payload: { item: number }) { }
}
export type Actions = LoadRequestAction | LoadFailureAction | LoadSuccessAction | AddRequestAction | AddFailureAction | AddSuccessAction
| EditRequestAction | EditFailureAction | EditSuccessAction | DeleteRequestAction | DeleteFailureAction | DeleteSuccessAction;
