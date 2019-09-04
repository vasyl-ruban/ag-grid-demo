import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseGridComponent } from './base-grid/base-grid.component';
import { InfiniteScrollComponent } from './infinite-scroll/infinite-scroll.component';
import { AgGridModule } from 'ag-grid-angular';
// WARNING: enterprise version is used only for educational purpose.
import 'ag-grid-enterprise';
import { GridWithSelectionsComponent } from './grid-with-selections/grid-with-selections.component';
import { GridFiltersComponent } from './grid-filters/grid-filters.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseGridComponent,
    InfiniteScrollComponent,
    GridWithSelectionsComponent,
    GridFiltersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
