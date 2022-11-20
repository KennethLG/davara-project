import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Blog } from '../pages/blog/blog';
import { Home } from '../pages/home/home';
import { MainLayout } from '../shared/main-layout/main-layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'blog',
        element: <Blog />,
      },
    ],
  },
]);

const Router = () => <RouterProvider router={router} />;

export default Router;
