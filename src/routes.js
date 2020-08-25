import React from 'react';
import HomePage from "./pages/HomePage/HomePage";
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import ProductListPage from "./pages/ProductListPage/ProductListPage";

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <HomePage />
  },
  {
    path: "/product-list",
    exact: false,
    main: () => <ProductListPage />
  },
  {
    path: "",
    exact: false,
    main: () => <NotFoundPage />
  }
];
export default routes;
