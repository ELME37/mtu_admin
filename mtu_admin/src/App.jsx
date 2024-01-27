import React from "react";
import Router from "./router/router";
import Sidebar from "./components/sidebar/sidebar";
import Layout from "./components/layout/layout";
import { GlobalStyle } from "./style/style.styled";

export default function App() {
  return (
    <div className="App">
        <GlobalStyle/>
        <Sidebar/>
        <Layout>
          <Router />
        </Layout>
    </div>
  );
}
