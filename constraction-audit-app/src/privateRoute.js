import React, { useContext } from "react";
import { Route, Redirect, Navigate } from "react-router-dom";
import { AuthContext } from "./auth";
const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const {currentUser} = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={routeProps =>
        !!currentUser ? (
          <RouteComponent {...routeProps} />
        ) : (
          // <Redirect to={"/login"} />
          <Navigate to="login"/>
        )
      }
    />
  );
};


export default PrivateRoute