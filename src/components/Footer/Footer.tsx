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

import './Footer.scss';

const Footer = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className={`footer ${theme}`}>
      <h5>Copyright © 2022 - 2023 Algusal International LLC. All Rights Reserved. Algusal Int® is a registered trademark.</h5>
      <h6>Managed by Algusal Int | Hosting by AppKit | Design by JMunoz, DRamirez & ALegarreta.</h6>
    </div>
  );
};

export default Footer;
