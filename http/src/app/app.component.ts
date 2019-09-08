import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Post } from './post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'http';

  // @ViewChild('myForm', { static: false }) myForm: NgForm;

  loadedPosts: Post[] = [];
  isLoading = false;

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.fetchPost();
  }

  onPost(data: Post) {

    // console.log(this.myForm);
    console.log(data);

    this.http
      .post<{ name: string }>('https://therecipeapp-ca066.firebaseio.com/posts.json', data)
      .subscribe(responseData => {
        console.log(responseData);
      });

  }

  onFetch() {
    this.fetchPost();
  }

  private fetchPost() {
    this.isLoading = true;

    this.http
      .get<{ [key: string]: Post }>('https://therecipeapp-ca066.firebaseio.com/posts.json')
      .pipe(map((responseData) => {

        console.log(responseData);

        const posts: Post[] = [];

        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            posts.push({ ...responseData[key], id: key });
          }
        }

        return posts;

      }))
      .subscribe(response => {

        // console.log(responseData);
        // this.posts = [];

        // for (let key in responseData) {
        //   this.posts.push(responseData[key]);
        // }
        this.loadedPosts = response;

        this.isLoading = false;

      });


  }
}
