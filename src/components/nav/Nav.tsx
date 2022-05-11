import styled from "styled-components";

const Menu = styled.nav`
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  font-size: 14px;
  font-weight: bold;
`;

const Menulist = styled.ul`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  list-style: none;
  height: 27px;
`;

const Item = styled.li`
  padding: 0px 22.5px;
  height: 27px;
  &:hover {
    cursor: pointer;
    border-bottom: 3px solid #e99e46;
  }
`;

const Nav = () => {
  return (
    <Menu>
      <Menulist>
        <Item>전자 결재</Item>
        <Item>근태 내역</Item>
        <Item>급여 내역</Item>
        <Item>법인카드</Item>
        <Item>계정 관리</Item>
      </Menulist>
    </Menu>
  );
};

export default Nav;
