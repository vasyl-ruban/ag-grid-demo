import { Component, OnInit } from '@angular/core';
import { GridOptions, SelectionChangedEvent } from 'ag-grid-community';
import { UserService } from '../user.service';

@Component({
  selector: 'app-grid-with-selections',
  templateUrl: './grid-with-selections.component.html',
  styleUrls: ['./grid-with-selections.component.scss']
})
export class GridWithSelectionsComponent implements OnInit {

  gridOptions = new GridOptionsWithSelection();

  constructor(public userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers()
      .subscribe(users => this.gridOptions.rowData = users);
  }

}

class GridOptionsWithSelection implements GridOptions {
  rowData;
  columnDefs = [
    { checkboxSelection: true, headerCheckboxSelection: true },
    { headerName: 'id', field: 'id', sortable: true },
    { headerName: 'name', field: 'name', filter: true },
    { headerName: 'email', field: 'email' },
  ];

  rowSelection = 'multiple';
  rowMultiSelectWithClick = true;
  // row will be selected/deselected on click, not only on checking checkbox
  suppressRowClickSelection = true;

  onSelectionChanged(event: SelectionChangedEvent): void {
    const selectedItems = event.api.getSelectedNodes().map(item => item.data);

    console.log(selectedItems);
  }
}
