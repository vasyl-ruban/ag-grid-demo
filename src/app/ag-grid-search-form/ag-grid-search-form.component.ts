import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { AgGridAngular } from 'ag-grid-angular';
import { FormArray, FormBuilder } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

enum FilterTypeEnum {
  Text = 'agTextColumnFilter',
  Number = 'agNumberColumnFilter',
  Date = 'agDateColumnFilter',
  Set = 'agSetColumnFilter'
}

enum TextFilterEnum {
  Contains = 'textContains',
  Equal = 'textEqual',
  StartWith = 'textStartWith',
  EndWith = 'textEndWith'
}

enum DateFilterEnum {
  Equal = 'dateEqual',
  Grater = 'dateGrater',
  Less = 'dateLess',
  Range = 'dateRange'
}

enum NumberFilterEnum {
  Equal = 'numberEqual',
  Grater = 'numberGrater',
  Less = 'numberLess',
  Range = 'numberRange'
}

enum SetFilterEnum {
  InSet = 'setInSet',
  NotInSet = 'setNotInSet'
}

@Component({
  selector: 'app-ag-grid-search-form',
  templateUrl: './ag-grid-search-form.component.html',
  styleUrls: ['./ag-grid-search-form.component.scss']
})
export class AgGridSearchFormComponent implements OnInit {

  @Input() table: AgGridAngular;
  @Output() onSubmit: EventEmitter<any> = new EventEmitter();

  textFilterEnum = TextFilterEnum;
  numberFilterEnum = NumberFilterEnum;
  dateFilterEnum = DateFilterEnum;
  setFilterEnum = SetFilterEnum;

  availableFieldValues$: Observable<any[]> = of([]);

  searchForm: FormArray;
  tableColSelectOptions: { value: any, label: string }[] = [];
  availableFilter = {
    [FilterTypeEnum.Text]: Object.keys(TextFilterEnum).map((item) => ({ value: TextFilterEnum[item], label: TextFilterEnum[item] })),
    [FilterTypeEnum.Number]: Object.keys(NumberFilterEnum).map((item) => ({ value: NumberFilterEnum[item], label: NumberFilterEnum[item] })),
    [FilterTypeEnum.Date]: Object.keys(DateFilterEnum).map((item) => ({ value: DateFilterEnum[item], label: DateFilterEnum[item] })),
    [FilterTypeEnum.Set]: Object.keys(SetFilterEnum).map((item) => ({ value: SetFilterEnum[item], label: SetFilterEnum[item] }))
  };

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.table.onGridReady = this.onGridReady.bind(this);
  }

  onGridReady() {
    this.searchForm = this.fb.array([ this.createFilterGroup() ]);
    this.tableColSelectOptions = this.table.gridOptions.columnDefs.map((col: ColDef) => ({
      value: col,
      label: col.headerName
    }));

    this.availableFieldValues$ = this.searchForm.valueChanges.pipe(
      startWith([]),
      map((controls) => {
        const currentlySelectedFields = controls.map((control) => control.field.field);
        return this.tableColSelectOptions.filter((fieldOption) => !currentlySelectedFields.includes(fieldOption.value.field));
      }),
    );
  }

  createFilterGroup() {
    return this.fb.group({
      field: this.fb.control(''),
      filterType: this.fb.control(''),
      value: this.fb.control(''),
      value2: this.fb.control('')
    });
  }

  addItem() {
    this.searchForm.push(this.createFilterGroup());
  }

  removeItem(index) {
    this.searchForm.removeAt(index);
  }

  submit() {
    console.log(this.searchForm.getRawValue());
  }

}
