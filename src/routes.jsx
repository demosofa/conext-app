import { Cards } from './components/startup/card';
import VoucherList from './pages/vourcher/VoucherList';
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

      {
        path: '/voucher',
        element: <VoucherList />,
      },
    ],
  },
];

export default routes;
