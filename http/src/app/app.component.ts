import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from './post.model';
import { PostService } from './services/post.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'http';

  // @ViewChild('myForm', { static: false }) myForm: NgForm;

  loadedPosts: Post[] = [];
  isLoading = false;
  error = null;
  errorSubs: Subscription = null;
  fetchSubs: Subscription = null;
  cleanSubs: Subscription = null;

  constructor(private postService: PostService) {

  }

  ngOnInit() {

    this.errorSubs = this.postService.errorSubject.subscribe((messgae) => {
      this.error = messgae;
    });

    this.fetchPost();
  }

  onCleanPost() {

    this.cleanSubs = this.postService.cleanPost().subscribe((response) => {
      this.loadedPosts = [];
      // console.log(response);
    });
  }

  onPost(data: Post) {

    // console.log(this.myForm);
    // console.log(data);

    this.postService.createPost(data);

  }

  onFetch() {
    this.fetchPost();
  }

  private fetchPost() {
    this.isLoading = true;
    this.loadedPosts = [];
    this.error = null;

    this.fetchSubs = this.postService.fetchPost()
      .subscribe(response => {

        // console.log(responseData);
        // this.posts = [];

        // for (let key in responseData) {
        //   this.posts.push(responseData[key]);
        // }
        this.loadedPosts = response;

        this.isLoading = false;

        // console.log(response);

      },
        error => {
          this.error = error.message;
          this.isLoading = false;
          //console.log(error);
        });


  }

  ngOnDestroy() {
    this.errorSubs.unsubscribe();
    this.fetchSubs.unsubscribe();
    this.cleanSubs.unsubscribe();
  }
}
