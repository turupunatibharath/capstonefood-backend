
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public signupForm ! :FormGroup;

  constructor(private formBuilder: FormBuilder,private http:HttpClient,private router:Router) { 

  }

  ngOnInit() :void{
   
    this.signupForm = this.formBuilder.group({
      emailId:['',Validators.required],
      userName:['',Validators.required],
      password:['',Validators.required],
    })
  }

  signUp(){
    this.http.post<any>("http://localhost:8080/common/adduser",this.signupForm.value)
    .subscribe(res=>{
      console.log("signup succesfull");
      this.signupForm.reset();
      alert("Signup succesfull !");
      this.router.navigate(['login']);
    }
    )
  }
}

