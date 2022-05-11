import styled from "styled-components";

export const TableSheet = styled.div`
  width: 100%;
  font-size: 14px;
`;
export const Thead = styled.div`
  font-weight: 500;
  color: #848484;
  height: 42px;
  border-top: 1px solid #eaeaea;
`;
export const Tbody = styled.div`
  font-weight: 400;
  color: #050505;
`;
export const ThTr = styled.div`
  display: flex;
  flex-warp: wrap;
  align-items: center;
  box-sizing: border-box;
  border-bottom: 1px solid #eaeaea;
  height: 42px;
`;
export const Tr = styled(ThTr)`
  height: 61px;

  &:hover {
    background-color: gray;
  }
`;
export const Th = styled.div`
  display: flex;
  width: 200px;
  height: 40px;
  align-items: center;
  padding: 0px 20px;

  &:first-child {
    width: 20px;
    height: 20px;
  }
`;
export const Td = styled(Th)``;
