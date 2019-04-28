import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription, Observable, Observer } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit, OnDestroy {

    private intervalObsSubs: Subscription;
    private customObsSubs: Subscription;

    ngOnInit() {

        // this.intervalObsSubs = interval(1000).subscribe(
        //     (data: number) => {
        //         console.log(data);
        //     }
        // );

        const intervalObs = interval(1000).pipe(map((data: number) => {
            return data * 3;
        }));

        this.intervalObsSubs = intervalObs.subscribe(
            (data: number) => {
                console.log(data);
            }
        );


        const customObs = Observable.create((observer: Observer<string>) => {

            setTimeout(() => {
                observer.next('first packet arrived!!!');
            }, 2000);

            setTimeout(() => {
                observer.next('second packet arrived!!!');
            }, 4000);

            // setTimeout(() => {
            //     observer.error('error occoured');
            // }, 6000);

            setTimeout(() => {
                observer.complete();
            }, 7000);

            setTimeout(() => {
                observer.next('fourth packet arrived!!!');
            }, 8000);

        });

        this.customObsSubs = customObs.subscribe(
            (data: string) => { console.log(data); },
            (error: string) => { console.log(error); },
            () => { console.log('All packets arrived'); }
        );
    }

    ngOnDestroy() {
        this.intervalObsSubs.unsubscribe();
        this.customObsSubs.unsubscribe();
    }

}
