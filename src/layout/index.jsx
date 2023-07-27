import { Outlet } from 'react-router';
import Navbar from './Navbar';
import Footer from './Footer';
import { createContext, useState } from 'react';
import cities from 'constants/cities';

export const City = createContext({ city: null, setCity: null });

export default function Layout() {
  const [city, setCity] = useState(cities[2].value);

  return (
    <City.Provider value={{ city, setCity }}>
      <div id="layout" style={{ overflow: 'unset' }}>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </City.Provider>
  );
}
