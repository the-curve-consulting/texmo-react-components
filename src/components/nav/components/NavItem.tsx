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

  return (
    <Nav.Item className="sidenav-item">
      <OverlayTrigger
        placement="right"
        overlay={!open ? <Tooltip>{text}</Tooltip> : <></>}
      >
        <NavLink
          to={route}
          className={() => 'd-flex align-items-center sidenav-link nav-link'}
        >
          <div className="d-flex justify-content-center nav-item-icon">
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
