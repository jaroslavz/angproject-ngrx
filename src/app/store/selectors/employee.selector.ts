import {
    createFeatureSelector,
    createSelector,
    MemoizedSelector
} from '@ngrx/store';

import { Employee } from '../../models';
import { State, featureAdapter } from '../reducers/employee.reducer';

export const getError = (state: State): any => state.error;

export const getIsLoading = (state: State): boolean => state.isLoading;

export const selectEmployeeState: MemoizedSelector<
    object,
    State
> = createFeatureSelector<State>('employee');

export const selectAllEmployeeItems: (
    state: object
) => Employee[] = featureAdapter.getSelectors(selectEmployeeState).selectAll;

export const selectEmployeeById = (id: number) =>
    createSelector(this.selectAllEmployees, (allEmployees: Employee[]) => {
        if (allEmployees) {
            return allEmployees.find(p => p.id === id);
        } else {
            return null;
        }
    });

export const selectEmployeeError: MemoizedSelector<object, any> = createSelector(
    selectEmployeeState,
    getError
);

export const selectEmployeeIsLoading: MemoizedSelector<
    object,
    boolean
> = createSelector(selectEmployeeState, getIsLoading);
