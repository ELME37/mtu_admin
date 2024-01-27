import React from "react";
import { Root } from "./layout.styled";
import Header from "../header/header";
import Footer from "../footer/footer";

export default function Layout ({children}){
    return (
        <Root>
            <Header/>
            {children}
            <Footer/>
        </Root>
    )
}