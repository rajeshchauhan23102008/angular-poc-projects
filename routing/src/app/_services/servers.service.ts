export class ServersService {
    servers: { id: number, name: string, status: string }[] = [
        { id: 100, name: 'Production', status: 'Online' },
        { id: 101, name: 'QA', status: 'Online' },
        { id: 102, name: 'Dev', status: 'Offline' }
    ];

    getServers() {
        return this.servers.slice();
    }

    getServer(id: number) {
        const server = this.servers.find((s) => {
            return s.id === id;
        });

        return server;
    }

    updateServerStatus(serverInput: { id: number, name: string, status: string }) {

        const server = this.servers.find(
            (s) => {
                return s.id === serverInput.id;
            });

        if (server) {
            server.name = serverInput.name;
            server.status = serverInput.status;
        }
    }
}
