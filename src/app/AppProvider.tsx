import {AppProviderProps} from '@models/AppProviderProps';
import {ThemeProvider} from '@mui/material/styles';
import {configureStore} from '@reduxjs/toolkit';
import theme from '@theme/theme';
import React from 'react';
import {Provider} from 'react-redux';

import rootReducer from './store/rootReducer';

const store = configureStore({
  reducer: rootReducer,
});

const AppProvider: React.FC<AppProviderProps> = ({children}) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </Provider>
  );
};

export default AppProvider;
