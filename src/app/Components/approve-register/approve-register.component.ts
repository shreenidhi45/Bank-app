import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/Models/user';
import { ContactService } from 'src/app/Services/contact.service';

@Component({
  selector: 'app-approve-register',
  templateUrl: './approve-register.component.html',
  styleUrls: ['./approve-register.component.css']
})
 export class ApproveRegisterComponent implements OnInit {
  public userreg: User = {} as User;
  public newuserreg: User = {} as User;
  public id: string | undefined;
  public ContactId: number | null = null;

  constructor(private https: ContactService, private activatedroute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedroute.paramMap.subscribe((param) => {
      const id = param.get('contactId');
      if (id !== null && id !== undefined) {
        this.id = id;
        this.ContactId = Number(id)
      } else {
        // Handle the case where 'id' is null or undefined, if needed.
      }
    });
     if(this.ContactId){
    this.https.getRequestedAccounById(this.ContactId).subscribe((data)=>{
      this.userreg=data
  })
  }
}
onRegter(){
 this.newuserreg.address=this.userreg.address,
  this.newuserreg.email=this.userreg.email,
  this.newuserreg.firstName=this.userreg.firstName
  this.newuserreg.lastName=this.userreg.lastName
  this.newuserreg.password=this.userreg.password
  this.newuserreg.phoneNumber=this.userreg.phoneNumber
  this.newuserreg.userName=this.userreg.userName
  this.https.postRequsetedAccount(this.newuserreg).subscribe((data)=>{
console.log(data)
window.location.reload();
  })
}
 }
