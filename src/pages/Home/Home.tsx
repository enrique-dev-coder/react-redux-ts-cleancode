import React, { useState } from 'react';
import { DataGrid, GridRenderCellParams } from '@mui/x-data-grid';
//para esto es el alias
import { People } from '@/data/people';
import { Person } from '@/models';
import { Checkbox } from '@mui/material';

export interface HomeInterface {}

const Home: React.FC<HomeInterface> = () => {
  const pageSize = 5;
  //cada objeto representa una de las columnas
  //porrows la tabla toma al objeto people

  //le aclaras a ts que  vas a estar trabajando en un array de personas
  const [selectedPeople, setSelectedPeople] = useState<Person[]>([]);
  //funcion para favoritos
  //cada qeu cambie la cajita lo que va a a pasar
  const handleChange = (person: Person) => {
    //recibe los paramantros de la linea

    //hace un array de ids
    const selectedPeopleIds = selectedPeople.map((people) => people.id);
    //condicion para ver que se pasa al estado, si te encuetra el id de la fila en el estado
    //entocnes que filtre , si nno que agrege
    //la condicion se decide por el resultado de el findIndex, si es mayor o igual a 0 entonces que agregue
    const condition = selectedPeopleIds.findIndex(
      (index) => index === person.id
    );

    //remover el elemento del array sin mover el original
    //filtro omitiendo el orginal
    const filterArray = selectedPeople.filter(
      (items) => items.id !== person.id
    );

    //el estado lo que le pasara
    setSelectedPeople(
      condition >= 0 ? filterArray : [person, ...selectedPeople]
    );
  };
  console.log(selectedPeople);
  const columns = [
    {
      //esta es un checkbox para darle fav a cada persona
      field: 'actions',
      type: 'actions',
      sortable: false,
      headerName: '',
      minWidth: 50,
      //pones el value de cada field, sin necesidad de maps ni nada de eso
      renderCell: (params: GridRenderCellParams) => (
        <>
          {
            <Checkbox
              size="small"
              //aqui devolvemos true o false para ver si esta checqueaod o no
              //la idea es que del estado verifique si existe ese id comparado con el id del row
              // con los !! se  pasa a boolean
              checked={
                !!selectedPeople.find((people) => people.id === params.row.id)
              }
              //Cambio en el input
              onChange={() => handleChange(params.row)}
            />
          }
        </>
      ),
    },
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
