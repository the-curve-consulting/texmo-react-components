import { createContext } from 'react';
import { Link } from 'react-router-dom';

const BreadcrumbsContext = createContext<typeof Link>(Link);

export default BreadcrumbsContext;
