import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from 'src/app/Services/contact.service';
export interface MynewQuryUpdatee{
  queryId?: number;
  content: string;
  adminResponse:string; 
  custId: number;
 
}

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  public allquery:MynewQuryUpdatee[]=[] as MynewQuryUpdatee[];
  constructor(private http:ActivatedRoute,private https:ContactService){}
  ngOnInit(): void {
   this.https.getAllQuery().subscribe((data: MynewQuryUpdatee[])=>{
this.allquery=data
   })
  }
 // public newid:any 
}