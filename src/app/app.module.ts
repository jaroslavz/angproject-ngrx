import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './core/auth/auth.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/app.states';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './store/effects/auth.effects';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeComponent } from './containers/employee/employee.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './components/login/login.component';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { MessageModule } from 'primeng/message';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { PaginatorModule } from 'primeng/paginator';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ToolbarModule } from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';
import { EmployeeService } from './services/employee.service';
import { ConfirmDialogModule, DialogModule, MultiSelectModule, MessagesModule } from 'primeng/primeng';
import { ConfirmationService } from 'primeng/api';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { EmployeeEffects } from './store/effects/employee.effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeListComponent,
    NotFoundComponent,
    LoginComponent,
    AddEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([AuthEffects, EmployeeEffects]),
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AuthModule,
    StoreDevtoolsModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25 //  Retains last 25 states
    }),
    BrowserAnimationsModule,
    CardModule,
    MessageModule,
    MessagesModule,
    OverlayPanelModule,
    PaginatorModule,
    TableModule,
    ToastModule,
    ToggleButtonModule,
    ToolbarModule,
    TooltipModule,
    CardModule,
    ButtonModule,
    ToolbarModule,
    DropdownModule,
    CheckboxModule,
    CalendarModule,
    PanelModule,
    ConfirmDialogModule,
    DialogModule,
    MultiSelectModule
  ],
  providers: [EmployeeService,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
