import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { AuthGuardService } from './core/auth';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';

const routes: Routes = [

  { path: 'login', component: LoginComponent },

  { path: '', component: EmployeeListComponent, canActivate: [AuthGuardService] },
  { path: 'add', component: AddEmployeeComponent, canActivate: [AuthGuardService] },

  { path: '**', component: NotFoundComponent }];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' });

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }