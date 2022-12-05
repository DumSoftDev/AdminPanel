import { useSelector } from 'react-redux';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

import { data } from '../../../data/components/Chart/data';

import './Chart.scss';

export const Chart = () => {
  const { theme } = useSelector((state: any) => state.theme);

  return (
    <div className={`chart ${theme}`}>
      <div className="top">
        <h3 className="title">Últimos 12 meses</h3>
      </div>
      <div className="chartContainer">
        <ResponsiveContainer width="99%" height="99%">
          <AreaChart
            data={data}
            margin={{ top: 15, bottom: 15, right: 15 }}
          >
            <defs>
              <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="rgb(71, 181, 255)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="rgb(71, 181, 255)"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="name"
              stroke={theme === 'light' ? 'grey' : '#c1c2c5'}
            />
            <YAxis stroke={theme === 'light' ? 'grey' : '#c1c2c5'} />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="total"
              stroke="rgb(71, 181, 255)"
              fillOpacity={1}
              fill="url(#total)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
