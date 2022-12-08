import { Navigate, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { LoginPage } from '../auth';
import { MainPage } from '../panel/pages';

export const AppRouter = () => {
  const { authStatus } = useSelector((state: any) => state.login);

  return (
    <Routes>
      {authStatus === 'not-authenticated' ? (
        <Route path="/auth/*" element={<LoginPage />} />
      ) : (
        <Route path="/*" element={<MainPage />} />
      )}

      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};
