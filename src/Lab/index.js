// src/App.js
import React from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <MainContent />
      </div>
    </ThemeProvider>
  );
};

export default App;
