import React, { forwardRef } from 'react';

export interface ListRowProps extends React.HTMLProps<HTMLDivElement> {
  overdue?: boolean;
}

const ListRow = forwardRef<HTMLDivElement, ListRowProps>(
  ({ className, style, overdue, children, ...rest }, ref) => {
    const childrenArray = React.Children.toArray(children);

    return (
      <div
        className={`${className} row text-center mt-3 mx-0 list-row ${
          overdue ?? 'border-danger'
        }`}
        style={{ border: `2px solid #dee2e6 !important`, ...style }}
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
