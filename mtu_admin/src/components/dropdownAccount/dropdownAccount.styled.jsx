import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Root = styled.div`
`;

export const DropdownContainer = styled.div`
  display: inline-block;
  position: relative;
`;

export const Dropbtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  border: none;
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  background: #fff;
`;

export const DropdownContent = styled.div`
  visibility: hidden;
  opacity: 0;
  position: absolute;
  right: 0;
  margin-top: 20px;
  background-color: #f1f1f1;
  min-width: 160px;
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

    ${DropdownContainer}:hover & {
      visibility: visible;
      opacity: 1;
      transform: translateY(0);
    }
  
`;

export const DropdownLink = styled(NavLink)`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  cursor: pointer;
  

  &:hover {
    background-color: #ddd;
  }
`;