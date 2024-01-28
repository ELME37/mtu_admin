import React, { useState } from 'react';
import Router from "./router/router";
import Sidebar from "./components/sidebar/sidebar";
import Layout from "./components/layout/layout";
import { GlobalStyle } from "./style/style.styled";

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="App">
        <GlobalStyle/>
        <Sidebar isOpen={isSidebarOpen} />
        <Layout isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar}>
          <Router />
        </Layout>
    </div>
  );
}
