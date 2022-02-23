import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators,
  FormArray,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    public FormBuilder: FormBuilder,
    public authService: AuthService,
    public router: Router
  ) {}

  form: any = FormGroup;

  ngOnInit(): void {
    if (this.authService.checkLoggedIn()) {
      this.router.navigate(['/home']);
    }
    if (!this.authService.checkLoggedIn()) {
      this.router.navigate(['']);
    }
    this.createForm();
  }

  createForm() {
    this.form = this.FormBuilder.group({
      name: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$'),
        ]),
      ],
      password: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(20),
          Validators.pattern(
            '((?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[~!@#$%^&*()]).{8,20})'
          ),
        ]),
      ],
    });
  }

  addData() {
    console.log(this.form);

    this.authService
      .addUser({
        username: this.form.value.name,
        password: this.form.value.password,
      })
      .then((data: any) => {
        if (data) {
          localStorage.setItem('user', data);
          this.router.navigate(['/home']);
        } else {
        }
      })
      .catch((err) => {
        alert(err);
      });
  }
}
