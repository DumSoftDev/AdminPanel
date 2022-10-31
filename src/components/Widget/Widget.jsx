import {
  AttachMoney,
  KeyboardArrowUp,
  PeopleAlt,
  RocketLaunch,
  TrendingUp,
} from '@mui/icons-material';

import './Widget.scss';

const Widget = ({ type, value }) => {
  let data;
  let amount;

  const diff = 3;

  const options = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  };

  type === 'sales'
    ? (amount = Number(value).toLocaleString('en', options))
    : (amount = value);

  switch (type) {
    case 'users':
      data = {
        title: 'Agentes Disponibles',
        isMoney: false,
        icon: <PeopleAlt className={`icon__widget ${type}`} />,
      };
      break;

    case 'orders':
      data = {
        title: 'Total de Ordenes',
        isMoney: false,
        icon: <TrendingUp className={`icon__widget ${type}`} />,
      };
      break;

    case 'sales':
      data = {
        title: 'Total Ventas del Día',
        isMoney: true,
        icon: <AttachMoney className={`icon__widget ${type}`} />,
      };
      break;

    case 'leads':
      data = {
        title: 'Total de Leads',
        isMoney: false,
        icon: <RocketLaunch className={`icon__widget ${type}`} />,
      };
      break;

    default:
      break;
  }

  return (
    <div className="widget">
      <div className="box__widget">
        <div className="left">
          <span className="title">{data.title}</span>
          <span className="counter">
            {data.isMoney && '$ '}
            {amount}
          </span>
          <div className="percentage positive">
            <KeyboardArrowUp className={`icon ${type}`} />
            <p className="percentageText">
              <span className={`percentageValue ${type}`}>
                {`${diff}%  `}
              </span>
              mes anterior
            </p>
          </div>
        </div>
        <div className="right">{data.icon}</div>
      </div>
    </div>
  );
};

export default Widget;
