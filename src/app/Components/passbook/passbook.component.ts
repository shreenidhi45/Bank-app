import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Account } from 'src/app/Models/account';
import { User } from 'src/app/Models/user';
import { ContactService } from 'src/app/Services/contact.service';
import { CustomerBtId } from '../user-home/user-home.component';
export enum AccountType {
  SAVINGS = 'SAVINGS',
  CURRENT = 'CURRENT',
  FD = 'FD'
}
@Component({
  selector: 'app-passbook',
  templateUrl: './passbook.component.html',
  styleUrls: ['./passbook.component.css']
})
export class PassbookComponent implements OnInit {
  public accounts: Account={} as Account;
  public customerr:User={} as User;
 public searchText:any='' 
  NContactId: string | null | undefined;
  onSearch(){}
///////////
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


}
