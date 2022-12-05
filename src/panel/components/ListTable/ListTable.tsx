import { useSelector } from 'react-redux';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import {
  columns,
  rows,
} from '../../../data/components/ListTable/data';

import './ListTable.scss';

export const ListTable = () => {
  const { theme } = useSelector((state: any) => state.theme);

  return (
    <div className={`dataTable ${theme}`}>
      <TableContainer className="listTable">
        <Table aria-label="table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell className="tableHead">
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => {
              return (
                <TableRow key={row.id.toString()}>
                  <TableCell className="tableCell">
                    {row.id}
                  </TableCell>
                  <TableCell className="tableCell">
                    <div className="cellWrapper">
                      <img src={row.img} alt="" className="img" />
                      {row.product}
                    </div>
                  </TableCell>
                  <TableCell className="tableCell">
                    {row.customer}
                  </TableCell>
                  <TableCell className="tableCell">
                    {row.date}
                  </TableCell>
                  <TableCell className="tableCell">
                    $ {row.price}
                  </TableCell>
                  <TableCell className="tableCell">
                    {row.method}
                  </TableCell>
                  <TableCell className="tableCell">
                    <span className={`status ${row.status}`}>
                      {row.status}
                    </span>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
