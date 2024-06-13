import React from 'react';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import routesConfig from '@config/routesConfig';

const router = createBrowserRouter(routesConfig);

const Routes: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
