import {
  Chat,
  DarkMode,
  FormatListBulleted,
  FullscreenExit,
  Language,
  Menu,
  NotificationsNone,
} from '@mui/icons-material';

import './NavBar.scss';

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="menuControl">
          <Menu className="icon" />
        </div>

        <div className="items">
          <div className="item">
            <DarkMode className="icon" />
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
          <div className="item">
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
