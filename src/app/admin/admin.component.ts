import { Component, OnInit } from '@angular/core';

import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

 
  angForm: FormGroup;
  constructor(private fb: FormBuilder,private router: Router) { 
    this.createForm();
    sessionStorage.clear();
  }

  
  createForm() {
    this.angForm = this.fb.group({
      secret_word: ['', Validators.required ],
      
    });
  }

  ngOnInit() {
  }
  
  addWord(secret_word:any) {
    console.log("",secret_word)    
    sessionStorage.setItem('ahorcado', JSON.stringify({ id: 'token', secret_word: secret_word }));
    this.router.navigate(['ahorcado']);
  }
}
