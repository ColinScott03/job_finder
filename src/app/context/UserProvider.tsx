import { useState } from "react";
import { userContext } from "./userContext";

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState({ id: '' });

  return (
    <userContext.Provider value={{ ...user, setUser }}>
      {children}
    </userContext.Provider>
  );
};