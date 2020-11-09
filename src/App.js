import React from 'react';
import GlobalStyle from './styles/global';
import Layout from './pages/Layout';
import DataProvider from './context/Data';

const App = () => {
  return (
    <DataProvider>
      <Layout />
      <GlobalStyle />
    </DataProvider>
  );
};

export default App;
