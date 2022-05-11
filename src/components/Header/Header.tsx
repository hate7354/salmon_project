import LogIn from "contents/login/LogIn";
import Title from "components/common/Title";
import styled from "styled-components";
import { Logo } from "./logo";
import { Content } from "components/common/Content";
import "styles/header/header.css";
const HeaderDiv = styled.div`
  background-color: ${props => props.theme.mainBackground};
  color: ${props => props.theme.primaryText};
  width: 100%;
  display: flex;
  background-color: #ffffff;
  justify-content: center;
  box-shadow: 0px 0px 2px #000000;
`;
const Header = () => {
  return (
    <HeaderDiv>
      <Content>
        <Logo>
          <Title name="브이씨아이" />
        </Logo>
        <LogIn session="on" />
      </Content>
    </HeaderDiv>
  );
};

export default Header;
