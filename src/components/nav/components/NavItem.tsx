// import { useNavContext } from 'components/nav/NavContext';
import TexmoIcon from 'components/texmoIcon/TexmoIcon';
import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import { TexmoIcons } from '../../../types';
import { useTexmoContext } from 'contexts/TexmoContext';
import { useNavContext } from '../NavContext';
import classNames from 'classnames';

export interface NavItemProps extends React.HTMLProps<HTMLBaseElement> {
  route: string;
  icon: TexmoIcons;
  text: string;
}

const NavItem = ({ route, icon, text }: NavItemProps) => {
  const { open } = useNavContext();
  const { navLink: NavLink } = useTexmoContext();

  const linkClass = (isActive: boolean): string => {
    return isActive ? 'nav-link active' : 'nav-link link-dark';
  };

  return (
    <Nav.Item className="sidenav-item">
      <OverlayTrigger
        placement="right"
        overlay={!open ? <Tooltip>{text}</Tooltip> : <></>}
      >
        <NavLink
          to={route}
          className={({ isActive }) =>
            classNames(
              'd-flex align-items-center sidenav-link',
              linkClass(isActive)
            )
          }
        >
          <div className="nav-item-icon">
            <TexmoIcon icon={icon} height={28} />
          </div>

          <div
            className={classNames(
              'd-flex justify-content-start nav-item-text',
              open ? 'opened' : null
            )}
          >
            {text}
          </div>
        </NavLink>
      </OverlayTrigger>
    </Nav.Item>
  );
};

export default NavItem;
