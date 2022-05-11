import styled from "styled-components";

const StyledButton = styled.button<{ width: number; height: number }>`
  background-color: #e99e46;
  color: #ffffff;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  border-radius: 40px;
  font-size: 16px;
  cursor: pointer;
`;
type ButtonProps = {
  name?: string;
  width?: number;
  height?: number;
};
const Button: React.FC<ButtonProps> = ({ name, width, height }) => {
  return (
    <StyledButton width={width} height={height}>
      {name}
    </StyledButton>
  );
};

Button.defaultProps = {
  name: "",
  width: 123,
  height: 40,
};

export default Button;
