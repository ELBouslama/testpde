import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { CourseComponent } from './cour/components/course/course.component';
import { ErrorComponent } from './components/error/error.component';
import { LogoutGuard } from './components/guards/logout.guard';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { ListeComponent } from './hub/components/liste/liste.component';

const routes: Routes = [
  { path: 'signup', component: RegisterComponent, canActivate: [LogoutGuard] },
  { path: 'signin', component: LoginComponent, canActivate: [LogoutGuard] },
  {
    path: 'hub',
    loadChildren: () => import('./hub/hub.module').then((mo) => mo.HubModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((mo) => mo.HomeModule)
  },
  {
    path: 'cour',
    loadChildren: () => import('./cour/cour.module').then((mo) => mo.CourModule)
  },

  {'path':"**",component : ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
