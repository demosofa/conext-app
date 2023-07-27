import { Cards } from './components/startup/card';
import Layout from './layout';

/**@type {import('react-router-dom').RouteObject[]} */
const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/startup',
        element: <Cards />,
      },
    ],
  },
];

export default routes;
