import Link from "next/link";
import styled from "styled-components";


const Header = () => {
  return (
    <HeaderDiv>
      <HeaderLogoDiv>
        <Link href="/"><img src="/Images/mainLogo.svg"/></Link>
      </HeaderLogoDiv>
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
  width: 100vw;
  height: 5rem;
  position: fixed;
  top : 0;
  z-index: 3;
  font-family: 'Noto Sans KR';
  font-size: 20px;
  font-weight: bold;
  background-color: #fff;
`


const HeaderLogoDiv = styled.div`
  width: 10rem;
  height: 2rem;
  margin-left: 1.5rem;
  margin-top: 1.5rem;
`

const HeaderNavUl = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  
  margin-top: 2.5rem;
  margin-right: 2rem;
`

const HeaderNavLi = styled.li`
  margin-left: 2rem;
  list-style: none;
  a{text-decoration:none;}
  a:visited{color : #0e0e0e;}
`

export default Header;
