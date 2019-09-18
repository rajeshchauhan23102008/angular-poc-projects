import { ReversePipe } from './reverse.pipe';

describe('Reverse Pipe Testing', () => {

    it('should reverse a string', () => {
        const reversePipe = new ReversePipe();

        expect(reversePipe.transform('rajesh')).toBe('hsejar');
    });

});
