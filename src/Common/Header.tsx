import Link from "next/link";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

interface Props{
  isDesktop : boolean;
}

const Header = () => {
  const isDesktop = useMediaQuery({
    query: "(min-width:768px)",
  });

  return (
    <HeaderDiv>
        <Link href="/"><HeaderLogo src="/Images/mainLogo.svg" isDesktop={isDesktop}/></Link>
      <HeaderNavUl isDesktop={isDesktop}>
        <HeaderNavLi isDesktop={isDesktop}><Link href="/Designs">Designs </Link></HeaderNavLi>
        <HeaderNavLi isDesktop={isDesktop}><Link href="/Projects">Projects</Link></HeaderNavLi>
        <HeaderNavLi isDesktop={isDesktop}><Link href="/Members">Members</Link></HeaderNavLi>
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
`;

const HeaderLogo = styled.img<Props>`
  width: 150px;
  height: 30px;
  margin-left: ${props => props.isDesktop ? "1.5rem" : "0.5rem"};
  margin-top: 1.5rem;
`;

const HeaderNavUl = styled.ul<Props>`
  display: flex;
  flex-flow: row nowrap;
  
  margin-top: 2.5rem;
  margin-right: ${props => props.isDesktop ? "2rem" : "0.9rem"};
  font-size: 15pt;
  font-weight: bold;
`;

const HeaderNavLi = styled.li<Props>`
  margin-left: 2rem;
  padding-bottom: ${props => props.isDesktop ? "5px" : "15px"};
  list-style: none;
  a{text-decoration:none;}
  a:visited{color : #0e0e0e;}
`;

export default Header;
