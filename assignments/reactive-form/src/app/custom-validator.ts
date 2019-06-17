import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

export class CustomValidators {

    static forbiddenProjectNameCheckAsync(formControl: FormControl): Promise<any> | Observable<any> {

        const forbiddenProjectNames = ['Rajesh', 'rajesh', 'abc'];

        const promiseToReturn = new Promise(
            (resolve, reject) => {

                setTimeout(() => {
                    if (forbiddenProjectNames.indexOf(formControl.value) !== -1) {
                        resolve({ 'forbiddenProjectName': true });
                    }

                    resolve(null);

                }, 2000);
            });

        return promiseToReturn;

    }


    static forbiddenProjectNameCheck(formControl: FormControl): { [key: string]: boolean } {

        const forbiddenProjectNames = ['Test', 'test', 'xyz'];

        if (forbiddenProjectNames.indexOf(formControl.value) !== -1) {
            return ({ 'forbiddenProjectName': true });
        }

        return null;

    }
}