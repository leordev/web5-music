import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { IndexPage } from '@/pages/index-page';
import { AboutPage } from '@/pages/about-page';
import { ConnectedAppsPage } from '@/pages/connected-apps-page';
import { ErrorPage } from '@/pages/error-page';
import { Layout } from './components/layout/layout';

export const routes = [
  {
    path     : '/',
    element  : <Layout />,
    children : [
      {
        index   : true,
        element : <IndexPage />,
      },
      {
        path    : 'connected-apps',
        element : <ConnectedAppsPage />,
      },
      {
        path    : 'about',
        element : <AboutPage />,
      },
      {
        path    : '*',
        element : <ErrorPage />,
      },
    ]
  },
];

const router = createBrowserRouter(routes);

export const App = () => <RouterProvider router={router} />;