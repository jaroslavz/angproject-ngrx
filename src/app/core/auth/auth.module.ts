import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { AuthGuardService } from './auth-guard.service';
import { AuthService } from './auth.service';
import { AuthTokenInterceptor } from './auth-token.interceptor';

export * from './auth.service';
export * from './auth-guard.service';
export * from './auth-token.interceptor';

/**
*  Authentication module based on keycloak-js adapter which is part of
*  Keycloak Open Source Identity and Access Management
*  to include to application just include AuthModule to app.module.ts
*  and initializer to provider sections
*  Example:
*
*  imports: [
*    AuthModule,
*  ],
*  providers: [
*    { provide: APP_INITIALIZER, useFactory: initializer, multi: true, deps: [AuthService] }
*  ],
*
*/

@NgModule({
  providers: [
    AuthService,
    AuthGuardService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthTokenInterceptor, multi: true },
  ]
})
export class AuthModule {
}
