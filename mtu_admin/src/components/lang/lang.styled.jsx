import styled from "styled-components";
import { colors } from "../../style/themes";

export const Root = styled.div`
  position: relative;
  display: inline-block;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.blue};
  color: white;
  font-size: 16px;
  border: none;
  cursor: pointer;
`;

export const Content = styled.div`
  visibility: hidden;
  opacity: 0;
  position: absolute;
  margin-top: 20px;
  background-color: white;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  transform: translateY(30px);
  transition: opacity 0.4s ease-in-out, transform 0.3s ease-in-out, visibility 0.3s ease-in-out;

  &::before {
    content:"";
    width: 100%;
    height: 20px;
    background: transparent;
    position: absolute;
    top: -20px;
    left: 0;
  }

  ${Root}:hover & {
    visibility: visible;
    opacity: 1;
    transform: translateY(0);
  }
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
`;

export const Item = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: #7e7e7e80;
  }
`;

export const FlagIcon = styled.img`
  width: 24px;
  height: 20px;
  margin-right: 8px;
`;
