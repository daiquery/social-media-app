import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component'; 
import { RegisterComponent } from './register/register.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FriendsComponent } from './friends/friends.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { BlogsComponent } from './blogs/blogs.component';
import { ProfileComponent } from './profile/profile.component';
import { SplashPageComponent } from './splash-page/splash-page.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'friends', component: FriendsComponent },
  { path: 'blogpost', component: BlogPostComponent },
  { path: 'blogs', component: BlogsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'splash', component: SplashPageComponent },
  { path: '', redirectTo: '/splash', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
