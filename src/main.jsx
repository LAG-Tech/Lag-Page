import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './Styles/global';
import theme from './Styles/theme';

import { Routes } from './Routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme} > 
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  </React.StrictMode>,
)
