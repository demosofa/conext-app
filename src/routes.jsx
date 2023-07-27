import { Cards } from './components/startup/card';
import VoucherList from './pages/vourcher/VoucherList';
import Layout from './layout';
import SearchContext from 'components/SearchConext/SearchConext';
import InvestmentPage from 'components/InvestmentPage/InvestmentPage';

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

      {
        path: '/search',
        element: <SearchContext />,
      },

      {
        path: '/investment',
        element: <InvestmentPage />,
      },
    ],
  },
];

export default routes;
