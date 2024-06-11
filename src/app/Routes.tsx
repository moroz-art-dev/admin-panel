import React from 'react';
import {BrowserRouter, Routes as RouterRoutes, Route} from 'react-router-dom';
import {routesConfig} from '@config/routesConfig';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <RouterRoutes>
        {Object.entries(routesConfig).map(([path, Component]) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      </RouterRoutes>
    </BrowserRouter>
  );
};

export default Routes;
