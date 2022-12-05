import { useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './router';

export const AdminPanel = () => {
  const { theme } = useSelector((state: any) => state.theme);

  return (
    <div className={`AdminPanel ${theme}`}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </div>
  );
};
