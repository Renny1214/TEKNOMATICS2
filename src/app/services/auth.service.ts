import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  obj = [
    {
      a: 'a',
      b: 'b',
      c: 'c',
      d: 'd',
      e: 'e',
      f: 'f',
    },
    {
      a: 'a',
      b: 'b',
      c: 'c',
      d: 'd',
      e: 'e',
      f: 'f',
    },
    {
      a: 'a',
      b: 'b',
      c: 'c',
      d: 'd',
      e: 'e',
      f: 'f',
    },
    {
      a: 'a',
      b: 'b',
      c: 'c',
      d: 'd',
      e: 'e',
      f: 'f',
    },
    {
      a: 'a',
      b: 'b',
      c: 'c',
      d: 'd',
      e: 'e',
      f: 'f',
    },
  ];

  addUser(obj: any) {
    // const api = "https://dev-api.youthresourceapp.com/addDoctorSpecialities";
    return new Promise((resolve, reject) => {
      if (obj.username == 'admin@test.com' && obj.password == 'Admin123!') {
        resolve(obj.username);
      } else {
        reject('username and password not correct');
      }
    });
  }
  checkLoggedIn() {
    return localStorage.getItem('user');
  }

  getData(){
    return this.obj;
  }
}
