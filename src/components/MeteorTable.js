import ReactTable from 'react-table';
import 'react-table/react-table.css';

import React from 'react';

function MeteorTable({ meteors }) {
  console.log('In Meteor Table');
  console.log({ meteors });
  return (
    <div style={{ padding: '50px' }}>
      <ReactTable
        key={meteors.id}
        data={meteors}
        columns={[
          {
            Header: 'Id',
            accessor: 'id',
            headerStyle: { whiteSpace: 'unset' },
            style: { whiteSpace: 'unset' },
            maxWidth: 100
          },
          {
            Header: 'Name',
            accessor: 'name',
            headerStyle: { whiteSpace: 'unset' },
            style: { whiteSpace: 'unset' }
          },
          {
            Header: 'Mass (kg)',
            accessor: 'mass',
            headerStyle: { whiteSpace: 'unset' },
            style: { whiteSpace: 'unset' }
          },
          {
            Header: 'Year',
            accessor: 'year',
            headerStyle: { whiteSpace: 'unset' },
            style: { whiteSpace: 'unset' },
            maxWidth: 150
          },
          {
            Header: 'Fall',
            accessor: 'fall',
            headerStyle: { whiteSpace: 'unset' },
            style: { whiteSpace: 'unset' },
            maxWidth: 150
          },
          {
            Header: 'Latitude',
            accessor: 'reclat',
            headerStyle: { whiteSpace: 'unset' },
            style: { whiteSpace: 'unset' },
            maxWidth: 150
          },
          {
            Header: 'Longitude',
            accessor: 'reclong',
            headerStyle: { whiteSpace: 'unset' },
            style: { whiteSpace: 'unset' },
            maxWidth: 150
          }
        ]}
        pages={100}
        minRows={0}
        defaultPageSize={10}
        showPagination={true}
      />
    </div>
  );
}

export default MeteorTable;
