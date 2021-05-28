import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginGuard } from '../components/guards/login.guard';
import { CourseListComponent } from './components/course-list/course-list.component';

import { CourseComponent } from './components/course/course.component';




const routes: Routes = [
  {'path':'' , component : CourseComponent } ,
  {'path':'list' , component : CourseListComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourRoutingModule {}
