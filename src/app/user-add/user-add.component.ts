import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormGroup,FormBuilder, FormControl, Validators } from '@angular/forms';
import { SearchCountryField, TooltipLabel, CountryISO } from 'ngx-intl-tel-input';
import { TestService } from '../test.service';
@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
  staticAlertWinnClosed = true;
  staticAlertLoserClosed = true;
  SearchCountryField = SearchCountryField;
	TooltipLabel = TooltipLabel;
	CountryISO = CountryISO;
	preferredCountries: CountryISO[] = [CountryISO.Colombia, CountryISO.UnitedStates];
	phoneForm = new FormGroup({
		phone: new FormControl(undefined, [Validators.required])
	});


  angForm: FormGroup;
  constructor(private fb: FormBuilder,private router: Router,private Tserv:TestService) {
    this.createForm();
    //sessionStorage.clear();
   }

   createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required ],
      last_name: ['', Validators.required ],
      email: ['', [Validators.required, Validators.email] ],
      ID: ['', Validators.required ],
      phone_number: ['', Validators.required ],
      address: ['', Validators.required ],     
      
    });
  }
  ngOnInit() {
  }

  addUser() {
    console.log("name",this.angForm.get('name').value)
    console.log("phone_number",this.angForm.get('phone_number').value)
    console.log("last_name",this.angForm.get('last_name').value)
    console.log("email",this.angForm.get('email').value)
    console.log("address",this.angForm.get('address').value)
    console.log("ID",this.angForm.get('ID').value)

    let name = this.angForm.get('name').value;
    let id = this.angForm.get('ID').value;
    let last_name = this.angForm.get('last_name').value;
    let phone_number = this.angForm.get('phone_number').value;
    let address = this.angForm.get('address').value;
    let email = this.angForm.get('email').value;

    this.Tserv.addUser(id,name,last_name,email,phone_number,address)
      .subscribe(res => {
      console.log('Done',res)  
      if(res.status == 200){
        this.staticAlertWinnClosed = false;
      }else{
        this.staticAlertLoserClosed = false;
      }
    });
   
    

  }

}
