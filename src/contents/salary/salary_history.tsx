import Title from "components/common/Title";
import Button from "components/common/Button";
import Price from "components/common/Price";
import styled from "styled-components";
import prev from "assets/Img/prev.svg";
import next from "assets/Img/next.svg";
const SalaryHeadDiv = styled.div``;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 60px;
`;

const Date = styled.div`
  width: 186px;
  height: 40px;
  background: #f6f6f6;
  border-radius: 4px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const DateItem = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border-radius: 2px;
  background-color: #eaeaea;
  background-image: url(${props => props.name});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 15px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 50px;
`;

const Schedule = styled.div`
  width: 331px;
  height: 52px;
`;

const SALARY_HISTORY = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const title = [
    { name: "이번 달 지급 예정", value: 11111111 },
    { name: "재직자", value: 22222222 },
    { name: "퇴사자", value: 34444444 },
  ];

  const titleItem = title.map((val, idx) => (
    <Schedule key={idx}>
      <Title name={val.name} fontSize={16} color="#848484" />
      <Price margin="on" value={val.value}></Price>
    </Schedule>
  ));

  return (
    <SalaryHeadDiv>
      <Top>
        <Title name="급여 내역" />
        <Date>
          <DateItem name={prev} />
          <Title name="이번 달" />
          <DateItem name={next} />
        </Date>
        <Button width={123} name="급여 대장" />
      </Top>
      <Bottom>{titleItem}</Bottom>
    </SalaryHeadDiv>
  );
};

export default SALARY_HISTORY;
