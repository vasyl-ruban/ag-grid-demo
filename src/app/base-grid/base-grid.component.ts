import { Component, OnInit } from '@angular/core';
import { GridOptions, SelectionChangedEvent } from 'ag-grid-community';
import { UserService } from '../user.service';

@Component({
  selector: 'app-base-grid',
  templateUrl: './base-grid.component.html',
  styleUrls: ['./base-grid.component.scss']
})
export class BaseGridComponent implements OnInit {

  gridOptions = new BaseGridOptions();

  constructor(public userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers()
      .subscribe(users => this.gridOptions.rowData = users);
  }

}

class BaseGridOptions implements GridOptions {
  rowData;
  defaultColDef = {
    filter: false
  };
  columnDefs = [
    { headerName: 'id', field: 'id', sortable: true },
    { headerName: 'name', field: 'name', filter: true },
    { headerName: 'email', field: 'email'},
  ];

  // will add new row to the table with filter input
  floatingFilter = true;
}







