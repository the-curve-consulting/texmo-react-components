import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from '../layouts/Layout';
import ListPage from '../pages/ListPage';
import FormPage from '../pages/FormPage';
import HomePage from '../pages/HomePage';
import './index.scss';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="form" element={<FormPage />} />
      <Route path="list" element={<ListPage />} />
    </Route>
  ),
);

export const Router = () => {
  return (
    <RouterProvider router={router} />
  )
}