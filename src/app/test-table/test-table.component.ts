import { Component, OnInit } from "@angular/core";
import { DynTable } from "./models";

@Component({
  selector: "app-test-table",
  templateUrl: "./test-table.component.html",
  styleUrls: ["./test-table.component.css"]
})
export class TestTableComponent implements OnInit {

  tableData: DynTable;

  constructor() {}

  ngOnInit() {
    this.loadDataOne();
  }

  loadDataOne() {
    this.tableData = {
      columns: [
        {
          columnDef: "name",
          header: "Name",
          cell: (element: any) => `${element.name}`
        },
        {
          columnDef: "weight",
          header: "Weight",
          cell: (element: any) => `${element.weight}`
        },
        {
          columnDef: "symbol",
          header: "Symbol",
          cell: (element: any) => `${element.symbol}`
        }
      ],
      data: [
        { name: "Hydrogen", weight: 1.0079, symbol: "H" },
        { name: "Helium", weight: 4.0026, symbol: "He" },
        { name: "Lithium", weight: 6.941, symbol: "Li" },
        { name: "Beryllium", weight: 9.0122, symbol: "Be" },
        { name: "Boron", weight: 10.811, symbol: "B" },
        { name: "Carbon", weight: 12.0107, symbol: "C" },
        { name: "Nitrogen", weight: 14.0067, symbol: "N" },
        { name: "Oxygen", weight: 15.9994, symbol: "O" },
        { name: "Fluorine", weight: 18.9984, symbol: "F" },
        { name: "Neon", weight: 20.1797, symbol: "Ne" },
        { name: "Sodium", weight: 22.9897, symbol: "Na" },
        { name: "Magnesium", weight: 24.305, symbol: "Mg" },
        { name: "Aluminum", weight: 26.9815, symbol: "Al" },
        { name: "Silicon", weight: 28.0855, symbol: "Si" },
        { name: "Phosphorus", weight: 30.9738, symbol: "P" },
        { name: "Sulfur", weight: 32.065, symbol: "S" },
        { name: "Chlorine", weight: 35.453, symbol: "Cl" },
        { name: "Argon", weight: 39.948, symbol: "Ar" },
        { name: "Potassium", weight: 39.0983, symbol: "K" },
        { name: "Calcium", weight: 40.078, symbol: "Ca" }
      ]
    };
  }

  loadDataTwo() {
    this.tableData = {
      columns: [
        {
          columnDef: "position",
          header: "No.",
          cell: (element: any) => `${element.position}`
        },
        {
          columnDef: "name",
          header: "Name",
          cell: (element: any) => `${element.name}`
        },
        {
          columnDef: "weight",
          header: "Weight",
          cell: (element: any) => `${element.weight}`
        },
        {
          columnDef: "symbol",
          header: "Symbol",
          cell: (element: any) => `${element.symbol}`
        }
      ],
      data: [
        { position: 1, name: "Hydrogen", weight: 1.0079, symbol: "H" },
        { position: 2, name: "Helium", weight: 4.0026, symbol: "He" },
        { position: 3, name: "Lithium", weight: 6.941, symbol: "Li" },
        { position: 4, name: "Beryllium", weight: 9.0122, symbol: "Be" },
        { position: 5, name: "Boron", weight: 10.811, symbol: "B" },
        { position: 6, name: "Carbon", weight: 12.0107, symbol: "C" },
        { position: 7, name: "Nitrogen", weight: 14.0067, symbol: "N" },
        { position: 8, name: "Oxygen", weight: 15.9994, symbol: "O" },
        { position: 9, name: "Fluorine", weight: 18.9984, symbol: "F" },
        { position: 10, name: "Neon", weight: 20.1797, symbol: "Ne" },
        { position: 11, name: "Sodium", weight: 22.9897, symbol: "Na" },
        { position: 12, name: "Magnesium", weight: 24.305, symbol: "Mg" },
        { position: 13, name: "Aluminum", weight: 26.9815, symbol: "Al" },
        { position: 14, name: "Silicon", weight: 28.0855, symbol: "Si" },
        { position: 15, name: "Phosphorus", weight: 30.9738, symbol: "P" },
        { position: 16, name: "Sulfur", weight: 32.065, symbol: "S" },
        { position: 17, name: "Chlorine", weight: 35.453, symbol: "Cl" },
        { position: 18, name: "Argon", weight: 39.948, symbol: "Ar" },
        { position: 19, name: "Potassium", weight: 39.0983, symbol: "K" },
        { position: 20, name: "Calcium", weight: 40.078, symbol: "Ca" }
      ]
    };
  }
}
