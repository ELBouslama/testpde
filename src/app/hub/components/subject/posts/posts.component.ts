import { Component, Input, OnInit } from '@angular/core';
import { PostService } from 'src/app/hub/services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  @Input() id: string;
  posts: any;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.getPostsByDiscussionID(this.id);
  }
  getPostsByDiscussionID(id: string) {
    this.postService.getPostsByDiscussionID(id).subscribe(
      (res) => this.posts = res
    );
  }

}
