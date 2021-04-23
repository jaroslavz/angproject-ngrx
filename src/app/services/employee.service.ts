import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee, Employees } from '../models';
import { HttpClient } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
})
export class EmployeeService {
    private API_BASE_URL = 'http://dummy.restapiexample.com/api/v1';
    constructor(private httpClient: HttpClient) {
    }

    // Get all employee data
    public getAllEmployees(): Observable<Employees> {
        return this.httpClient.get<Employees>(`${this.API_BASE_URL}/employees`);
    }

    // Get a single employee data
    public getSingleEmployee(id: number): Observable<Employee[]> {
        return this.httpClient.get<Employee[]>(`${this.API_BASE_URL}/employee/${id}`);
    }

    // Create new record in database
    public createEmployee(employee: Employee): Observable<Employee> {
        return this.httpClient.post<Employee>(`${this.API_BASE_URL}/create`, employee);
    }

    // 	Update an employee record
    public updateEmployee(id: number, employee: Employee): Observable<Employee> {
        return this.httpClient.put<Employee>(`${this.API_BASE_URL}/update/${id}`, employee);
    }

    // Delete an employee record
    public deleteEmployee(id: number): Observable<Employee> {
        return this.httpClient.delete<Employee>(`${this.API_BASE_URL}/delete/${id}`);
    }
}
