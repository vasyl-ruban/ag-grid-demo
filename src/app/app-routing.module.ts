import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseGridComponent } from './base-grid/base-grid.component';
import {InfiniteScrollComponent} from './infinite-scroll/infinite-scroll.component';
import { GridWithSelectionsComponent } from './grid-with-selections/grid-with-selections.component';
import { GridFiltersComponent } from './grid-filters/grid-filters.component';

const routes: Routes = [
  { path: 'base-grid', component: BaseGridComponent },
  { path: 'infinite-scroll', component: InfiniteScrollComponent },
  { path: 'grid-with-selection', component: GridWithSelectionsComponent },
  { path: 'grid-filters', component: GridFiltersComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
