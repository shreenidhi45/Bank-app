import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from 'src/app/Services/contact.service';
export interface AmountDepoWit {
  amount:bigint;
  customerId:any
}

export interface AmountDepoWits {
  balance:bigint;
  
}
export interface AmountTrans {
  amount:bigint;
  TargetAccNo:bigint
  SourceCustomerId:number
}
@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  public id: string | null | undefined;
  public newContactId: number | undefined;
  public depositAmountss:any={} as any;
  public depositAmounts:bigint | undefined;
  public withdrawAmountss:any={} as any;
  public withdrawAmounts:bigint | undefined;
  public transferAmounts:bigint | undefined;
  public receiver_accc:bigint | undefined
  public transferAmountss: AmountTrans={} as  AmountTrans;

  constructor( private activatedRoute:ActivatedRoute,private httpser :ContactService){
    console.log(this.depositAmounts)
  }
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param) => {
       this.id = param.get('contactId');
        this.newContactId = Number(this.id)

      
    });
  }

  onDeposit(){
    if (this.newContactId ) {
      this.depositAmountss = {
        amount: this.depositAmounts,
        customerId: this.newContactId
      };
      console.log(this.depositAmountss)
  this.httpser.addCredit(this.depositAmountss).subscribe((data:any)=>{
console.log(data)
  })
  }


  // this.httpser.addCredit(this.depositAmountss).subscribe((data:any)=>{
  //   console.log(data)
  //     })
}

onWithdraw(){
  if (this.withdrawAmounts && this.newContactId !== undefined) {
    this.withdrawAmountss = {
      amount: this.withdrawAmounts,
      customerId: this.newContactId
    };
this.httpser.takeWithdraw(this.withdrawAmountss).subscribe((data:any)=>{
  console.log(data)
})
}
}
  onTransfer(){
    if (this.transferAmounts && this.newContactId && this.receiver_accc !== undefined) {
      this.transferAmountss = {
        amount: this.transferAmounts,
        SourceCustomerId: this.newContactId,
        TargetAccNo:this.receiver_accc
      };
  this.httpser.sendTransfer(this.transferAmountss).subscribe((data:any)=>{
    console.log(data)
  })
  }
  }
}
