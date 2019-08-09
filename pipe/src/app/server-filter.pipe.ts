import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'serverFilter',
    pure: true
})
export class ServerFilterPipe implements PipeTransform {
    transform(arrServers: any, filterInput: string, field: string) {

        if (arrServers && filterInput) {
            const filteredServers = [];

            arrServers.forEach(server => {
                if (server[field] === filterInput) {
                    filteredServers.push(server);
                }
            });

            return filteredServers;
        }

        return arrServers;
    }
}