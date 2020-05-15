import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss']
})
export class AdminHeaderComponent implements OnInit {

  isLoggedIn: Boolean = false;

  constructor(private router: Router) { 
    router.events.subscribe((val) => {
      this.isLoggedIn = localStorage.getItem('adminToken') ? true : false;
    });
   }

  ngOnInit(): void {
  }

  logout() {
    localStorage.removeItem('adminToken');
    this.router.navigateByUrl('/admin/login');
  }

}
