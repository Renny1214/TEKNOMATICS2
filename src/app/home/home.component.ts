import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(public authService: AuthService, public router: Router) {}


  item:any=[]
  ngOnInit(): void {
    this.getData()
    if (this.authService.checkLoggedIn()) {
      this.router.navigate(['/home']);
    }
    if (!this.authService.checkLoggedIn()) {
      this.router.navigate(['']);
    }
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['']);
  }

  getData() {
    this.item  = this.authService.getData();
    console.log(this.item);
    
  }
}
