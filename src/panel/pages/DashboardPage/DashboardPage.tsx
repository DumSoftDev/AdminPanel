import {
  Chart,
  Featured,
  ListTable,
  Widget,
} from '../../components';

import './DashboardPage.scss';

export const DashboardPage = () => {
  return (
    <>
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
    </>
  );
};
