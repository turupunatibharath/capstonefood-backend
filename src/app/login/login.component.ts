import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms'
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

public loginForm !:FormGroup

  constructor(private formBuilder : FormBuilder,private http:HttpClient,private route : Router) { }

  ngOnInit() {
      this.loginForm = this.formBuilder.group({
        emailId:['',Validators.required],
        password:['',Validators.required]
      })
  }

  login(){
    this.http.get<any>("http://localhost:8080/getusers").subscribe(res=>{
      const user=res.find((a:any)=>{
        return a.emailId === this.loginForm.value.emailid && a.password === this.loginForm.value.password 
      });
      if(user){
        alert("login succesfull !!");
        this.loginForm.reset();
        this.route.navigate(['product'])
      }
      else{
        alert("user not found !");
      }
    })
  }
}

