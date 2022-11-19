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

import './Chart.scss';

const data = [
  { name: 'Ene', total: 15520 },
  { name: 'Feb', total: 20215 },
  { name: 'Mar', total: 13520 },
  { name: 'Abr', total: 11150 },
  { name: 'May', total: 20354 },
  { name: 'Jun', total: 21240 },
  { name: 'Jul', total: 17810 },
  { name: 'Ago', total: 23241 },
  { name: 'Sep', total: 18345 },
  { name: 'Oct', total: 14351 },
  { name: 'Nov', total: 25420 },
  { name: 'Dic', total: 26180 },
];

const Chart = () => {
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

export default Chart;
