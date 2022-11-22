import { RouteObject } from 'react-router-dom';
import { Blog } from '../pages/blog';
import { Conferences } from '../pages/conferences';
import { Home } from '../pages/home';
import { Schedule } from '../pages/schedule';
import { StudyCases } from '../pages/study-cases';
import { MainLayout } from '../shared/main-layout';

const routes: RouteObject[] = [
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
      {
        path: 'casos-de-estudio',
        element: <StudyCases />,
      },
      {
        path: 'consultas',
        element: <Schedule />,
      },
      {
        path: 'conferencias',
        element: <Conferences />,
      },
    ],
  },
];

export default routes;
