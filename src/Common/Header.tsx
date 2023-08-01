import Link from "next/link";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderDiv>
      <Link href="/">
        <HeaderLogo src="/Images/mainLogo.svg" />
      </Link>
      <HeaderNavUl>
        <HeaderNavLi>
          <Link href="/designs">Designs </Link>
        </HeaderNavLi>
        <HeaderNavLi>
          <Link href="/projects">Projects</Link>
        </HeaderNavLi>
        <HeaderNavLi>
          <Link href="/members">Members</Link>
        </HeaderNavLi>
      </HeaderNavUl>
    </HeaderDiv>
  );
};

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
  @media screen and (min-width: 1280px) {
    margin-left: 1.5rem;
    width: 150px;
    height: 30px;
  }

  @media screen and (min-width: 768px) {
    margin-left: 1rem;
    width: 150px;
    height: 30px;
  }

  width: 100px;
  height: 20px;
  margin-left: 0.5rem;
`;

const HeaderNavUl = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  @media screen and (min-width: 1280px) {
    margin-right: 1rem;
    font-size: 15pt;
  }

  @media screen and (min-width: 768px) {
    margin-right: 1.5rem;
    font-size: 15pt;
  }

  margin-right: 1rem;
  font-size: 10pt;
  font-weight: bold;
`;

const HeaderNavLi = styled.li`
  list-style: none;

  @media screen and (min-width: 1280px) {
    margin-left: 2rem;
    
  }

  @media screen and (min-width: 768px) {
    margin-left: 2rem;
  }

  margin-left: 2rem;

  a {
    text-decoration: none;
  }

  a:visited {
    color: #0e0e0e;
  }
`;

export default Header;
