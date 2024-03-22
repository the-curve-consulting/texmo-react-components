import {
  NavLink,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from '../layouts/Layout';
import ListPage from '../pages/ListPage';
import FormPage from '../pages/FormPage';
import HomePage from '../pages/HomePage';
import TablePage from '../pages/TablePage';
import './index.scss';
import TexmoProvider from "@the-curve-consulting/texmo-react-components";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="form" element={<FormPage />} />
      <Route path="list" element={<ListPage />} />
      <Route path="table" element={<TablePage />} />
    </Route>
  ),
);

export const Router = () => {
  return (
    <TexmoProvider navLink={NavLink}>
      <RouterProvider router={router} />
    </TexmoProvider>
  )
}
