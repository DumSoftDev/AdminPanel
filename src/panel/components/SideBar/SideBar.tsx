import { useSelector, useDispatch } from 'react-redux';

import { barSelect, setLogin } from '../../../store/slices';

import { links } from '../../../data/dataTableSource';

import './SideBar.scss';

export const SideBar = () => {
  const dispatch = useDispatch();

  const { theme } = useSelector((state: any) => state.theme);
  const { barShow } = useSelector((state: any) => state.sideBar);
  const { componentSelect } = useSelector(
    (state: any) => state.sideBarSelect,
  );

  return (
    <div className={`sidebar ${barShow} ${theme}`}>
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
                  onClick={
                    link.name === 'Logout'
                      ? () => dispatch(setLogin('not-authenticated'))
                      : () => dispatch(barSelect(link.name))
                  }
                  className={`${
                    componentSelect === link.name ? 'select' : ''
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
