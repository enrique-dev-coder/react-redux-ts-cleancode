import React from 'react';
import { DataGrid, GridRenderCellParams } from '@mui/x-data-grid';
//para esto es el alias
import { People } from '@/data/people';

export interface HomeInterface {}

const Home: React.FC<HomeInterface> = () => {
  const pageSize = 5;
  //cada objeto representa una de las columnas
  //porrows la tabla toma al objeto people
  const columns = [
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      minWidth: 150,
      //pones el value de cada field, sin necesidad de maps ni nada de eso
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
    {
      field: 'category',
      headerName: 'Categories',
      flex: 1,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
    {
      field: 'company',
      headerName: 'Company',
      flex: 1,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
  ];
  return (
    <DataGrid
      rows={People}
      columns={columns}
      disableColumnSelector
      disableSelectionOnClick
      autoHeight
      pageSize={pageSize}
      rowsPerPageOptions={[pageSize]}
      // el id asociado como un key
      getRowId={(row: any) => row.id}
    />
  );
};

export default Home;
