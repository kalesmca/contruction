import React, { useEffect, useState } from "react";
import {POPUP_INIT_STATE} from '../config/constants';
export const ModalContext = React.createContext();


export const ModalProvider = ({ children }) => {
    const [obj, setObj] = useState(POPUP_INIT_STATE)
    const [popupFlag, setPopupFlag] = useState(false)
  
    useEffect(() => {
        
    }, []);

    

      return (
        <ModalContext.Provider
          value={{
            obj, setObj , popupFlag, setPopupFlag
          }}
        >
          {children}
        </ModalContext.Provider>
      );
    };