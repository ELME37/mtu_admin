import React from 'react';
import { Root } from "./layout.styled";
import Header from "../header/header";
import Footer from "../footer/footer";

export default function Layout({ children, isSidebarOpen, toggleSidebar }) {
    return (
        <Root $isSidebarOpen={isSidebarOpen}>
            <Header toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
            {children}
            <Footer />
        </Root>
    );
}
