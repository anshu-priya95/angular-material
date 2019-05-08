import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  @Output() childEventData = new EventEmitter()
  exampleChild: string = 'Hello From Students';

  @Input() sharedData: string
  childData: string = "my own child data";

  emitFunction() {
    this.childEventData.emit(this.exampleChild)
  }



  constructor() { }

  ngOnInit() {
  }



}
