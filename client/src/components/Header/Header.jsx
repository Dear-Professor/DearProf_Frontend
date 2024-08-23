import styled from "styled-components";
import logo from "../../assets/images/Logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Container>
      <LogoWrapper>
        <Link to="/">
          <Logo />
        </Link>
        <MenuWrapper>
          <Link to="/write">
            <Menu>Write</Menu>
          </Link>
          <Link to="/templates">
            <Menu>Template</Menu>
          </Link>
          <Link to="/mailbox">
            <Menu>Mailbox</Menu>
          </Link>
          <Link to="/my">
            <Menu>My</Menu>
          </Link>
        </MenuWrapper>
      </LogoWrapper>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 38px;
  position: fixed;
  top: 0;
  left: 0;
  box-sizing: border-box;
  border-bottom: 0.063rem solid rgba(0, 0, 0, 0.1);
  background: white;
  z-index: 1000;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative; /* 메뉴를 로고 오른쪽에 위치시키기 위해 상대 위치 사용 */
  justify-content: center;
  width: auto;
  height: 2.375rem; /* 헤더의 높이에 맞춤 */
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: url(${logo});
  width: 5.5rem;
  height: 1rem;
  cursor: pointer;
  background-repeat: no-repeat;
  background-size: contain;
`;

const Menu = styled.span`
  font-family: "PreRegular";
  font-size: 10px;
  color: black;
  font-weight: normal;

  &:hover {
    color: black;
    font-weight: 700;
  }
`;

const MenuWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 3.75rem;
  align-items: center;
  position: absolute;
  left: 100%;
  margin-left: 9.138rem;

  ${Menu} {
    color: black; /* 기본 색상 */
    font-weight: 400; /* 기본 폰트 굵기 */
  }

  &:hover ${Menu} {
    color: #666; /* hover 상태에서 비활성 메뉴 색상 */
  }

  &:hover ${Menu}:hover {
    color: black; /* hover 상태에서 활성 메뉴 색상 */
    font-weight: 700; /* hover 상태에서 폰트 굵기 */
  }
`;
