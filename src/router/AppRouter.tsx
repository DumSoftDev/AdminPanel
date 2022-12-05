import { Navigate, Route, Routes } from 'react-router-dom';
import { LoginPage } from '../auth';
import { MainPage } from '../panel/pages';

export const AppRouter = () => {
  const authStatus: string = 'authenticated'; // authenticated || not-authenticated

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
