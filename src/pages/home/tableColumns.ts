import type { GridColDef } from '@mui/x-data-grid';

import isArray from 'lodash/isArray';

export const homeTableColumns: GridColDef[] = [
  { field: 'guid', headerName: 'GUID', width: 70 },
  { field: 'name', headerName: 'Name', width: 200 },
  {
    field: 'path',
    headerName: 'Path',
    width: 200,
    valueGetter: (_: any, row: { path: string[]; }) => isArray(row?.path) ? row.path.join('/') : row.path,
  },
];
