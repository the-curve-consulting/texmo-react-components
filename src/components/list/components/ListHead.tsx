import React from 'react';
import ListSectionContext, { ListSection } from '../ListSectionContext';

export interface ListHeadProps extends React.HTMLProps<HTMLDivElement> {}

const ListHead = ({ className, children, ...rest }: ListHeadProps) => {
  return (
    <ListSectionContext.Provider value={ListSection.HEAD}>
      <div
        className={`row mt-5 card-header text-center ${className}`}
        {...rest}
      >
        {children}
      </div>
    </ListSectionContext.Provider>
  );
};

export default ListHead;
