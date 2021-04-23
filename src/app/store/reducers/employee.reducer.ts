import { Actions, EmployeeActionTypes } from '../actions/employee.actions';

import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Employee } from '../../models';

export const featureAdapter: EntityAdapter<
    Employee
> = createEntityAdapter<Employee>({
    selectId: model => model.id,
    sortComparer: (a: Employee, b: Employee): number =>
        b.id.toString().localeCompare(a.id.toString())
});

export interface State extends EntityState<Employee> {
    isLoading?: boolean;
    error?: any;
}

export const initialState: State = featureAdapter.getInitialState(
    {
        isLoading: false,
        error: null
    }
);

export function featureReducer(state = initialState, action: Actions): State {
    switch (action.type) {
        case EmployeeActionTypes.LOAD_REQUEST: {
            return {
                ...state,
                isLoading: true,
                error: null
            };
        }
        case EmployeeActionTypes.LOAD_SUCCESS: {
            return featureAdapter.addAll(action.payload.items.data, {
                ...state,
                isLoading: false,
                error: null
            });
        }
        case EmployeeActionTypes.LOAD_FAILURE: {
            return {
                ...state,
                isLoading: false,
                error: action.payload.error
            };
        }


        // Add
        case EmployeeActionTypes.ADD_REQUEST: {
            return {
                ...state,
                error: null
            };
        }

        case EmployeeActionTypes.ADD_FAILURE: {
            return {
                ...state,
                isLoading: false,
                error: action.payload.error
            };
        }

        // Edit
        case EmployeeActionTypes.EDIT_REQUEST: {
            return {
                ...state,
                error: null
            };
        }

        case EmployeeActionTypes.EDIT_FAILURE: {
            return {
                ...state,
                isLoading: false,
                error: action.payload.error
            };
        }

        // Delete
        case EmployeeActionTypes.DELETE_REQUEST: {
            return {
                ...state,
                error: null
            };
        }
        case EmployeeActionTypes.DELETE_FAILURE: {
            return {
                ...state,
                isLoading: false,
                error: action.payload.error
            };
        }
        default: {
            return state;
        }
    }
}
