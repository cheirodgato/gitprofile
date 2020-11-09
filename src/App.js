import React from 'react';
import Routes from './routes';
import GlobalStyle from './styles/global';
import DataProvider from './context/Data';

const App = () => {
  return (
    <DataProvider>
      <Routes />
      <GlobalStyle />
    </DataProvider>
  );
};

export default App;
