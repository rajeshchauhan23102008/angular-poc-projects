export class ServersService {
    servers: { name: string, status: string }[] = [
        { name: 'Production', status: 'Online' },
        { name: 'QA', status: 'Online' },
        { name: 'Dev', status: 'Offline' }
    ];

    getServers() {
        return this.servers.slice();
    }

    updateServerStatus(name: string, newStatus: string) {

        for (let server of this.servers) {
            //Find Server.
            if (server.name === name) {
                //Update Status.

                server.status = newStatus;

                break;
            }
        }
    }
}
