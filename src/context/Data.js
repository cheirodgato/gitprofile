import React, { createContext, useState } from 'react';

export const DataContext = createContext(undefined);

// eslint-disable-next-line react/prop-types
const DataProvider = ({ children }) => {
  const [user, setUser] = useState('');
  const [data, setData] = useState({});
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <DataContext.Provider value={{ user, setUser, data, setData, loading, setLoading, show, setShow }}>
      {children}
    </DataContext.Provider>
  );
};
export default DataProvider;
