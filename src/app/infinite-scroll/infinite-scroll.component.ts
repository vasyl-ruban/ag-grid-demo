import { Component, OnInit } from '@angular/core';
import { GridOptions } from 'ag-grid-community';
import { UserService } from '../user.service';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.component.html',
  styleUrls: ['./infinite-scroll.component.scss']
})
export class InfiniteScrollComponent implements OnInit {

  gridOptions = new InfiniteScrollGridOptions();

  constructor() {}

  ngOnInit() {
  }

}

class InfiniteScrollGridOptions implements GridOptions {
  rowData;
  columnDefs = [
    { headerName: 'id', field: 'id', sortable: true },
    { headerName: 'name', field: 'name', filter: true },
    { headerName: 'email', field: 'email'},
  ];

  rowModelType = 'infinite';
  datasource = new UserService();
}
