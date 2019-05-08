import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListingComponent } from './listing/listing.component'
const routes: Routes = [
    { path: 'listing', component: ListingComponent },
    // { path: 'pages/students', component: StudentsComponent },
    // { path: 'pages/employee', component: EmployeeComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NavRoutingModule { }