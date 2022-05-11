import styled from "styled-components";
import { Content } from "components/common/Content";
const FooterDiv = styled.div`
  width: 100%;
  font-size: 12px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  background-color: #ededef;
`;

const Email = styled.div``;

const Etc = styled.div``;

const EtcCon = styled.ul`
  display: flex;
  align-items: center;
`;
const EtcItem = styled.li`
  padding: 0px 4px;
`;
const Footer = () => {
  return (
    <FooterDiv>
      <Content>
        <Email>문의 help@salmon.co.kr</Email>
        <Etc>
          <EtcCon>
            <EtcItem>이용약관</EtcItem>
            <EtcItem>|</EtcItem>
            <EtcItem>개인정보처리방침</EtcItem>
          </EtcCon>
        </Etc>
      </Content>
    </FooterDiv>
  );
};

export default Footer;
