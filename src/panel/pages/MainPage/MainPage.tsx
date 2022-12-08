import { useSelector } from 'react-redux';

import {
  // Chart,
  // Featured,
  Footer,
  NavBar,
  SideBar,
  // ListTable,
  // Widget,
} from '../../components';
import { DashboardPage } from '../DashboardPage/DashboardPage';
import { ListPage } from '../ListPage/ListPage';

import './MainPage.scss';

export const MainPage = () => {
  const { theme } = useSelector((state: any) => state.theme);
  const { barShow } = useSelector((state: any) => state.sideBar);
  const { componentSelect } = useSelector(
    (state: any) => state.sideBarSelect,
  );

  let render: any;

  switch (componentSelect) {
    case 'Dashboard':
      render = <DashboardPage />;
      break;

    case 'Orders':
      render = <ListPage type="Orders" />;
      break;

    case 'Customers':
      render = <ListPage type="Customers" />;
      break;

    case 'Restaurants':
      render = <ListPage type="Restaurants" />;
      break;

    case 'Menus':
      render = <ListPage type="Menus" />;
      break;

    case 'Deliveries':
      render = <ListPage type="Deliveries" />;
      break;

    case 'Drivers':
      render = <ListPage type="Drivers" />;
      break;

    case 'Affiliates':
      render = <ListPage type="Affiliates" />;
      break;

    case 'Employees':
      render = <ListPage type="Employees" />;
      break;

    case 'Reports':
      render = <ListPage type="Reports" />;
      break;

    case 'Users':
      render = <ListPage type="Users" />;
      break;

    case 'Roles':
      render = <ListPage type="Roles" />;
      break;

    case 'Logs':
      render = <ListPage type="Logs" />;
      break;

    default:
      render = <DashboardPage />;
      break;
  }

  return (
    <div className={`main ${barShow} ${theme} `}>
      <div className="sideContainer">
        <SideBar />
      </div>

      <div className="mainContainer">
        <div className="navContainer">
          <NavBar />
        </div>

        <div className="content">{render}</div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </div>
  );
};
