import { useSelector } from 'react-redux';
import {
  KeyboardArrowDown,
  KeyboardArrowUp,
} from '@mui/icons-material';
import { CircularProgressbar } from 'react-circular-progressbar';

import 'react-circular-progressbar/dist/styles.css';
import './Featured.scss';

const Featured = () => {
  const { theme } = useSelector((state: any) => state.theme);

  const value = 1500;

  const options = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  };

  const amount = Number(value).toLocaleString('en', options);

  return (
    <div className={`featured ${theme}`}>
      <div className="top">
        <h3 className="title">Comparativo Ventas</h3>
      </div>

      <div className="bottom">
        <div className="featuredCircularChart">
          <CircularProgressbar
            value={72}
            text={'72%'}
            strokeWidth={6}
          />
        </div>

        <p className="title">Acumulado Ventas del Mes</p>
        <p className="amount">
          {amount && '$ '}
          {amount}
        </p>
        <p className="description">
          Últimas ordenes procesadas.
          <br /> Pueden haber ordenes aún en proceso.
        </p>

        <div className="summary">
          <div className="item">
            <div className="title">Total Semana</div>
            <div className="itemResult negative">
              <KeyboardArrowDown fontSize="small" />
              <div className="resoultAmount">$25.3k</div>
            </div>
          </div>

          <div className="item">
            <div className="title">Total Mes</div>
            <div className="itemResult positive">
              <KeyboardArrowUp fontSize="small" />
              <div className="resoultAmount">$25.3k</div>
            </div>
          </div>

          <div className="item">
            <div className="title">Mes Anterior</div>
            <div className="itemResult negative">
              <KeyboardArrowDown fontSize="small" />
              <div className="resoultAmount">$25.3k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
