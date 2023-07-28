import { Cards } from './components/startup/card';
import Layout from './layout';
import VoucherList from './pages/vourcher/VoucherList';
import { Contact } from 'pages/contact/contact';
import Home from 'pages/home';

import CookiesPolicy from 'components/Cookies Policy/CookiesPolicy';
import SearchContext from 'pages/SearchConext/SearchConext';
import AboutUs from 'pages/AboutUs/AboutUs';
import FAQPage from 'pages/FAQ/FAQPage';
<<<<<<< HEAD
import HotNeed from 'pages/hot-needs/HotNeed';
=======
import InvestmentPage from 'pages/InvestmentPage/InvestmentPage';
import HotNeed from 'components/HotNeedSearch/HotNeed';
>>>>>>> bbda0d0 (fix: source code)

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
