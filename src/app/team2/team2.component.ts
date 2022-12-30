import { Component } from '@angular/core';
import { ChatserviceService } from '../chatservice.service';

@Component({
  selector: 'app-team2',
  templateUrl: './team2.component.html',
  styleUrls: ['./team2.component.css']
})
export class Team2Component {
constructor(private db:ChatserviceService){}
msg=[];
sendData(mytext:any)
{
  this.msg=this.db.chat("Team2 : "+mytext);
  console.log(this.msg);
  return "mytext.value=null";
}
}
