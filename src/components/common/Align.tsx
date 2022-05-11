import styled from "styled-components";
import dropdown from "assets/Img/dropDownIcon.svg";

const AlignDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 40px;
`;

const AlignTitle = styled.div`
  text-align: center;
  margin: 0px 8px;
  width: 75px;
  cursor: pointer;
`;

type AlignProps = {
  title?: string[];
};

export const Align: React.FC<AlignProps> = ({ title }) => {
  return (
    <AlignDiv>
      {title.map((val: string, idx: number) => {
        return (
          <AlignTitle key={idx}>
            {val}
            <img src={dropdown} alt="" />
          </AlignTitle>
        );
      })}
    </AlignDiv>
  );
};
