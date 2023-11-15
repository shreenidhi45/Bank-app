import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/Models/user';
import { ContactService } from 'src/app/Services/contact.service';

@Component({
  selector: 'app-adminaccount-request',
  templateUrl: './adminaccount-request.component.html',
  styleUrls: ['./adminaccount-request.component.css']
})
export class AdminaccountRequestComponent   {
  public Regdata:User[]=[] as User[];
  errorMessage: any;
  constructor(private https:ContactService,private routerlink:ActivatedRoute){}
  ngOnInit(): void {
    this.loadDataFromService();
  }

  loadDataFromService(){
    this.https.getRequestedAccoun().subscribe((data)=>{
      console.log(data)
      this.Regdata=data;
    },

      (err) => {
        this.errorMessage= err;
      });
  }

  clickDeleteContact(contactId:number | undefined){
    if(contactId){
    this.https.deleteRequest(contactId).subscribe((data)=>{
      this.loadDataFromService();
    },(err)=>{
      this.errorMessage=err;
    });
  }
  }
  
}
