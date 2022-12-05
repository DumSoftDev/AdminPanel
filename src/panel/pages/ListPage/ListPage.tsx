import React from 'react';
import './ListPage.scss';

import AddIcon from '@mui/icons-material/Add';

import { DataTable, NavBar, SideBar } from '../../components';

const ListPage = () => {
  return (
    <div className="listPage">
      <SideBar />

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
      </div>
    </div>
  );
};

export default ListPage;
