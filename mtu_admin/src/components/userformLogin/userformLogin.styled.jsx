import styled, { keyframes } from "styled-components";
import { colors } from "../../style/themes";

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 600px;
  height: 500px;
  border-radius: 15px;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.25);
  z-index: 1001;
  overflow: hidden;
  background-color: white;
  transition: 0.5s;

  &::before {
    content: '';
    position: absolute;
    width: 200%;
    height: 200%;
    background-image: conic-gradient(transparent, transparent, transparent, ${colors.gold});
    animation: ${rotate} 8s linear infinite;
  }

  &::after {
    content: '';
    position: absolute;
    width: 96%;
    height: 96%;
    background-color: white;
    border-radius: 12px;
  }
`;

export const ContentLogin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 96%;
  height: 96%;
  border-radius: 12px;
  z-index: 1000;
  background: wheat;
  transition: transform 0.5s ease-in-out;
  transform: ${(props) => (props.$isVisible ? 'translateX(0)' : 'translateX(-104%)')};
`;

export const ContentSignUp = styled(ContentLogin)`
  background: ${colors.blue};
  transform: ${(props) => (props.$isVisible ? 'translateX(0)' : 'translateX(104%)')};
  `;

export const TitleLogin = styled.h2`
  font-size: 24px;
  font-style: italic;
  color: ${colors.blue};
  margin-bottom: 30px;
  }
`;

export const TitleSignUp = styled(TitleLogin)`
  color: ${colors.gold};
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  }
`;

export const InputLogin = styled.input`
  position: relative;
  width: 80%;
  outline: none;
  border: 1px ${colors.blue} solid;
  background: rgba(0,0,0,0.15);
  margin-top: 20px;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 14px;
  color: #fff;

  &::placeholder {
    color: rgba(255,255,255,0.5);
  }
`;

export const InputSignUp = styled(InputLogin)`
  border: 1px ${colors.gold} solid;
`;

export const ContainerError = styled.div`
    display: flex;
    justify-content: end;
    align-items: center;
    width: 80%;
    margin-top: 4px;
`;

export const Error = styled.p`
    font-size: 12px;
    font-style: italic;
    color: red;
    margin: 0;
    padding: 0;
`;

export const ContainerLinksLogin = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin: 10px 0;
`;

export const ContainerLinksSignUp = styled(ContainerLinksLogin)`
  justify-content: end;
`;

export const LinksLogin = styled.a`
  font-size: 14px;
  font-style: italic;
  color: ${colors.blue};
  }   
`;

export const TextLinkSignUp = styled.a`
  font-size: 14px;
  font-style: italic;
  color: ${colors.gold};
  }   
`;

export const LinksSignUp = styled.a`
  font-size: 16px;
  font-style: italic;
  font-weight: bold;
  margin-left: 10px;
  text-decoration: underline;
  color: ${colors.gold};
  }   
`;

export const LinkLogin = styled(LinksLogin)`
  text-decoration: underline;
  }   
`;

export const Button = styled.button`
  font-weight: bold;
  cursor: pointer;
  background: ${colors.blue};
  margin-top: 30px;
  padding: 8px 20px;
  border: 2px ${colors.gold} solid;
  border-radius: 10px;
  color: ${colors.gold};
  }
`;