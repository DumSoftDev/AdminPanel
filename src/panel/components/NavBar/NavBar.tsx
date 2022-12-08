import { useDispatch, useSelector } from 'react-redux';
import {
  ArrowBackIosNew,
  ArrowForwardIos,
  Chat,
  DarkMode,
  Language,
  Menu,
  NotificationsNone,
  WbSunny,
} from '@mui/icons-material';

import { sideBarMode, themeMode } from '../../../store/slices';

import './NavBar.scss';

export const NavBar = () => {
  const dispatch = useDispatch();

  const { theme } = useSelector((state: any) => state.theme);
  const { barShow } = useSelector((state: any) => state.sideBar);

  return (
    <div className={`navbar ${theme}`}>
      <div className="wrapper">
        <div
          className="menuControl"
          onClick={() =>
            dispatch(
              sideBarMode(`${barShow === 'show' ? 'hide' : 'show'}`),
            )
          }
        >
          {barShow === 'show' ? (
            <ArrowBackIosNew className="icon" />
          ) : (
            <ArrowForwardIos className="icon" />
          )}
        </div>

        <div className="items">
          <div
            className="item"
            onClick={() =>
              dispatch(
                themeMode(`${theme === 'light' ? 'dark' : 'light'}`),
              )
            }
          >
            {theme === 'light' ? (
              <DarkMode className="icon" />
            ) : (
              <WbSunny className="icon" />
            )}
          </div>
          <div className="item">
            <NotificationsNone className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <Chat className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <Language className="icon" />
          </div>
          <div className="item avatar">
            <img
              src="https://petapixel.com/assets/uploads/2019/02/download-4.jpeg"
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
