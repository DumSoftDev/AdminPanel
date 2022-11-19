import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import ListPage from './pages/ListPage/ListPage';
import LoginPage from './pages/LoginPage/LoginPage';
import NewPage from './pages/NewPage/NewPage';
import SinglePage from './pages/SinglePage/SinglePage';

import './scss/components/App.scss';

function App() {
  const { theme } = useSelector((state: any) => state.theme);

  return (
    <div className={`App ${theme}`}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<HomePage />} />
            <Route path="login" element={<LoginPage />} />

            <Route path="users">
              <Route index element={<ListPage />} />
              <Route
                path=":userId"
                element={<SinglePage type="users" />}
              />
              <Route path="new" element={<NewPage />} />
            </Route>

            {/* <Route path="products">
              <Route index element={<ListPage />} />
              <Route path=":productId" element={<SinglePage />} />
              <Route path="new" element={<NewPage />} />
            </Route> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
