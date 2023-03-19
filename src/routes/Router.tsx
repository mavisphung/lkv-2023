import { createBrowserRouter } from 'react-router-dom';
import Routes from "./Routes";
import App from '../App';
import ErrorPage from '../pages/error/ErrorPage';
import AboutPage from '../pages/about/About';

const router = createBrowserRouter([
  {
    path: Routes.home,
    element: <App />,
  },
  {
    path: Routes.about,
    element: <AboutPage />,
  },
  {
    path: Routes.error,
    element: <ErrorPage />,
  },
]);

export default router;