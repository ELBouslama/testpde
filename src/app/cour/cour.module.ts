import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaplayerComponent } from './components/mediaplayer/mediaplayer.component';

import { CourseComponent } from './components/course/course.component';
import { CourseIntroComponent } from './components/course-intro/course-intro.component';

import { CourRoutingModule } from './cour-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { PlyrModule } from 'ngx-plyr';
import { CourseListComponent } from './components/course-list/course-list.component';



@NgModule({
  declarations: [MediaplayerComponent,CourseComponent,CourseIntroComponent, CourseListComponent],
  imports: [
    CommonModule,
    FormsModule,
    PlyrModule,
    CourRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot()
  ]
})
export class CourModule { }
