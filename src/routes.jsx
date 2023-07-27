import { Cards } from './components/startup/card';
import VoucherList from './pages/vourcher/VoucherList';
import Layout from './layout';
import SearchContext from 'components/SearchConext/SearchConext';

/**@type {import('react-router-dom').RouteObject[]} */
const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
<<<<<<< HEAD
        path: '/startup',
        element: <Cards />,
      },

      {
        path: '/voucher',
        element: <VoucherList />,
      },

      {
        path: '/search',
        element: <SearchContext />,
=======
        path: '/investment',
        element: <InvestmentsPage />,
>>>>>>> a1a6673 (feat: route)
      },
    ],
  },
];

export default routes;
