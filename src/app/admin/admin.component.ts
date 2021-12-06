import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public adminForm ! : FormGroup
  constructor(private formBuilder : FormBuilder,private http : HttpClient,private route : Router) { }

  ngOnInit() {
    this.adminForm = this.formBuilder.group({
      emailId:['',Validators.required],
      password:['',Validators.required]
    })
  }
  admin(){
    this.http.get<any>("http:localhost:8080/addadmin").subscribe(res=>{
      const admin = res.find((a:any)=>{
        return a.emailId === this.adminForm.value.emailid && a.password === this.adminForm.value.password 
      });
    if(admin){
      alert("admin added succesfully !!");
      this.route.navigate(['/admin-dashboard']);
    }
    else{
      alert("admin not found !");
    }
    })
  }

}
