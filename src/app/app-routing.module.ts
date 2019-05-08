import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { ListingComponent } from './listing/listing.component';
import { DashboardComponent } from './dashboard/dashboard.component'
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  // { path: '**', pathMatch: 'full', redirectTo: '/dashboard' },
  // { path: 'listing', component: ListingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', loadChildren: './pages/pages.module#PagesModule' },
  { path: '', loadChildren: './my-nav/my-nav.module#NavModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
