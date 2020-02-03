import {
  Component,
  ViewChild,
  OnInit,
  Input,
  OnChanges,
  AfterViewInit
} from "@angular/core";
import {
  MatTableDataSource,
  MatPaginator,
  MatSort,
  MatTable
} from "@angular/material";
import { DataSource } from "@angular/cdk/collections";
import { DynTable } from "../../models";
import { BehaviorSubject, Observable } from "rxjs";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.css"]
})
export class TableComponent implements OnInit, OnChanges, AfterViewInit {
  @Input() tableData: DynTable;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatTable, { static: true }) matTable: MatTable<any>;

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

  addRow() {
    this.dataSource.push({name: 'pommes'});
    this.matTable.renderRows();
  }

  update(columnDef: string, el: DynTable, event: any) {
    // copy and mutate
    const copy = this.dataSource.data.slice();
    el[columnDef] = event;
  }

  processingData() {
    this.displayedColumns = this.tableData.columns.map(c => c.columnDef);
    this.dataSource = new MatTableDataSource(this.tableData.data);

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
   
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}