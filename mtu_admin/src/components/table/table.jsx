import React from 'react';
import { useTable, useFilters } from 'react-table';

const FilterForm = ({ column }) => {
  const { filterValue, setFilter } = column;
  return (
    <span>
      <input
        value={filterValue || ''}
        onChange={(e) => setFilter(e.target.value)}
        placeholder={`Filter ${column.Header}`}
        style={{ width: '100%' }}
      />
    </span>
  );
};

const TableExample = () => {
  const data = React.useMemo(
    () => [
      { id: 1, firstName: 'John', lastName: 'Doe', age: 28 },
      { id: 2, firstName: 'Jane', lastName: 'Doe', age: 32 },
      { id: 3, firstName: 'Bob', lastName: 'Smith', age: 45 },
      { id: 4, firstName: 'Robert', lastName: 'Dagot', age: 79 },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      { Header: 'ID', accessor: 'id', Filter: FilterForm },
      { Header: 'First Name', accessor: 'firstName', Filter: FilterForm },
      { Header: 'Last Name', accessor: 'lastName', Filter: FilterForm },
      { Header: 'Age', accessor: 'age', Filter: FilterForm },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable(
    { columns, data }, useFilters);

  return (
    <table {...getTableProps()} style={{ borderSpacing: '0', width: '100%', border: '1px solid black' }}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()} style={{ borderBottom: 'solid 3px red', background: 'aliceblue', color: 'black', fontWeight: 'bold' }}>
                <div>{column.render('Header')}</div>
                <div>{column.canFilter ? column.render('Filter') : null}</div>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => (
                <td {...cell.getCellProps()} style={{ padding: '10px', border: 'solid 1px gray', background: 'papayawhip' }}>
                  {cell.render('Cell')}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TableExample;
