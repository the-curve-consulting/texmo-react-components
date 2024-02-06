import { createContext } from 'react';

export enum ListSection {
  NONE,
  HEAD,
  BODY,
}

const ListSectionContext = createContext<ListSection>(ListSection.NONE);

export default ListSectionContext;
