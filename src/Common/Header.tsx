import Link from "next/link";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderDiv>
        <Link href="/">
          <HeaderLogo src="/Images/mainLogo.svg" />
        </Link>
        <HeaderNavUl>
          <HeaderNavLi>
            <Link href="/Designs">Designs </Link>
          </HeaderNavLi>
          <HeaderNavLi>
            <Link href="/Projects">Projects</Link>
          </HeaderNavLi>
          <HeaderNavLi>
            <Link href="/Members">Members</Link>
          </HeaderNavLi>
        </HeaderNavUl>
      </HeaderDiv>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  height: 8vh;

  @media all and (min-width: 1280px) {
    width: 1400px;
  }

  /* 노트북 & 테블릿 가로 (해상도 1024px ~ 1279px)*/
  @media all and (min-width: 1024px) and (max-width: 1279px) {
    width: 1024px;
  }

  /* 테블릿 가로 (해상도 768px ~ 1023px)*/
  @media all and (min-width: 768px) and (max-width: 1023px) {
    width: 768px;
  }

  /* 모바일 가로 & 테블릿 세로 (해상도 480px ~ 767px)*/
  @media all and (min-width: 480px) and (max-width: 767px) {
    width: 480px;
  }

  /* 모바일 세로 (해상도 ~ 479px)*/
  @media all and (max-width: 479px) {
    width: 360px;
  }
`;

const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 8vh;
  position: fixed;
  top: 0;
  z-index: 3;
  font-family: "Noto Sans KR";
`;

const HeaderLogo = styled.img`
  width: 150px;
  height: 30px;
  @media all and (min-width: 1024px) {
    margin-left: 1.5rem;
  }
  margin-left: 0.5rem;
  margin-top: 1.5rem;
`;

const HeaderNavUl = styled.ul`
  display: flex;
  flex-flow: row nowrap;

  margin-top: 2.5rem;
  @media all and (min-width: 1024px) {
    margin-right: 2rem;
  }
  margin-right: 0.9rem;
  font-size: 15pt;
  font-weight: bold;
`;

const HeaderNavLi = styled.li`
  margin-left: 2rem;
  padding-bottom: 15px;
  list-style: none;
  a {
    text-decoration: none;
  }
  a:visited {
    color: #0e0e0e;
  }
`;

export default Header;
