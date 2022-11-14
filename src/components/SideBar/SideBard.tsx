import React from 'react';

import { useState } from 'react';
import { links } from '../../dataTableSource';
import './SideBar.scss';

const SideBard = () => {
  const [selected, setSelected] = useState('Dashboard');

  const handledSelected = (item: string) => {
    setSelected(item);
    console.log(item);
  };

  return (
    <div className="sidebar">
      <div className="logo">
        <span>Pida Express</span>
      </div>

      <div className="center">
        <ul>
          {links.map((item) => (
            <div key={item.title}>
              <p className="title">{item.title}</p>

              {item.links.map((link) => (
                <li
                  key={link.name}
                  onClick={() => handledSelected(link.name)}
                  className={`${
                    selected === link.name ? 'select' : ''
                  }`}
                >
                  <div className="icon">
                    {link.icon}
                    <span>{link.name}</span>
                  </div>
                </li>
              ))}
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBard;
