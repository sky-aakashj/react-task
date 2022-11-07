import * as React from 'react';


import MaterialTable from "material-table";
// import MaterialTable from '@material-table/core';


export default function DetailPanelWithRowClick() {
  return (
    <MaterialTable
      columns={[
        { title: 'Name', field: 'name' },
        { title: 'Surname', field: 'surname' },
        { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
        {
          title: 'Birth Place',
          field: 'birthCity',
          lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
        },
      ]}
      data={[
        { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
        { name: 'Zerya Betül', surname: 'Baran', birthYear: 1987, birthCity: 63 },
      ]}
      title="Detail Panel With RowClick Preview"
      detailPanel={rowData => {
        return (
          <p>something</p>
        )
      }}
      onRowClick={(event, rowData, togglePanel) => togglePanel()}
    />
  )
}
