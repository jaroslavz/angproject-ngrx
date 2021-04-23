export interface Employee {
    id?: number;
    employee_name?: string;
    employee_salary?: number;
    employee_age?: number;
    profile_image?: string;
}

export interface Employees {
    status?: string;
    data: Employee[];
}
