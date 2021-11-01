import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styles: []
})
export class AdminDashboardComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  abaClique() {
     this.router.navigate(['/home'])
  }
}
