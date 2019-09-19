import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
    getDetails() {
        let promise = new Promise<string>((resolve, reject) => {
            setTimeout(() => resolve('detailed async data'), 2000);
        });

        return promise;
    }
}