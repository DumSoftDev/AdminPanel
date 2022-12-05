import { useSelector } from 'react-redux';

import './Footer.scss';

export const Footer = () => {
  const { theme } = useSelector((state: any) => state.theme);

  return (
    <div className={`footer ${theme}`}>
      <h5>
        Copyright © 2022 - 2023 Algusal International LLC. All Rights
        Reserved.
      </h5>
      <p>Design by JMunoz, DRamirez & ALegarreta.</p>
    </div>
  );
};
