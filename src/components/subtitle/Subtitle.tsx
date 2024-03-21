import classNames from 'classnames';
import React from 'react';

export interface SubTitleProps extends React.HTMLProps<HTMLDivElement> {
  text: string;
}

const Subtitle = ({ className, text, ...rest }: SubTitleProps) => {
  return (
    <div className={classNames(className, 'text-nowrap')} {...rest}>
      {text}
    </div>
  );
};

export default Subtitle;
