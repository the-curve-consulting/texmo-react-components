import React from 'react';
import ListSectionContext, { ListSection } from '../ListSectionContext';

export interface ListBodyProps extends React.HTMLProps<HTMLDivElement> {}

const ListBody = ({ children, ...rest }: ListBodyProps) => {
  return (
    <div {...rest}>
      <ListSectionContext.Provider value={ListSection.BODY}>
        {children}
      </ListSectionContext.Provider>
    </div>
  );
};

export default ListBody;
