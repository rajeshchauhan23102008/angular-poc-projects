//To keep a count of no. of active > inctive actions and also inctive > active actions.

export class CounterService {
    activeCounter: number = 0;
    inactiveCounter: number = 0;

    updateCounter(type: string) {
        if (type === 'active') {
            this.activeCounter += 1;
        } else {
            this.inactiveCounter += 1;
        }
    }
}
