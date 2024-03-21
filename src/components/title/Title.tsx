import classNames from 'classnames';
import React from 'react';

export interface TitleProps extends React.HTMLProps<HTMLHeadingElement> {
  text: string;
}

const Title = ({ text, className, ...rest }: TitleProps) => {
  return (
    <h1 className={classNames(className, 'text-nowrap mb-0 title')} {...rest}>
      {text}
    </h1>
  );
};

export default Title;
