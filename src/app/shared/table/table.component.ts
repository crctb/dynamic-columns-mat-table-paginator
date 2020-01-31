import {
  Component,
  ViewChild,
  OnInit,
  Input,
  OnChanges,
  AfterViewInit
} from "@angular/core";
import { MatTableDataSource, MatPaginator, MatSort } from "@angular/material";
import { DataSource } from '@angular/cdk/collections';
import { DynTable } from "../../models";
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.css"]
})
export class TableComponent implements OnInit, OnChanges, AfterViewInit {
  @Input() tableData: DynTable;

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  displayedColumns = null;
  dataSource = null;

  constructor() {}

  ngOnInit() {}

  ngOnChanges() {
    this.processingData();
  }

  ngAfterViewInit() {
    this.processingData();
  }

  update(columnDef: string, el: DynTable, event: any) {
    console.log(columnDef, el, event);
    if (event == null) {
      return;
    }
    // copy and mutate
    const copy = this.dataSource.data().slice();
    el[columnDef] = event;
    this.dataSource.update(copy);
    console.log(this.dataSource);
  }

  processingData() {
    this.displayedColumns = this.tableData.columns.map(c => c.columnDef);
    this.dataSource = new InitialDataSource(this.tableData.data);

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

export class InitialDataSource extends DataSource<any> {

  private dataSubject = new BehaviorSubject<Element[]>([]);

  data() {
    return this.dataSubject.value;
  }

  update(data) {
    this.dataSubject.next(data);
  }

  constructor(data: any[]) {
    super();
    this.dataSubject.next(data);
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Element[]> {
    return this.dataSubject;
  }

  disconnect() {}
}
