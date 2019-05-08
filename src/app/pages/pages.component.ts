import { Component, ViewChild } from '@angular/core';
import { EmployeeComponent } from './employee/employee.component';

@Component({
    selector: 'app-pages',
    templateUrl: './pages.component.html',
    styleUrls: ['./pages.component.scss']
})
export class PagesComponent {
    @ViewChild(EmployeeComponent) childRef

    // parentsData: string = 'Hello from parents';

    //output//
    // exampleParent: string;
    viewParent: string;

    // ParentEvent(data) {
    //     console.log(data);
    //     this.exampleParent = data
    // }

    // displayCounter(count) {
    //     console.log(count);
    // }

    ngAfterViewInit() {
        console.log("this.childRef.viewChild", this.childRef.viewChild)
        this.viewParent = this.childRef.viewChild
        console.log("this.viewParent", this.viewParent)
    }
}
