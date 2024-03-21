import classNames from 'classnames';
import React, { forwardRef } from 'react';

export interface ListRowProps extends React.HTMLProps<HTMLDivElement> {
  overdue?: boolean;
}

const ListRow = forwardRef<HTMLDivElement, ListRowProps>(
  ({ className, style, overdue, children, ...rest }, ref) => {
    const childrenArray = React.Children.toArray(children);

    return (
      <div
        className={classNames(className, 'row text-center mt-2 mx-0 list-row')}
        style={{ border: overdue ? '2px solid #99444f' : 'none', ...style }}
        ref={ref}
        {...rest}
      >
        {childrenArray.map((child, index) => {
          const childElement = child as React.ReactElement;

          return React.cloneElement(childElement, {
            borderStart: index !== 0,
          });
        })}
      </div>
    );
  }
);

ListRow.displayName = 'ListRow';

export default ListRow;
