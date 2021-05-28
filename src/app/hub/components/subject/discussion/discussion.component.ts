import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DiscussionService } from 'src/app/hub/services/discussion.service';
import { PostService } from 'src/app/hub/services/post.service';

@Component({
  selector: 'app-discussion',
  templateUrl: './discussion.component.html',
  styleUrls: ['./discussion.component.css']
})
export class DiscussionComponent implements OnInit {
  discussion_id: string;
  posts: any;
  discussion: any;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private discussionService: DiscussionService
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (res) => this.discussion_id = res.id
    );
    this.getDiscussionByID(this.discussion_id);
    this.getPostsByDiscussionID(this.discussion_id);
  }

  getPostsByDiscussionID(discussion_id: string) {
    this.postService.getPostsByDiscussionID(discussion_id).subscribe(
      (res) => console.log(res)//this.posts = res
    );
  }

  getDiscussionByID(discussion_id: string) {
    this.discussionService.getDiscussionByID(discussion_id).subscribe(
      (res) => this.discussion = res
    );
  }

}
