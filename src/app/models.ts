export interface DynTable {
  columns: Array<DynTableColumn>;
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
