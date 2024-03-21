import React from 'react';
import { useNavContext } from '../NavContext';
import classNames from 'classnames';

const NavButton = () => {
  const { open, setOpen } = useNavContext();

  return (
    <div
      className="sidenav-button-container flex-column"
      onClick={() => setOpen(!open)}
    >
      <div className="sidenav-button-container">
        <div className={classNames('open-dummy', open ? 'opened' : null)} />

        <div
          className={classNames(
            'd-flex flex-column sidenav-button nav-item-menu-icon',
            open
              ? 'align-items-end sidenav-button-opened'
              : 'align-items-center'
          )}
        >
          <i
            className={`h-100 d-flex align-items-center bi bi-${
              open ? 'x' : 'list'
            } fs-3`}
          ></i>
        </div>
      </div>
      <div className="sidenav-button-container-divider" />
    </div>
  );
};

export default NavButton;
