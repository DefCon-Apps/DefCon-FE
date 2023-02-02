import Link from "next/link";
import styled from "styled-components";


const Header = () => {
  return (
    <HeaderDiv>
        <Link href="/"><HeaderLogo src="/Images/mainLogo.svg"/></Link>
      <HeaderNavUl>
        <HeaderNavLi><Link href="/Designs">Designs </Link></HeaderNavLi>
        <HeaderNavLi><Link href="/Projects">Projects</Link></HeaderNavLi>
        <HeaderNavLi><Link href="/Members">Members</Link></HeaderNavLi>
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
  top : 0;
  z-index: 3;
  font-family: 'Noto Sans KR';
  font-size: 20px;
  font-weight: bold;
`;

const HeaderLogo = styled.img`
  width: 150px;
  height: 30px;
  margin-left: 1.5rem;
  margin-top: 1.5rem;
`;

const HeaderNavUl = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  
  margin-top: 2.5rem;
  margin-right: 2rem;
`;

const HeaderNavLi = styled.li`
  margin-left: 2rem;
  padding-bottom: 1rem;
  list-style: none;
  a{text-decoration:none;}
  a:visited{color : #0e0e0e;}
`;

export default Header;
