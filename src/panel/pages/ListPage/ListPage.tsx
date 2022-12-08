import AddIcon from '@mui/icons-material/Add';

import { DataTable, NavBar, SideBar } from '../../components';

import './ListPage.scss';

type Props = {
  type: string;
};

export const ListPage = ({ type }: Props) => {
  return (
    <div className="listPage">
      <h1>{`List Page - ${type}`}</h1>
      {/* <SideBar />

      <div className="listContainer">
        <NavBar />

        <div className="newItem">
          <h1 className="title">Usuarios</h1>
          <div className="newButton">
            <AddIcon className="icon" />
            <span>Nuevo Usuario</span>
          </div>
        </div>

        <div className="listDataTableContainer">
          <DataTable />
        </div>
      </div> */}
    </div>
  );
};
