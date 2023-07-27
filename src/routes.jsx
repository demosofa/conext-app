import AboutUs from 'components/AboutUs/AboutUs';
import InvestmentPage from 'components/InvestmentPage/InvestmentPage';
import SearchContext from 'components/SearchConext/SearchConext';
import { Cards } from './components/startup/card';
import Layout from './layout';
import VoucherList from './pages/vourcher/VoucherList';

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

      {
        path: '/about-us',
        element: <AboutUs />,
      },
    ],
  },
];

export default routes;
