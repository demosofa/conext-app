import AboutUs from 'components/AboutUs/AboutUs';
import InvestmentPage from 'components/InvestmentPage/InvestmentPage';
import SearchContext from 'components/SearchConext/SearchConext';
import { Cards } from './components/startup/card';
import Layout from './layout';
import VoucherList from './pages/vourcher/VoucherList';
import { Contact } from 'pages/contact/contact';
import Home from 'pages/home';
import FAQPage from 'components/FAQ/FAQPage';
import CookiesPolicy from 'components/Cookies Policy/CookiesPolicy';

/**@type {import('react-router-dom').RouteObject[]} */
const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },

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

      {
        path: '/contact-us',
        element: <Contact />,
      },

      {
        path: '/faq-page',
        element: <FAQPage />,
      },

      {
        path: '/policy',
        element: <CookiesPolicy />,
      },
      {
        path: '/hot-needs',
        element: <HotNeed />,
      },
    ],
  },
];

export default routes;
