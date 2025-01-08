import { useEffect, useState } from 'react'

import { getAllItems } from 'src/redux/slices/itemsSlice';
import type { AppDispatch } from 'src/redux/store';
import { useAppDispatch, useAppSelector } from 'src/redux/hooks';

import isEmpty from 'lodash/isEmpty';

import DataTable from 'src/components/DataTable';
import { homeTableColumns } from './tableColumns';

import { Paper } from '@mui/material';
import Grid from '@mui/material/Grid2';

import PropertyBox from './PropertyBox';

export default function Home() {
  const dispatch = useAppDispatch<AppDispatch>();
  const [selectedRow, setSelectedRow] = useState({});

  const { items = [] } = useAppSelector((state) => state);

  useEffect(() => {
    if (!isEmpty(items)) return;
    dispatch(getAllItems());
  }, [dispatch, items, selectedRow]);

  return (
    <Grid
      container
      spacing={3}
      sx={{ pt: 2 }}
    >
      <Grid size={{ sm: 6, xs: 12 }}>
        <Paper>
          <DataTable
            columns={homeTableColumns}
            rows={items}
            handleRowClick={setSelectedRow}
          />
        </Paper>
      </Grid>

      <Grid
        size={{ sm: 6, xs: 12 }}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <PropertyBox itemData={selectedRow} />
      </Grid>
    </Grid>
  );
}
