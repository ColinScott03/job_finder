import { createContext, useContext } from "react";

export const userContext = createContext({
    id: '',
    setUser: (user: { id: string }) => {},
})

export const useUser = () => useContext(userContext);
