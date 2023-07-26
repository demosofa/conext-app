import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import routes from './routes';

const queryClient = new QueryClient();
const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
