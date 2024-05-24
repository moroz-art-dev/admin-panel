import ResourceLoader from '@components/common/ResourceLoader';
import {ThemeProvider} from '@mui/material/styles';
import {configureStore} from '@reduxjs/toolkit';
import theme from '@theme/theme';
import React from 'react';
import {Provider} from 'react-redux';

import {AppProviderProps} from './AppProviderProps';
import rootReducer from './store/rootReducer';

const store = configureStore({
  reducer: rootReducer,
});

const AppProvider: React.FC<AppProviderProps> = ({children}) => {
  return (
    <ResourceLoader>
      <Provider store={store}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </Provider>
    </ResourceLoader>
  );
};

export default AppProvider;
