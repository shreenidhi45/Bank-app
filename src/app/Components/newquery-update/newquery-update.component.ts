import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MynewQuryUpdatee } from '../admin-home/admin-home.component';
import { ContactService } from 'src/app/Services/contact.service';
import { Querytrans } from 'src/app/Models/querytrans';

@Component({
  selector: 'app-newquery-update',
  templateUrl: './newquery-update.component.html',
  styleUrls: ['./newquery-update.component.css']
})
export class NewqueryUpdateComponent implements OnInit {
  ContactId: string | null | undefined;
  NewContactId: number | null | undefined;
  public allquery:MynewQuryUpdatee[]=[] as MynewQuryUpdatee[];
  public newData:Querytrans = {}  as Querytrans;
  constructor(private activatedRoute:ActivatedRoute,private httpser: ContactService,private router:Router){}

public query:string=''

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param)=>
    this.ContactId=param.get('contactId'))
    this.NewContactId=Number(this.ContactId)
}

onQuery(){
  if(this.NewContactId)
  this.httpser.getUpdatedQuery(this.NewContactId).subscribe((data:any)=>{
console.log(data)
this.router.navigate(["/contacts/adminhome"]).then();
})
}
}