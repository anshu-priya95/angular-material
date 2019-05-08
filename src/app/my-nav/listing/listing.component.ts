import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../services/dataService';
import { MatPaginator, MatSort, MatTableDataSource, PageEvent, Sort } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';
import { of as observableOf, merge } from 'rxjs';
import { catchError, startWith, map, switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {
  data: any;
  sortType: string;
  sortBy: string;
  isLoadingResults = true;
  isRateLimitReached = false;
  constructor(public dataService: DataService) { }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource = new MatTableDataSource();
  ngOnInit() {
    this.isLoadingResults = true;

    this.dataService.getConfig()
      .subscribe(data => {
        // this.data = data;
        this.dataSource.data = data
        this.dataSource.sort = this.sort;
        // this.dataSource.paginator = this.paginator;
        console.log(data);
      })
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  changePage(event: PageEvent) {
    this.paginator.pageIndex = event.pageIndex;
  }
  displayedColumns = ['id', 'name', 'email',];

  sortData(sort: Sort) {
    this.sortBy = sort.active;
    this.sortType = sort.direction;
  }
  OnInitFunctions() {

    this.dataSource.sortingDataAccessor = (data, sortHeaderId) => data[sortHeaderId].toLocaleLowerCase();
    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          return this.dataService.getConfig();
        }),
        map(res => {
          console.log(res);
          this.isLoadingResults = false;
          this.isRateLimitReached = false;
          // if (res.data && res.data.total) {
          //   this.resultsLength = res.data.total;
          // }
          // else {
          //   this.resultsLength = 0;
          // }
          if (res.data && res.data.vendor) {
            return res.data.vendor;
          }
          else return [];
        }),
        catchError(() => {
          this.isLoadingResults = false;
          // Catch if the GitHub API has reached its rate limit. Return empty data.
          this.isRateLimitReached = true;
          return observableOf([]);
        })
      ).subscribe(data => {
        this.dataSource.data = data;
        console.log("this.dataSource.data", this.dataSource.data);
      });
  }

}
