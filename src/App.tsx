import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import GlobalStyle from './styles/global';
import AppProvider from './hooks';

function App() {
  return (
    <>
      <GlobalStyle />
      <AppProvider>
        <Router>
          <Routes />
        </Router>
      </AppProvider>
    </>
  );
}

export default App;
