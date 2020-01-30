import {
  Component,
  ViewChild,
  OnInit,
  Input,
  OnChanges,
  AfterViewInit
} from "@angular/core";
import { MatTableDataSource, MatPaginator, MatSort } from "@angular/material";
import { DynTable } from "../../models";

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

  processingData() {
    this.displayedColumns = this.tableData.columns.map(c => c.columnDef);
    this.dataSource = new MatTableDataSource<any>(this.tableData.data);

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
