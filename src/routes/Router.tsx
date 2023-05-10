import { createBrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import ErrorPage from "../pages/error/ErrorPage";
import AboutPage from "../pages/about/AboutPage";
import HomePage from "../pages/home/HomePage";
import App from "../App";
import { CategoriesPage } from "../pages/categories/CategoriesPage";
import { ServicesPage } from "../pages/services/ServicesPage";
// import ProductDetailPage from "../pages/product-detail/ProductDetailPage";
// import ProductsPage from "../pages/products/ProductsPage";

const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: Routes.root,
        element: <HomePage />,
      },
      {
        path: Routes.home,
        element: <HomePage />,
      },
      {
        path: Routes.about,
        element: <AboutPage />,
      },
      {
        path: Routes.services,
        element: <ServicesPage />,
      },
      // {
      //   path: Routes.products,
      //   children: [
      //     {
      //       index: true,
      //       element: <ProductsPage />,
      //     },
      //     {
      //       path: ":productId",
      //       element: <ProductDetailPage />,
      //     },
      //   ],
      // },
      {
        path: Routes.categories,
        element: <CategoriesPage />,
      },
      {
        path: Routes.error,
        element: <ErrorPage />,
      },
    ],
  },
]);

export default router;
