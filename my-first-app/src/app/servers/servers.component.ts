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
  serverName = '';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {}

  onCreateServer() {
    this.serverCreationStatus = 'Server creado'
  }

  onUpdateServerName(event: any) {
    console.log(event)
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
