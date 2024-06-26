import { Component } from '@angular/core';

@Component({
  selector: 'app-servers', /* by html tag */
  // selector: '.app-servers', /* by html class */
  // selector: '[app-servers]', /* by html attribute */
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent {
  allowNewServer: Boolean = false;
  serverCreationStatus: string = 'El servidor no ha sido creado'
  serverName = 'Servidor de Testing';
  username: string = '';
  serverCreated: boolean = false;
  servers = ['TestServer', 'TestServer 2']

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {}

  onCreateServer() {
    this.serverCreationStatus = 'Server creado: ' + this.serverName;
    this.servers.push(this.serverName);
    this.serverCreated = true;
  }

  onUpdateServerName(event: any) {
    console.log(event)
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onResetUsername() {
    this.username = '';
  }
}
