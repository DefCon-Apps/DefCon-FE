import Link from "next/link";
import styled from "styled-components";


const Header = () => {
  return (
    <HeaderDiv>
      <ImageBox/>
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

  width: 100%;
  height: 5rem;

  font-size: 20px;

  background-color: red;
`

const ImageBox = styled.div`
  width: 10rem;
  height: 3rem;
  margin-left: 1.2rem;
  margin-top: 1.5rem;
  background-color: gray;
`

const HeaderNavUl = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  
  margin-top: 2.5rem;
  margin-right: 1.2rem;
`

const HeaderNavLi = styled.li`
  margin-left: 2rem;
  list-style: none;
  
  a{text-decoration:none;}
  a:visited{color : #0e0e0e;}
`

export default Header;
