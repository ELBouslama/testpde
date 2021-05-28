import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseComponent } from '../cour/components/course/course.component';
import { ErrorComponent } from '../components/error/error.component';
import { LoginGuard } from '../components/guards/login.guard';
import { PrivacyComponent } from '../components/privacy/privacy.component';
import { ListeComponent } from '../hub/components/liste/liste.component';

import { HomeComponent } from './components/home/home.component';


const routesHome: Routes = [
 {'path':'',component: HomeComponent },
 {'path':'privacy',component: PrivacyComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routesHome)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
