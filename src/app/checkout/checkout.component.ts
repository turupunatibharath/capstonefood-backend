import { Component, OnInit } from '@angular/core';
import { Checkout } from '../model/checkout';
import { CheckoutService } from '../service/checkout.service';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  checkout : Checkout=new Checkout(0,"","",0,"","");
  message:any;

  constructor(private service:CheckoutService) { }

  ngOnInit() {
  }

    public checkoutNow(){
      let response=this.service.docheckout(this.checkout);
      response.subscribe((data)=>this.message=data);
      alert("Your order is succesfully confirmed");
      console.log("your order is succesfully confirmed");
    }

}
