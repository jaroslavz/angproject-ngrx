import { createFeatureSelector } from '@ngrx/store';

import * as auth from './reducers/auth.reducers';
import * as employee from './reducers/employee.reducer';

export interface AppState {
  authState: auth.State;
  employeeState: employee.State;
}

export const reducers = {
  auth: auth.reducer,
  employee: employee.featureReducer
};

export const selectAuthState = createFeatureSelector<AppState>('auth');
export const selectEmployeeState = createFeatureSelector<AppState>('employee');
