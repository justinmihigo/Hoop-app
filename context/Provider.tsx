import React, { createContext, useState } from 'react';

interface AppContextProps {
  open: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AppContext = createContext<AppContextProps>({
  open: false,
  setIsOpen: () => {}, 
});

export default function Provider({children}) {
  const [open, setIsOpen] = useState(false);

  return (
    <AppContext.Provider value={{ open, setIsOpen }}>
      {children}
    </AppContext.Provider>
  );
}
