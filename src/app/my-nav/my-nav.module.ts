import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';

import { ListingComponent } from './listing/listing.component'
import { NavRoutingModule } from './my-nav.routing';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { MatTableModule, MatPaginatorModule, MatSortModule, MatFormFieldModule, MatInputModule } from '@angular/material';
@NgModule({
    declarations: [ListingComponent],
    imports: [CommonModule, NavRoutingModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatSortModule,
        MatTableModule, MatPaginatorModule,
        MatFormFieldModule,
        MatInputModule],
    exports: [],
    providers: []
})
export class NavModule { }