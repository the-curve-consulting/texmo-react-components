import NavContext from 'components/nav/NavContext';
import TexmoIcon from 'components/texmoIcon/TexmoIcon';
import React, { useContext } from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import { TexmoIcons } from '../../../types';

export interface NavItemProps extends React.HTMLProps<HTMLBaseElement> {
  route: string;
  icon: TexmoIcons;
  text: string;
}

const NavItem = ({ route, icon, text }: NavItemProps) => {
  const { navLink, open } = useContext(NavContext);
  const NavLink = navLink;

  const linkClass = (isActive: boolean): string => {
    return isActive ? 'nav-link active' : 'nav-link link-dark';
  };

  return (
    <Nav.Item className="w-100 sidenav-item">
      <OverlayTrigger
        placement="right"
        trigger="hover"
        overlay={!open ? <Tooltip>{text}</Tooltip> : <></>}
      >
        <NavLink
          to={route}
          className={({ isActive }) =>
            `${linkClass(
              isActive
            )} align-items-center sidenav-link open-container ${
              open ? 'open-container-opened' : ''
            }`
          }
        >
          <div
            className={`d-flex ${open ? 'pe-3' : ''}`}
            style={{ width: open ? '75px' : 'auto' }}
          >
            <TexmoIcon icon={icon} height={40} />
          </div>

          <div className={`open-dummy opened ${open ? 'w-auto' : 'closed'}`}>
            <div
              className={`d-flex justify-content-start nav-item-text ${
                open ? 'opened' : ''
              }`}
            >
              {text}
            </div>
          </div>
        </NavLink>
      </OverlayTrigger>
    </Nav.Item>
  );
};

export default NavItem;
