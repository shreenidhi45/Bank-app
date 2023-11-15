import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from 'src/app/Services/contact.service';
import { Querytrans } from 'src/app/Models/querytrans';

@Component({
  selector: 'app-queries-soln',
  templateUrl: './queries-soln.component.html',
  styleUrls: ['./queries-soln.component.css']
})
export class QueriesSolnComponent {
  ContactId: string | null | undefined;
  NewContactId: number | null | undefined;

  public newData:Querytrans[] = []  as Querytrans[];
  constructor(private activatedRoute:ActivatedRoute,private httpser: ContactService){}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param)=>
    this.ContactId=param.get('contactId'))
    this.NewContactId=Number(this.ContactId)
    this.httpser.getByQueryId(this.NewContactId).subscribe((data:any)=>{
    console.log(data)
    this.newData=data
   })
  } 
 
}
