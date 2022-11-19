import { useSelector } from 'react-redux';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import './ListTable.scss';

type Columns = {
  label: string;
};

type Rows = {
  id: number;
  product: string;
  img: string;
  customer: string;
  date: string;
  price: number;
  method: string;
  status: string;
};

const columns: Columns[] = [
  {
    label: 'Tracking #',
  },
  {
    label: 'Producto',
  },
  {
    label: 'Cliente',
  },
  {
    label: 'Fecha',
  },
  {
    label: 'Precio',
  },
  {
    label: 'Método de Pago',
  },
  {
    label: 'Estado',
  },
];

const rows: Rows[] = [
  {
    id: 145242,
    product: 'Acer Nitro 5',
    img: 'https://m.media-amazon.com/images/I/81Z8NvO2TFL._AC_SL1500_.jpg',
    customer: 'Mi abuela',
    date: '1 de Marzo',
    price: 693,
    method: 'Pago contra entrega',
    status: 'Aprovado',
  },
  {
    id: 245315,
    product: 'Playstation 5',
    img: 'https://m.media-amazon.com/images/I/61d4loPJB9L._SL1500_.jpg',
    customer: 'Mi tio',
    date: '1 de Marzo',
    price: 900,
    method: 'Pago en linea',
    status: 'Pendiente',
  },
  {
    id: 1895313,
    product: 'Media Keyboard Combo',
    img: 'https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg',
    customer: 'El Tio de mi tio',
    date: '1 de Marzo',
    price: 35,
    method: 'Pago contra entrega',
    status: 'Pendiente',
  },
  {
    id: 1247741,
    product: 'Razer Blade 15',
    img: 'https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_SL1500_.jpg',
    customer: 'Mi tio',
    date: '1 de Marzo',
    price: 920,
    method: 'Pago en linea',
    status: 'Aprovado',
  },
  {
    id: 453223531,
    product: 'Asus ROG Strix',
    img: 'https://m.media-amazon.com/images/I/811QpiYXe-L._AC_SL1500_.jpg',
    customer: 'El Gato',
    date: '1 de Marzo',
    price: 2000,
    method: 'Pago en linea',
    status: 'Pendiente',
  },
];

const ListTable = () => {
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

export default ListTable;
