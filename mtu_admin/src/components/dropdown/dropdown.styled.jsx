import styled from 'styled-components';

export const DropdownContainer = styled.div`
  display: inline-block;
  position: relative;
`;

export const Dropbtn = styled.button`
  padding: 16px;
  font-size: 16px;
  border: none;
`;

export const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;

  ${({ $trigger }) =>
    $trigger === 'hover' &&
    `
    ${DropdownContainer}:hover & {
      display: block;
    }
  `}

  ${({ $trigger }) =>
    $trigger === 'click' &&
    `
    &.open {
      display: block;
    }
  `}
`;

export const DropdownLink = styled.a`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;

  &:hover {
    background-color: #ddd;
  }
`;