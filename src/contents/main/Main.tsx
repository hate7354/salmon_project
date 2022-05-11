import SALARY_HISTORY from "contents/salary/salary_history";
import SALARY_HISTORY_TABLE from "contents/salary/salary_history_table";
import styled from "styled-components";

const MainDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 20px auto;
`;

const Div = styled.div`
  width: 1180px;
  background-color: #ffffff;
  padding: 30px 40px 30px 40px;
`;

const Main = () => {
  return (
    <MainDiv>
      <Div>
        <SALARY_HISTORY />
        <SALARY_HISTORY_TABLE />
      </Div>
    </MainDiv>
  );
};

export default Main;
