import { Crud } from '../model/crud';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { CrudService } from '../service/crud.service';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

 formValue !:FormGroup;

 crudObject : Crud = new Crud();
  cruddata : any;
  
  constructor(private service : CrudService,private formbuilder:FormBuilder) { }

  ngOnInit() {
     this.formValue = this.formbuilder.group({
       title:[''],
       price:[''],
       description:[''],
       category:['']
     })
     this. getitem()
  }

  postitem(){
    this.crudObject.title=this.formValue.value.title;
    this.crudObject.price=this.formValue.value.price;
    this.crudObject.description=this.formValue.value.description;
    this.crudObject.category=this.formValue.value.category;

    this.service.additem(this.crudObject)
    .subscribe(res=>{
      console.log(res)
      alert("item added succesfully")
      this.formValue.reset();
      this. getitem()

    },
    err=>{
      alert("something went wrong");
    })
  }


  getitem(){
    this.service.getitem()
    .subscribe(res=>{
      this.cruddata=res;
    })
  }

  deleteitem(row : any){
    this.service.delete(row.id)
    .subscribe(res=>{
      console.log("item deleted")
      alert("item deleted")
    })
  }
  onedit(row:any){
    this.crudObject.id = row.id;
    this.formValue.controls['title'].setValue(row.title);
    this.formValue.controls['price'].setValue(row.price);
    this.formValue.controls['description'].setValue(row.description);
    this.formValue.controls['category'].setValue(row.category);
  }

  updateitem(){
    this.crudObject.title=this.formValue.value.title;
    this.crudObject.price=this.formValue.value.price;
    this.crudObject.description=this.formValue.value.description;
    this.crudObject.category=this.formValue.value.category;
    this.service.update(this.crudObject,this.crudObject.id)
    .subscribe(res=>{
      alert("item updated succesfully");
      this.formValue.reset();
      this.getitem();
    })
  }
}




