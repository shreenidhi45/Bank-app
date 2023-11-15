import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Users } from 'src/app/Models/users';
import { ContactService } from 'src/app/Services/contact.service';
export interface CustomerBtId {
  customerId: number;
  firstName: string;
  lastName: string;
  email: string;
  balance: number;
  
}
@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {
  public id: string | undefined;
  public ContactId: number | null = null;
  public customerdata: CustomerBtId = {} as CustomerBtId;

  constructor(private activatedRoute: ActivatedRoute, private httpser: ContactService) {
    console.log(this.ContactId);
  }
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param) => {
         const id = param.get('contactId');
         this.ContactId=Number(id)
    })
         if(this.ContactId)
    this.httpser.getCustomersById(this.ContactId).subscribe((data)=>{
      console.log(data)
      this.customerdata=data;
    })
    
  }

 // ngOnInit(): void {

    // this.activatedRoute.paramMap.subscribe((param) => {
    //   const id = param.get('contactId');
      
    //   if (id !== null && id !== undefined) {
    //     this.id = id;
    //     this.ContactId = Number(id);

    //     if (this.ContactId !== null) {
    //       this.httpser.getCustomersById(this.ContactId).subscribe((data) => {
    //         console.log(data);
    //         this.customerdata = data;
    //       });
    //     }
    //   } else {
    //     // Handle the case where 'id' is null or undefined, if needed.
    //   }
    // });
 // }
}