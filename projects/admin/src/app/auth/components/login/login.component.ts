import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  loginform!:FormGroup

  ngOnInit(): void {
    this.createform();
  }

  createform(){
    this.loginform = this.fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(5),Validators.maxLength(15)]]
    })
  }

  login(){
    console.log(this.loginform.value);
  }

}
