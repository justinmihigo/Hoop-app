import { PropsWithChildren, createContext, useState } from "react";
import AppwriteService from "./service";
    type context = {
        appwriteService: typeof AppwriteService;
        isLoggedin: boolean;
        setIsLoggedin: (isLoggedin:boolean) => void;
    }
    const defaultValue: context = {
        appwriteService: AppwriteService,
        isLoggedin: false,
        setIsLoggedin: () => { },
    }
    export const AppwriteContext = createContext(defaultValue);
    export const appwrite: React.FC<PropsWithChildren> = ({ children }) => {
        const [isLoggedin,setIsLoggedin] = useState(false);
        const initialValue={
            appwriteService: AppwriteService,
            isLoggedin,
            setIsLoggedin,
        }
    return (
        <AppwriteContext.Provider value={initialValue}>
            {children}
        </AppwriteContext.Provider>
    )
}
export default AppwriteContext;
