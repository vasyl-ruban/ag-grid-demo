import { Component, OnInit } from '@angular/core';
import { GridOptions } from 'ag-grid-community';
import { UserService } from '../user.service';

@Component({
  selector: 'app-grid-filters',
  templateUrl: './grid-filters.component.html',
  styleUrls: ['./grid-filters.component.scss']
})
export class GridFiltersComponent implements OnInit {

  gridOptions = new FilterGridOptions();

  constructor() { }

  ngOnInit() {
  }

}

class FilterGridOptions implements GridOptions {
  rowData;
  defaultColDef = {
    filter: true,
    filterParams: {
      applyButton: true,
      clearButton: true
    }
  };
  columnDefs = [
    { headerName: 'ID', field: 'id', filter: 'agNumberColumnFilter' },
    { headerName: 'Name', field: 'name', filter: 'agTextColumnFilter' },
    { headerName: 'Email', field: 'email', filter: 'agTextColumnFilter' },
    { headerName: 'Birth date', field: 'birthDate', filter: 'agDateColumnFilter'}
  ];
  sideBar = 'filters';

  rowModelType = 'infinite';
  datasource = new UserService();
}
