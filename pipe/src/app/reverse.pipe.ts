import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'reverse'
})
export class ReversePipe implements PipeTransform {
    transform(arr: any[], field: string) {

        if (arr && field) {

            for (const item of arr) {

                if (item[field]) {

                    const arrRevValue = item[field].split('');

                    const reverseArrItem = [];

                    for (let i = arrRevValue.length - 1; i >= 0; i--) {
                        reverseArrItem.push(arrRevValue[i]);
                    }

                    item[field] = reverseArrItem.join('');

                }
            }
        }

        return arr;

    }
}
