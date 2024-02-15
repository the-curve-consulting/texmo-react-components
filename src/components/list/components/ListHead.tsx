import React from 'react';
import ListSectionContext, { ListSection } from '../ListSectionContext';

export interface ListHeadProps extends React.HTMLProps<HTMLDivElement> {}

const ListHead = ({ className, children, ...rest }: ListHeadProps) => {
  return (
    <ListSectionContext.Provider value={ListSection.HEAD}>
      <div className={`${className} row card-header text-center`} {...rest}>
        {children}
      </div>
    </ListSectionContext.Provider>
  );
};

export default ListHead;
