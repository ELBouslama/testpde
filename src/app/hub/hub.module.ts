import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListeComponent } from './components/liste/liste.component';
import { HttpClientModule } from '@angular/common/http';

import { ToastrModule } from 'ngx-toastr';
import { HubRoutingModule } from './hub-routing.module';
import { SubjectComponent } from './components/subject/subject.component';
import { SubjectTitleComponent } from './components/subject/subject-title/subject-title.component';
import { ItemComponent } from './components/subject/item/item.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { RichTextEditorModule } from './components/shared/rich-text-editor/rich-text-editor.module';
import { QuillModule } from 'ngx-quill';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DiscussionComponent } from './components/subject/discussion/discussion.component';
import { GenericHubComponent } from './components/shared/generic-hub/generic-hub.component';
import { PostsComponent } from './components/subject/posts/posts.component';

@NgModule({
  declarations: [ListeComponent, SubjectComponent, SubjectTitleComponent, ItemComponent, AddPostComponent, DiscussionComponent, GenericHubComponent, PostsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    HubRoutingModule,
    RichTextEditorModule,
    FormsModule,
    ReactiveFormsModule,
    QuillModule.forRoot()
  ],
})
export class HubModule {}
