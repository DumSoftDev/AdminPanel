import { useSelector } from 'react-redux';

import EditIcon from '@mui/icons-material/Edit';

import {
  NavBar,
  Orders,
  Products,
  SideBar,
  Users,
} from '../../components';

import './SinglePage.scss';

type Props = {
  type: string;
};

type Data = {
  title: string;
  button: string;
  page: any;
};

const SinglePage = ({ type }: Props) => {
  const { theme } = useSelector((state: any) => state.theme);

  let data!: Data;

  switch (type) {
    case 'users':
      data = {
        title: 'Perfil de Usuario',
        button: 'Usuario',
        page: <Users />,
      };
      break;

    case 'products':
      data = {
        title: 'Detalle del Producto',
        button: 'Producto',
        page: <Products />,
      };
      break;

    case 'orders':
      data = {
        title: 'Detalle de la orden',
        button: 'Orden',
        page: <Orders />,
      };
      break;

    default:
      break;
  }

  return (
    <div className={`singlePage ${theme}`}>
      <SideBar />

      <div className="singleContainer">
        <NavBar />

        <div className="editItem">
          <h1 className="title">{data.title}</h1>
          <div className="editButton">
            <EditIcon className="icon" />
            <span>{`Editar ${data.button}`}</span>
          </div>
        </div>

        <div className="dataContainer">{data.page}</div>
      </div>
    </div>
  );
};

export default SinglePage;
