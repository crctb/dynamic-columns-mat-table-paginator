export interface DynTable {
  columns: DynTableColumn;
  data: Array<DynTableData>;
}

interface DynTableColumn {
  columnDef: string;
  header: string;
  cell: any;
}

interface DynTableData {
  name: string;
  value: string | number;
}