import { TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { UserComponent } from './user.component';
import { UserService } from './user.service';
import { DataService } from './data.service';


describe('User Component Testing', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                UserComponent
            ]
        })
        // }).compileComponents();
    });

    it('should create a User Component', () => {
        let fixture = TestBed.createComponent(UserComponent);

        let component = fixture.debugElement.componentInstance;

        expect(component).toBeTruthy();
    });

    it('should get user name from the user service', () => {
        let fixture = TestBed.createComponent(UserComponent);
        let component = fixture.debugElement.componentInstance;

        let userService = fixture.debugElement.injector.get(UserService);
        fixture.detectChanges();
        expect(component.user.name).toEqual(userService.user.name);
    });

    it('should display user name if user is logged in', () => {
        let fixture = TestBed.createComponent(UserComponent);

        let component = fixture.debugElement.componentInstance;


        component.isLoggedIn = true;
        let template = fixture.debugElement.nativeElement;

        fixture.detectChanges();
        expect(template.querySelector('p').textContent).toContain(component.user.name);


    });

    it('shouldn\'t display user name if not logged in', () => {
        let fixture = TestBed.createComponent(UserComponent);
        let component = fixture.debugElement.componentInstance;

        let template = fixture.debugElement.nativeElement;

        fixture.detectChanges();
        expect(template.querySelector('p').textContent).not.toContain(component.user.name);

    });

    it('shouldn\'t get data from async service since we call it in sync way', () => {
        const fixture = TestBed.createComponent(UserComponent);
        const component = fixture.debugElement.componentInstance;

        const dataService = fixture.debugElement.injector.get(DataService);

        const spy = spyOn(dataService, 'getDetails')
            .and.returnValue(Promise.resolve('fake data'));

        fixture.detectChanges();
        // fixture.whenStable().then(() => {
        //     expect(component.data).toContain('fake data');
        // });

        expect(component.data).toBe(undefined);

    });

    it('should get async data from data service', async(() => {

        const fixture = TestBed.createComponent(UserComponent);

        const component = fixture.debugElement.componentInstance;
        fixture.detectChanges();
        const dataService = fixture.debugElement.injector.get(DataService);

        // const spy = spyOn(dataService, 'getDetails')
        //     .and.returnValue(Promise.resolve('fake data'));

        fixture.whenStable().then(() => {
            expect(component.data).toBe('detailed async data');
        });

    }));

    // // this test is not working since spyOn is not working.
    // it('fakeAsync() : should get async data from data service', fakeAsync(() => {

    //     const fixture = TestBed.createComponent(UserComponent);

    //     const component = fixture.debugElement.componentInstance;
    //     fixture.detectChanges();
    //     const dataService = fixture.debugElement.injector.get(DataService);

    //     const spy = spyOn(dataService, 'getDetails')
    //         .and.returnValue(Promise.resolve('fake data'));

    //     tick();
    //     expect(component.data).toBe('fake data');

    // }));

});
