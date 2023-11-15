import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/Models/account';
import { NewTransaction } from 'src/app/Models/new-transaction';
import { User } from 'src/app/Models/user';
import { ContactService } from 'src/app/Services/contact.service';

// interface Transaction {
//   transaction_id: number;
//   transdate: Date | null; 
//   amount: number;
//   receiver_acc: number;
//   transtype: string;
// }

// interface AccountType {
//   type_id: number;
//   type_name: string;
// }

// interface Account {
//   acc_no: bigint;
//   balance:bigint;
//   transaction: Transaction[];
//   acounttype: AccountType;
// }

// interface Customer {
//   customer_id: bigint;
//   firstname: string;
//   lastname: string;
//   email: string;
//   accounts: string;
//   account: any[];
// }

// interface Customer {
//   customerId: number;
//   firstname: string;
//   lastname: string;
//   email: string;
//   accounts: string;
//   account: any[]; 
// }




@Component({
  selector: 'app-admin-transaction',
  templateUrl: './admin-transaction.component.html',
  styleUrls: ['./admin-transaction.component.css']
})
export class AdminTransactionComponent implements OnInit {

  public accounts: Account={} as Account;
  public customerr:User={} as User;
 public searchText:any='' 
 
// public newlist:any[]=[];

public newcustomers:NewTransaction[]=[];
public filteredContacts:NewTransaction [] = [];
constructor(private contactservice: ContactService){
  
}

ngOnInit(): void {

  this.getData(); 
}

getData() {
  this.contactservice.getTransactions().subscribe((data: NewTransaction[]) => {
    this.newcustomers = data;
    console.log(data)
  });
}



onSearch(){
  if (!this.searchText) {
    this.filteredContacts = this.newcustomers;
  }
  this.filteredContacts = this.newcustomers.filter((newcustomers) =>
    JSON.stringify(newcustomers)
     .toLowerCase()
      .includes(this.searchText.toLowerCase()))
}

    
  }