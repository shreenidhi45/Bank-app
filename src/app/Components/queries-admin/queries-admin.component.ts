import { Component, OnInit } from '@angular/core';
import { Querytrans } from 'src/app/Models/querytrans';
import { ContactService } from 'src/app/Services/contact.service';
export interface Mydatanewq{
  queryId?:number;
  content:string;
  adminResponse:string;
  custId:number;
  }
@Component({
  selector: 'app-queries-admin',
  templateUrl: './queries-admin.component.html',
  styleUrls: ['./queries-admin.component.css']
})
export class QueriesAdminComponent implements OnInit {

  public newDataQuery:Querytrans[] = [] as Querytrans[];
 // public newDataQ:CustomerBtId[] = [] as CustomerBtId[];
  constructor(private https:ContactService){}
  ngOnInit(): void {
    this.https.getAllQuery().subscribe((data:any)=>{
      console.log(data)
    this.newDataQuery=data;
    })
    this.https.getCustomer().subscribe((data:any)=>{
     console.log(data)})
  }
  
 
}
