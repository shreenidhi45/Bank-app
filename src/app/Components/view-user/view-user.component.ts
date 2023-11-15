import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TransactionUser } from 'src/app/Models/transaction';
import { ContactService } from 'src/app/Services/contact.service';
export interface CustomerBtId {
  customerId: bigint;
  firstname: string;
  lastname: string;
  email: string;
  balance: number;
}
@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit{
  
  public loading:boolean=false;
  public searchText:string='';
  public errorMessage:boolean=false;
  public filteredContacts:any
 public customers:TransactionUser[]=[]
 public newcustomers:TransactionUser[]=[]
 
 //public ContactId:string|null=null;
 
 public id: string | undefined;
   public ContactId: number | null = null;
   public customerdata: CustomerBtId = {} as CustomerBtId;
 
   constructor(private activatedRoute: ActivatedRoute, private httpser: ContactService) {
     console.log(this.ContactId);
   }
 
   ngOnInit(): void {
     this.activatedRoute.paramMap.subscribe((param) => {
       const id = param.get('contactId');
       if (id !== null && id !== undefined) {
         this.id = id;
         this.ContactId = Number(id);
 
         if (this.ContactId !== null) {
           this.httpser.getCustomersById(this.ContactId).subscribe((data:any) => {
             console.log(data);
             this.customerdata = data;
           });
         }
       } else {
         // Handle the case where 'id' is null or undefined, if needed.
       }
     });
   }
 
   DeleteContact(){}
 
   isNotEmpty(){}
 
   onSearch(){}
 }
