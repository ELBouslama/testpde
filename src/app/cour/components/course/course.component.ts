import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Video } from '../../model/video';
import { CourService } from '../../services/cour.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent implements OnInit {
  public videoParts: Video[];
  public currentVideoIndex: number;

  constructor(private courService : CourService ) {}

  ngOnInit(): void {
    this.videoParts = this.courService.getFakeVideo() ;
    this.currentVideoIndex = 0;
  }

  selectVideoPlay(index: number) {
    console.log('video changing selected');
    this.currentVideoIndex = index;
    console.log(this.currentVideoIndex);
  }

  getCurrentVideo() {
    return this.videoParts[this.currentVideoIndex];
  }

  getCurrentVideoIndex() {
    return this.currentVideoIndex;
  }

  listenForVideoEnd(index: string) {
    const videoNumbers = this.videoParts.length;
    if (this.currentVideoIndex < videoNumbers - 1) {
      this.currentVideoIndex = this.currentVideoIndex + 1;
    }
  }
}
