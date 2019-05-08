import { NgModule } from '@angular/core';
import { PagesRoutingModule } from './pages.route';
import { EmployeeComponent } from './employee/employee.component';
import { StudentsComponent } from './students/students.component';
import { PagesComponent } from './pages.component'

@NgModule({
    declarations: [EmployeeComponent, StudentsComponent, PagesComponent],
    imports: [PagesRoutingModule],
    exports: [],
    providers: []
})
export class PagesModule { }