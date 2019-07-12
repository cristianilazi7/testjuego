import { Component, OnInit } from '@angular/core';
import  User  from '../shared/user';
import { TestService } from '../test.service';

@Component({
  selector: 'app-user-get',
  templateUrl: './user-get.component.html',
  styleUrls: ['./user-get.component.css']
})
export class UserGetComponent implements OnInit {
  Users :  User[];

  constructor(private Tserv: TestService) { 
    this.getUsers();
  }

  ngOnInit() {
    this.getUsers();
    console.log("entro a pagina")
  }

  getUsers(){
    this.Tserv
    .getUser()
    .subscribe((data: User[]) => {
      this.Users = data;
  });
  }

}
