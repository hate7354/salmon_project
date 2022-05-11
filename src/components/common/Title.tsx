import styled from "styled-components";
const TitleDiv = styled.h2<{ fontSize: number; color: string }>`
  color: ${props => props.color};
  font-size: ${props => props.fontSize}px;
  font-weight: bold;
`;
type TitleProps = {
  name?: string;
  fontSize?: number;
  color?: string;
};
const Title: React.FC<TitleProps> = ({ name, fontSize, color }) => {
  return (
    <TitleDiv color={color} fontSize={fontSize}>
      {name}
    </TitleDiv>
  );
};

Title.defaultProps = {
  name: "",
  fontSize: 20,
  color: "black",
};
export default Title;
