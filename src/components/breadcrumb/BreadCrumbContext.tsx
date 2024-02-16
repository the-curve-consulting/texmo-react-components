import { createContext } from 'react';
import { Link } from 'react-router-dom';

const BreadcrumbContext = createContext<typeof Link>(Link);

export default BreadcrumbContext;
