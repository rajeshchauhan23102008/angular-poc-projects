import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpEventType } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';
import { Post } from '../post.model';
import { Observable, Subject, throwError } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class PostService {

    errorSubject = new Subject<string>();

    constructor(private http: HttpClient) {

    }

    cleanPost(): Observable<any> {
        return this.http
            .delete('https://therecipeapp-ca066.firebaseio.com/posts.json');
    }

    createPost(post) {
        this.http
            .post<{ name: string }>('https://therecipeapp-ca066.firebaseio.com/posts.json', post, {
                observe: 'events'
            })
            .pipe(tap(
                (event) => {
                    // console.log(event);

                    if (event.type === HttpEventType.Sent) {
                        // console.log('your request sent to the api');
                    } else if (event.type === HttpEventType.Response) {
                        // console.log('Complete response received from the firebase api');
                    }
                }
            ))
            .subscribe(responseData => {
                // console.log(responseData);
            }, error => {
                this.errorSubject.next(error.message);
            });
    }

    fetchPost(): Observable<Post[]> {

        let params = new HttpParams();
        params = params.append('print', 'pretty');
        params = params.append('onemore', 'onemorevalue');


        return this.http
            .get<{ [key: string]: Post }>('https://therecipeapp-ca066.firebaseio.com/posts.json', {
                headers: new HttpHeaders({
                    'My-Custom-Header': 'this is my custom header value'
                }),
                // params: params
                params: new HttpParams().set('print', 'pretty').set('onemore', 'onemorevalue'),
                // observe: 'body' // default
                // observe: 'response'
                // observe: 'events',
                responseType: 'json'
            })
            .pipe(map((responseData) => {

                // console.log(responseData);

                const posts: Post[] = [];

                for (const key in responseData) {
                    if (responseData.hasOwnProperty(key)) {
                        posts.push({ ...responseData[key], id: key });
                    }
                }

                return posts;

            }),
                catchError(error => {
                    console.log(error);
                    return throwError(error);
                })
            );

    }
}
