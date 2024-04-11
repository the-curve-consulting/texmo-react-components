import classNames from 'classnames';
import React, { forwardRef } from 'react';

export interface ListRowProps extends React.HTMLProps<HTMLDivElement> {
  overdue?: boolean;
}

const ListRow = forwardRef<HTMLDivElement, ListRowProps>(
  ({ className, style, children, overdue, ...rest }, ref) => {
    return (
      <div
        className={classNames(className, 'row text-center mt-2 mx-0 list-row')}
        style={{ border: overdue ? '2px solid #99444f' : 'none', ...style }}
        ref={ref}
        {...rest}
      >
        {children}
      </div>
    );
  }
);

ListRow.displayName = 'ListRow';

export default ListRow;
