import React from "react";
import Layout from "./components/layout/layout";
import Router from "./router/router";

export default function App() {
  return (
    <div className="App">
      <Layout>
        <Router />
      </Layout>
    </div>
  );
}
