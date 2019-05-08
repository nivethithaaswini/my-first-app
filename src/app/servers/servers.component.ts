import { Component, OnInit } from '@angular/core';

@Component({
//  selector: '[app-servers]',
//selector:'.app-servers',
selector:'app-servers',
//  template: '<app-server></app-server><app-server></app-server>',
templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
allowNewServer = false;
serverCreationStatus = '';
ServerName = 'Testserver';
boovariable = false;
username = '';
usernameStatus= false;
servers = ['Testserver','Testserver 2'];
constructor() {
    setTimeout(() =>{
      this.allowNewServer = true;
    },2000);

  }
  OnCreateServer(){
    this.boovariable = true;
    this.servers.push(this.ServerName);
    this.serverCreationStatus = 'Server is created and Name is '+this.ServerName;
  }
  ngOnInit() {
  }
  OnUpdateServerName(event:Event){
    this.ServerName = (<HTMLInputElement>event.target).value;
  }

OnUpdateUsername(event:Event){
  this.username = (<HTMLInputElement>event.target).value;
}

Oncheckempty(){
  if(this.username!=''){
    this.usernameStatus = true;
  }

}

OnClickUN(){
  this.username = " ";

}
}
