import { Component, OnInit } from '@angular/core';
import  User  from '../shared/user';
import { TestService } from '../test.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-get',
  templateUrl: './user-get.component.html',
  styleUrls: ['./user-get.component.css']
})
export class UserGetComponent implements OnInit {
  Users :  User[];
  staticAlertWinnClosed = true;
  staticAlertLoserClosed = true;
  constructor(private Tserv: TestService,private router: Router,) { 
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

  DeletUser(id) {
    this.Tserv.deleteUser(id).subscribe(res => {
      console.log('Done',res)  
      var result:any = res;
      if(result.status == 200){
        this.staticAlertWinnClosed = false;
      }else{
        this.staticAlertLoserClosed = false;
      }
      location.reload();
      this.router.navigate(["ahorcado/user"])
    });
  }


}
