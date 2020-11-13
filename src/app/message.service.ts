import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  message:string[]=[];

  add(msg:string):void{
    this.message.push(msg);
  }

  get():string[]{
    return this.message;
  }
}
