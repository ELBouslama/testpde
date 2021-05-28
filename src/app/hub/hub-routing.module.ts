import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListeComponent } from '../hub/components/liste/liste.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { DiscussionComponent } from './components/subject/discussion/discussion.component';



const routesHub: Routes = [
 {'path':'', component: ListeComponent },
 {'path': 'add-post',component: AddPostComponent},
 {'path': 'discussion/:id', component: DiscussionComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routesHub)],
  exports: [RouterModule],
})
export class HubRoutingModule {}
