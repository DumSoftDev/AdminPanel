import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

import Chart from '../../components/Chart/Chart';
import Featured from '../../components/Featured/Featured';
import NavBar from '../../components/NavBar/NavBar';
import SideBar from '../../components/SideBar/SideBard';
import ListTable from '../../components/ListTable/ListTable';
import Widget from '../../components/Widget/Widget';

import './HomePage.scss';
import Footer from '../../components/Footer/Footer';

const HomePage = () => {
  const { theme } = useContext(ThemeContext);

  const sideMenu = "";
  
  return (
    <div className={`main ${ sideMenu } ${theme} `}>
      <div className="sideContainer" >
        <SideBar />
      </div>

      <div className="mainContainer" >
        <div className="navContainer">
          <NavBar />
        </div>

        <div className="content">
          <div className="widgets">
            <Widget type="users" value="100" />
            <Widget type="orders" value="1500" />
            <Widget type="leads" value="2135" />
            <Widget type="sales" value="10" />
          </div>

          <div className="charts">
            <Featured />
            <Chart />
          </div>

          <div className="tableContainer">
            <div className="table">
              <div className="tableTitle">Últimas Transacciones</div>
              <ListTable />
            </div>
          </div>
          <div className="footer">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
