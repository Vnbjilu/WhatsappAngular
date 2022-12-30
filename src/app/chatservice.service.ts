import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatserviceService {

  constructor() { }
  chatMsg:any=[]
  chat(mytext:any)
  {
    this.chatMsg.push(mytext);
    return this.chatMsg;
  }
}
