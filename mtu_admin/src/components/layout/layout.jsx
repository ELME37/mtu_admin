import React from "react";
import { StyledContainer } from "./layout.styled";

export default function Layout ({children}){
    return (
        <StyledContainer>
            <div className="container">
                    {children}
            </div>
        </StyledContainer>
    )
}