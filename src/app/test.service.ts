import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  uri = 'http://localhost:4000/juegoahorcado';
  constructor(private http: HttpClient) { }

  addUser(id,name, last_name, email,phone,address):any {
    const obj = {
      id: id,
      name:name,
      last_name: last_name,
      code_contry: phone.dialCode,
      phone: phone.number,
      address:address,
      email: email
      };

    console.log(obj);
    return this
            .http
            .post(`${this.uri}/user/add`, obj);
  }

  updateUser(id,name, last_name, email,phone,address, _id):any {

    const obj = {
      id: id,
      name:name,
      last_name: last_name,
      code_contry: phone.dialCode,
      phone: phone.number,
      address:address,
      email: email
      };
      return this
              .http
              .post(`${this.uri}/user/update/${_id}`, obj);
  }

  getUserByID(id:any) {
    return this
            .http
            .get(`${this.uri}/user/edit/${id}`);
    }

  getUser() {
    return this
           .http
           .get(`${this.uri}/user`);
  }

  deleteUser(id) {
    return this
              .http
              .get(`${this.uri}/user/delete/${id}`);
  }

}
