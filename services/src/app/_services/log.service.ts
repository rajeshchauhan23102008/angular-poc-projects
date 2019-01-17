import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LogService {
    logAccountStatus(status: string) {
        console.log('Server status has been changed to :' + status);
    }
}
