import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { User } from '../Models/user';
import { Querytrans } from '../Models/querytrans';
import { AmountDepoWit, AmountTrans } from '../Components/transaction/transaction.component';
import { TransactionUser } from '../Models/transaction';
import { NewTransaction } from '../Models/new-transaction';
import { UserDto } from '../Components/login/login.component';
import { Mydatanewq } from '../Components/queries-admin/queries-admin.component';
import { CustomerBtId } from '../Components/user-home/user-home.component';
import { Mydataquery } from '../Components/queries/queries.component';
import { NewUser } from '../Models/new-user';
import { Users } from '../Models/users';
@Injectable({
  providedIn: 'root'
})
export class ContactService implements OnInit{

 
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  constructor(private httpclient:HttpClient) {}
  // http://localhost:8085/app/customers
 private serverUrl:string='https://localhost:7171'

 //usertransaction
public getCustomer():Observable<TransactionUser[]>{
  let url=`${this.serverUrl}/api/Customers`;
  return this.httpclient.get<TransactionUser[]>(url).pipe(catchError(this.handleError))
  }

  //getting whole transaction
  public getCustomers():Observable<TransactionUser[]>{
    let url=`${this.serverUrl}/app/customers`;
    return this.httpclient.get<TransactionUser[]>(url).pipe(catchError(this.handleError))
    }
    public getCustomersById(id:number):Observable<CustomerBtId >{
      let url=`${this.serverUrl}/api/Customers/${id}`;
      return this.httpclient.get<CustomerBtId >(url).pipe(catchError(this.handleError))
      }

  //wholetransaction
  public getTransactions():Observable<NewTransaction[]>{
    let url=`${this.serverUrl}/api/Transaction`;
    return this.httpclient.get<NewTransaction[]>(url).pipe(catchError(this.handleError))
    }
   

//users details for login
    public getUsers():Observable<UserDto[]>{
      let url=`${this.serverUrl}/api/UsersControllers`;
      return this.httpclient.get<UserDto[]>(url).pipe(catchError(this.handleError))
      }


   //get transaction by id   of users
  public getTransactionById(transtId: string): Observable<CustomerBtId> {
    const dataUrl = `${this.serverUrl}/api/Transaction/customer/${transtId}`;
    return this.httpclient.get<CustomerBtId>(dataUrl).pipe(catchError(this.handleError));
  }

 //credit
//  public addCredit(contactId:number,contact:AmountDepoWit):Observable<AmountDepoWit>{
//   let dataUrl=`${this.serverUrl}/contacts/${contactId}`
//   return this.httpclent.put<AmountDepoWit>(dataUrl,contact).pipe(catchError(this.handleError))
// }

 //credit
 public addCredit(contact:any):Observable<any>{
  let dataUrl=`${this.serverUrl}/api/Transaction/deposit`
  return this.httpclient.post<any>(dataUrl,contact).pipe(catchError(this.handleError))
}
/// for withdrawl
public takeWithdraw(contact:AmountDepoWit):Observable<AmountDepoWit>{
  let dataUrl=`${this.serverUrl}/api/Transaction/withdrawal`
  return this.httpclient.post<AmountDepoWit>(dataUrl,contact).pipe(catchError(this.handleError))
}
//for transfer
public sendTransfer(contact: AmountTrans):Observable<AmountTrans>{
  let dataUrl=`${this.serverUrl}/api/Transaction/transfer`
  return this.httpclient.post<AmountTrans>(dataUrl,contact).pipe(catchError(this.handleError))
}


////query all getting
public getAllQuery():Observable<Querytrans[]>{
  let dataUrl=`${this.serverUrl}/query/get/new/all`
  return this.httpclient.get<Querytrans[]>(dataUrl).pipe(catchError(this.handleError))
}


////query all getting
public getUpdatedQuery(id:number):Observable<Querytrans>{
  let dataUrl=`${this.serverUrl}/query/many/${id}`
  return this.httpclient.get<Querytrans>(dataUrl).pipe(catchError(this.handleError))
}

public getByQueryId(id:number):Observable<Querytrans[]>{
  let dataUrl=`${this.serverUrl}/query/get/${id}`
  return this.httpclient.get<Querytrans[]>(dataUrl).pipe(catchError(this.handleError))
}
//create query
public sendQuery(data:Mydataquery):Observable<Mydataquery>{
  let dataUrl=`${this.serverUrl}/query/create`
  return this.httpclient.post<Mydataquery>(dataUrl,data).pipe(catchError(this.handleError))
}
//delete contact by id
public deleteCustomer(contactId:string):Observable<{}>{
  let dataUrl=`${this.serverUrl}/contacts/${contactId}`
  return this.httpclient.delete<{}>(dataUrl).pipe(catchError(this.handleError))
}

////sending registration

public sendRegister(data:User):Observable<User>{
  // console.log('Request Payload:', data);
  let dataUrl=`${this.serverUrl}/api/AccountRequest`
  return this.httpclient.post<User>(dataUrl,data)
}

////register kar rahe hai new ko in register table
public getRequestedAccoun():Observable<User[]>{
  let dataUrl=`${this.serverUrl}/api/AccountRequest`
  return this.httpclient.get<User[]>(dataUrl).pipe(catchError(this.handleError))
}

public getRequestedAccounById(id:number):Observable<User>{
  let dataUrl=`${this.serverUrl}/api/AccountRequest/${id}`
  return this.httpclient.get<User>(dataUrl).pipe(catchError(this.handleError))
}

/////new ko add kart rahe hai in update
public postRequsetedAccount(data:User):Observable<User[]>{
  let dataUrl=`${this.serverUrl}/api/UsersControllers/Register`
  return this.httpclient.post<User[]>(dataUrl,data).pipe(catchError(this.handleError))
}
public deleteRequest(id:number):Observable<{}>{
  let dataUrl = `${this.serverUrl}/api/AccountRequest/${id}`;
  return this.httpclient.delete<{}>(dataUrl).pipe(catchError(this.handleError));
}

  public handleError(error:HttpErrorResponse){
    let errorMessage:string='';
    if(error.error instanceof ErrorEvent){
      //client error
      errorMessage=`Error :${error.error.message};`
    }
    else{
      //server error
      errorMessage=`Status :${error.status};`
    }
    return throwError(errorMessage);
  }
  
}