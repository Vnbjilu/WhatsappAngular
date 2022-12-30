import { Component } from '@angular/core';
import { ChatserviceService } from '../chatservice.service';

@Component({
  selector: 'app-team1',
  templateUrl: './team1.component.html',
  styleUrls: ['./team1.component.css']
})
export class Team1Component {
  constructor(private db:ChatserviceService){}
  msg=[]
  clear="";
  sendData(mytext:any)
  {
   this.msg= this.db.chat("team1: "+mytext);
   console.log(this.msg); 
   return "mytext.value=null";
  }

}
