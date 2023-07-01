import React, { useEffect, useState } from "react";

export const AuthContext = React.createContext();


export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [pending, setPending] = useState(true);
  
    useEffect(() => {
      setCurrentUser({name:"kalees", authType: "ADMIN"})
    }, []);

    if(pending){
        return <>Loading...</>
      }

      return (
        <AuthContext.Provider
          value={{
            currentUser
          }}
        >
          {children}
        </AuthContext.Provider>
      );
    };