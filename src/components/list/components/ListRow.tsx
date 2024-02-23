import React, { forwardRef } from 'react';

export interface ListRowProps extends React.HTMLProps<HTMLDivElement> {
  borderColour?: string;
}

const ListRow = forwardRef<HTMLDivElement, ListRowProps>(
  ({ className, style, borderColour, children, ...rest }, ref) => {
    const childrenArray = React.Children.toArray(children);

    return (
      <div
        className={`${className} row text-center mt-3 mx-0 list-row`}
        style={{ border: `2px solid ${borderColour}`, ...style }}
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
