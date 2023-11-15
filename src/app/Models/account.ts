
//import { User } from "./customer";

import { AccountType } from "../Components/passbook/passbook.component";

export class Account {
    id: number | undefined;
    accountNumber: string | undefined;
    accountType: AccountType | undefined;
    balance: number | undefined;
    // customer: User | undefined; 
  
    
  }