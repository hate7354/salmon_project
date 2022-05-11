import styled from "styled-components";

const SelectBoxDiv = styled.select<{ width: number }>`
  width: ${props => props.width}px;
  height: 30px;
  background: #f8f9fb;
  border: 1px solid #eaeaea;
  box-sizing: border-box;
  padding: 0px 12px;
  margin: 0px 6px;
`;

const Option = styled.option``;

type selectBoxProps = {
  name?: any;
  width?: number[];
};

export const SelectBox: React.FC<selectBoxProps> = ({ name, width }) => {
  return name.map((val: string, idx: number) => (
    <SelectBoxDiv key={idx} width={width[idx]}>
      <Option key={idx}>{val}</Option>
    </SelectBoxDiv>
  ));
};
