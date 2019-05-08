import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { StudentsComponent } from './students/students.component';
import { PagesComponent } from './pages.component'
const routes: Routes = [
    { path: 'pages', component: PagesComponent },
    { path: 'pages/students', component: StudentsComponent },
    { path: 'pages/employee', component: EmployeeComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }