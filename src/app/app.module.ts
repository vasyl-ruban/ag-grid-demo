import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseGridComponent } from './base-grid/base-grid.component';
import { InfiniteScrollComponent } from './infinite-scroll/infinite-scroll.component';
import { AgGridModule } from 'ag-grid-angular';
// WARNING: enterprise version is used only for educational purpose.
// import 'ag-grid-enterprise';
import { GridWithSelectionsComponent } from './grid-with-selections/grid-with-selections.component';
import { GridFiltersComponent } from './grid-filters/grid-filters.component';
import { AgGridSearchFormComponent } from './ag-grid-search-form/ag-grid-search-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    BaseGridComponent,
    InfiniteScrollComponent,
    GridWithSelectionsComponent,
    GridFiltersComponent,
    AgGridSearchFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([]),
    BrowserAnimationsModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [ MatDatepickerModule ],
  bootstrap: [AppComponent]
})
export class AppModule { }
