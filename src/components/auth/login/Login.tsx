import alarm from "assets/Img/alarm.svg";
import styled from "styled-components";
const Login = styled.div``;

const MyPage = styled.div`
  display: flex;
  height: 50px;
  justify-content: center;
  align-items: center;
`;

const Alarm = styled.div`
  width: 50px;
  margin-right: 8px;
`;

const MyBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 110px;
  height: 50px;
  background-color: #eaeaea;
  border-radius: 4px;
`;

const MyProfile = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #c4c4c4;
`;

const MyName = styled.div`
  font-size: 14px;
  font-weight: 700;
`;
export const LogIn_View = () => {
  return (
    <Login>
      <MyPage>
        <Alarm>
          <img src={alarm} alt="알람" />
        </Alarm>
        <MyBox>
          <MyProfile />
          <MyName>아무거나</MyName>
        </MyBox>
      </MyPage>
    </Login>
  );
};

export default LogIn_View;
