import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/Services/contact.service';

@Component({
  selector: 'app-admin-customer',
  templateUrl: './admin-customer.component.html',
  styleUrls: ['./admin-customer.component.css']
})
export class AdminCustomerComponent implements OnInit{
  public getdata:any;
 
   constructor(private httpser :ContactService ){}
   ngOnInit(): void {
     this.httpser.getCustomer().subscribe((data: any)=>{
       console.log(data)
    this.getdata=data
     })
   }
 
 }
