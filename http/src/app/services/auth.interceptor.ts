import { HttpInterceptor, HttpRequest, HttpHandler, HttpHeaders, HttpEventType } from '@angular/common/http';
import { tap } from 'rxjs/operators';

export class AuthInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler) {

        // console.log('your request is on its way!!!')
        // console.log(req);

        // Manipulate the request object.
        console.log('auth interceptor executed');
        const modifiedReq = req.clone({ headers: new HttpHeaders().append('auth', 'abcdxyz') });

        // console.log(modifiedReq);

        // return next.handle(req);
        return next.handle(modifiedReq).pipe(tap(
            (event) => {
                // console.log(event);
                if (event.type === HttpEventType.Sent) {
                    // console.log('request has been sent');
                } else if (event.type === HttpEventType.Response) {
                    // console.log('response has arrived');
                }
            }
        ));

    }

}