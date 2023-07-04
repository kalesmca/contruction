import { Navigate } from "react-router-dom";
import React,{useContext} from "react";
import { AuthContext } from "./auth";

export const ProtectedRoute = ({ children }) => {
    const {currentUser} = useContext(AuthContext);

  if (!currentUser) {
    // user is not authenticated
    return <Navigate to="/login" />;
  }
  return children;
};