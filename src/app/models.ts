export interface DynTable {
  columns: TableColumn;
  data: Array<TableData>;
}

interface TableColumn {
  columnDef: string;
  header: string;
  cell: any;
}

interface TableData {
  name: string;
  value: string | number;
}