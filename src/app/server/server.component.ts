import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
})
export class ServerComponent implements OnInit {
  serverId = 10;
  serverStatus = 'offline';
  serverCreationStatus = 'No Server was Created!';
  serverName = 'Stackblitz';
  servers = ['TestServer', 'TestServer2']

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getserverStatus() {
    return this.serverStatus;
  }

  ngOnInit() {}

  onCreateServer() {
    this.servers.push(this.serverName);
    this.serverCreationStatus =
      'Server was Created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
