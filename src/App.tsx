import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { IndexPage } from '@/pages/index-page';
import { AboutPage } from '@/pages/about-page';
import { ConnectedAppsPage } from '@/pages/connected-apps-page';
import { ErrorPage } from '@/pages/error-page';
import { Layout } from '@/components/layout/layout';
import { Web5Provider } from '@/lib/web5-provider';
import { Toaster } from './components/ui';
import { ConnectorsProvider } from './lib/connectors/connectors-provider';

const LayoutWithProviders = () => (
  <Web5Provider>
    <ConnectorsProvider>
      <Layout />
      <Toaster />
    </ConnectorsProvider>
  </Web5Provider>
);

export const routes = [
  {
    path: '/',
    element: <LayoutWithProviders />,
    children: [
      {
        index: true,
        element: <IndexPage />,
      },
      {
        path: 'connected-apps/:connector?',
        element: <ConnectedAppsPage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: '*',
        element: <ErrorPage />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export const App = () => <RouterProvider router={router} />;
