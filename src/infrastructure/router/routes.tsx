import { RouteObject } from 'react-router-dom';
import { Blog } from '../pages/blog/blog';
import { Conferences } from '../pages/conferences/conferences';
import { Home } from '../pages/home/home';
import { Schedule } from '../pages/schedule/schedule';
import { StudyCases } from '../pages/study-cases/study-cases';
import { MainLayout } from '../shared/main-layout/main-layout';

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
