import { memo, useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import type { GridColDef, GridRowParams } from '@mui/x-data-grid';
import isEmpty from 'lodash/isEmpty';

interface rows {
  id: number;
  [key: string]: any;
}

interface DataTableProps {
  columns: GridColDef[];
  rows: rows[];
  handleRowClick?: (row: GridRowParams['row']) => void;
  id?: number;
}

const DataTable = ({
  columns,
  rows,
  handleRowClick,
}: DataTableProps) => {
  const [rowData, setRowData] = useState<rows[]>([]);

  useEffect(() => {
    if (isEmpty(rows)) return;

    console.log(rows[0])

    if (!rows[0]?.id) {
      const rowWithId = rows?.map((data: any, index: number) => ({
        ...data,
        id: index,
      }));
      setRowData(rowWithId || []);
    } else {
      setRowData(rows);
    }

  }, [rows])

  return (
    <DataGrid
      rows={rowData}
      columns={columns}
      onRowClick={(param) => handleRowClick && handleRowClick(param?.row)}
    />
  )
}

export default memo(DataTable)