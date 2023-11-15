export interface NewTransaction {
    transactionId: number;
    date: Date; 
    amount: number;
    accNo: number;
    transactionType: string;
    TargetAccNo: number
  }