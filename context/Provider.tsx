import React, { createContext, useState } from 'react';

interface AppContextProps {
  open: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  currentUser:string,
  setCurrentUser:React.Dispatch<React.SetStateAction<string>>
}

export const AppContext = createContext<AppContextProps>({
  open: false,
  setIsOpen: () => {},
  currentUser:"",
  setCurrentUser:()=>{}
});
//@ts-ignore
export default function Provider({children}) {
  const [open, setIsOpen] = useState(false);
  const [currentUser,setCurrentUser] = useState("")

  return (
    <AppContext.Provider value={{ open, setIsOpen ,currentUser,setCurrentUser}}>
      {children}
    </AppContext.Provider>
  );
}
