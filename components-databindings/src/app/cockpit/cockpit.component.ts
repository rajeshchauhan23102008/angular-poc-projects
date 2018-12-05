import { Component, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Server } from '../shared/server.model';

@Component({
    selector: 'app-cockpit',
    templateUrl: './cockpit.component.html'
})
export class CockpitComponent {
    @Output('cockpitServerAdded') serverAdded = new EventEmitter<Server>();
    @Output('cockpitBlueprintAdded') blueprintAdded = new EventEmitter<Server>();
    server: Server = new Server('', '', '');

    @ViewChild('serverContentInput') serverContent: ElementRef;


    // addServer() {
    //     this.server.type = 'server';
    //     this.serverAdded.emit(this.server);
    // }

    // addBlueprint() {
    //     this.server.type = 'blueprint';
    //     this.blueprintAdded.emit(this.server);
    // }

    addServer(serverName: HTMLInputElement) {
        console.log(serverName);
        console.log(this.serverContent);

        this.server.type = 'server';
        this.server.name = serverName.value;
        this.server.content = this.serverContent.nativeElement.value;
        this.serverAdded.emit(this.server);
    }

    addBlueprint(serverName: HTMLInputElement) {
        console.log(serverName);
        console.log(this.serverContent);

        this.server.type = 'blueprint';
        this.server.name = serverName.value;
        this.server.content = this.serverContent.nativeElement.value;
        this.blueprintAdded.emit(this.server);
    }

}
