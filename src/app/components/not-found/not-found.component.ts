import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit, OnDestroy {

  constructor(private router: Router) { }

  ngOnInit() {
    document.body.className = 'exception-body notfound-page notfound';
  }

  ngOnDestroy(): void {
    document.body.className = '';
  }

  toHomepage() {
    this.router.navigateByUrl('/');
  }

}
