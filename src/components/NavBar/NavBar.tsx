import React, { useContext } from 'react';
import {
  Chat,
  DarkMode,
  FormatListBulleted,
  FullscreenExit,
  Language,
  Menu,
  NotificationsNone,
  WbSunny,
} from '@mui/icons-material';
import { ThemeContext } from '../../context/ThemeContext';

import './NavBar.scss';

const NavBar = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className={`navbar ${theme}`}>
      <div className="wrapper">
        <div className="menuControl">
          <Menu className="icon hover" />
        </div>

        <div className="items">
          <div
            className="item"
            onClick={() =>
              setTheme(theme === 'light' ? 'dark' : 'light')
            }
          >
            {theme === 'light' ? (
              <DarkMode className="icon" />
            ) : (
              <WbSunny className="icon" />
            )}
          </div>
          <div className="item">
            <FullscreenExit className="icon" />
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
            <FormatListBulleted className="icon" />
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

export default NavBar;
