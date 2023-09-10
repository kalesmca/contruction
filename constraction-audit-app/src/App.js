import React from 'react';
import './App.css';
import { BrowserRouter , Routes, Route } from "react-router-dom";

import { AuthProvider } from './auth';
import LayoutContainer from './containers/prodected-layout/layoutContainer';
import DashboardComponent from './containers/dashboard/dashboardComponent';
import SummaryListComponent from './containers/summary/summaryListComponent';
import LoginComponent from './containers/login/login';
import { ProtectedRoute } from './ProtectedRoute';
import HomeLayout from './containers/home/homeLayout';
import ConfigList from './containers/constructionConfig/configList';
import NewEntryComponent from './containers/Audit/new-entry';
import EntryListComponent from './containers/Audit/entry-list';
function App() {
  return (
    <BrowserRouter>
    
      <Routes>
          <Route path="/" element={<LayoutContainer />}>
                <Route index element={<LoginComponent />} />
                <Route path="dashboard" element={<DashboardComponent />} />
                {/* <Route path="summary-list" element={<SummaryListComponent />} /> */}
                <Route path="config" element={<ConfigList />} />
                <Route path="new-entry" element={<NewEntryComponent />} />
                <Route path="entry-List" element={<EntryListComponent />} />



                {/* <Route path="*" element={<NotFoundComponent />} /> */}
                
          </Route>

        </Routes>
    </BrowserRouter>
  );
}

export default App;
