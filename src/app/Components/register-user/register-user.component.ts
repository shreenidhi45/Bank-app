import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/user';
import { ContactService } from 'src/app/Services/contact.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent  {
  public userreg:User={} as User;
  constructor(private https:ContactService){}
  onRegter(){
this.https.sendRegister(this.userreg).subscribe((data)=>{
  console.log(data)
})
  }
}
