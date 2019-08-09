import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'sort',
    pure: false
})
export class SortPipe implements PipeTransform {

    transform(arrValue: any, type: string, field: string) {

        if (arrValue) {

            return arrValue.sort((item1, item2) => {

                const item1Data = item1[field].toLowerCase();
                const item2Data = item2[field].toLowerCase();

                if (type === 'asc') {
                    if (item1Data < item2Data) {
                        return -1;
                    } else if (item1Data > item2Data) {
                        return 1;
                    } else {
                        return 0;
                    }
                } else {
                    // Descending Sort.
                    if (item1Data < item2Data) {
                        return 1;
                    } else if (item1Data > item2Data) {
                        return -1;
                    } else {
                        return 0;
                    }
                }
            });

        }

        return arrValue;
    }
}