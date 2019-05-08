import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  @Output() valueChanged = new EventEmitter
  ChildValue = 'I am cliked in child'
  viewChild = "Using View child";


  constructor() { }
  ngOnInit() {
    this.mapping();
  }
  handleclick() {
    this.valueChanged.emit(this.ChildValue)
    // console.log('hey I am  clicked in child');
  }
  mapping() {
    var array = [4, 5, 6, 7]
    var array2 = [4, 6, 9, 2];
    var newArray = [];

    var ans = array.map(x => {
      return x * 5
    })

    var filterData = array2.filter(x => {
      if (array.indexOf(x) == -1) {
        newArray.push(x);
      }
    })
    console.log("newArray", newArray);
  }



}
