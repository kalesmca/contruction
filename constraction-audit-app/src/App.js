import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import { AuthProvider } from './auth';
import PrivateRoute from './privateRoute';
import LayoutContainer from './containers/layout/layoutContainer';
import DashboardComponent from './containers/dashboard/dashboardComponent';
import SummaryListComponent from './containers/summary/summaryListComponent';
import LoginComponent from './containers/login/login';


function App() {
  return (
    <AuthProvider>
    <Router>
      <div>
        <PrivateRoute exact path="/" component={LayoutContainer} />
        <PrivateRoute exact path="/dashboard" component={DashboardComponent} />
        <PrivateRoute exact path="/summary-list" component={SummaryListComponent} />


        <Route exact path="/login" component={LoginComponent} />
        {/* <Route exact path="/signup" component={SignUp} /> */}
      </div>
    </Router>
  </AuthProvider>
  );
}

export default App;
