import { QueryClient, QueryClientProvider } from 'react-query';
import { Outlet } from 'react-router';
import Navbar from './Navbar';
import Footer from './Footer';

const queryClient = new QueryClient();

export default function Layout() {
  return (
    <>
      <Navbar />
      <QueryClientProvider client={queryClient}>
        <Outlet />
      </QueryClientProvider>
      <Footer />
    </>
  );
}
