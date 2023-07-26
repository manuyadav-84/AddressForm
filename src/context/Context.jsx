import React, { createContext, useState } from 'react';

export const Addresslist = createContext();

const Context = ({ children }) => {
    const [addressDatalist, setaddressDatalist] = useState([]);
    return (
      <Addresslist.Provider value={{ addressDatalist, setaddressDatalist }}>
        {children}
      </Addresslist.Provider>
    );
  };
  
  export default Context;