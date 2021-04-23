import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from 'src/app/models';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState, selectAuthState } from 'src/app/store/app.states';
import { LogIn } from 'src/app/store/actions/auth.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit, OnDestroy {

  user: User = new User();
  getState: Observable<any>;
  errorMessage: string | null;
  displayLoginInfo = false;

  constructor(
    private store: Store<AppState>, private router: Router
  ) {
    this.getState = this.store.select(selectAuthState);
  }

  ngOnInit() {
    document.body.className = 'bodybg';
    this.getState.subscribe((state) => {
      this.errorMessage = state.errorMessage;
    });
  }

  onSubmit(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    const payload = {
      email: this.user.email,
      password: this.user.password,
    };
    this.store.dispatch(new LogIn(payload));
    this.router.navigateByUrl('/');
  }

  ngOnDestroy(): void {
    document.body.className = '';
  }

  showLoginInfo() {
    this.displayLoginInfo = true;
  }

}
