import classNames from 'classnames';
import React from 'react';
import { Button, ButtonProps } from 'react-bootstrap';
export interface TabButtonProps extends ButtonProps {
  text: string;
  selected?: boolean;
}
const TabButton = ({
  className,
  selected = false,
  text,
  ...rest
}: TabButtonProps) => {
  return (
    <Button
      className={classNames(className, 'gray-text rounded-0 py-2 px-3')}
      variant={selected ? 'dark-secondary' : 'secondary'}
      {...rest}
    >
      {text}
    </Button>
  );
};
export default TabButton;
