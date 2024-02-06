import React from 'react';
import ListSectionContext, { ListSection } from '../ListSectionContext';

export interface ListHeadProps extends React.HTMLProps<HTMLDivElement> {}

const ListHead = ({ className, children, ...rest }: ListHeadProps) => {
  return (
    <ListSectionContext.Provider value={ListSection.HEAD}>
      <div
        className={`${className} mx-0 row card-header text-center list-head py-2 list-head sticky-top`}
        {...rest}
      >
        {children}
      </div>
    </ListSectionContext.Provider>
  );
};

export default ListHead;
